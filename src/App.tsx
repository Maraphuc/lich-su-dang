import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Trophy, Clock, ChevronRight, ChevronLeft, RotateCcw, Home, CheckCircle2, Heart } from 'lucide-react';
import React, { useState, useEffect, useMemo } from 'react';
import { chapter1Questions } from './data/chapter1';
import { chapter2Questions } from './data/chapter2';
import { chapter3Questions } from './data/chapter3';
import { Question, QuizMode, QuizState, Chapter } from './types';

// Utility to shuffle array
const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const HeartRain = () => {
  const hearts = Array.from({ length: 40 });
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -50, 
            left: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 1,
            rotate: Math.random() * 360
          }}
          animate={{ 
            top: '110%',
            rotate: Math.random() * 360 + 360,
          }}
          transition={{ 
            duration: Math.random() * 3 + 2,
            repeat: i % 2 === 0 ? Infinity : 0,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute"
        >
          <Heart className="text-red-500 fill-red-500" size={Math.random() * 20 + 20} />
        </motion.div>
      ))}
    </div>
  );
};

const CHAPTERS: Chapter[] = [
  { id: 1, title: 'Chương 1', description: 'Việt Nam từ 1858 đến 1945', questionCount: chapter1Questions.length, enabled: true },
  { id: 2, title: 'Chương 2', description: 'Đường lối kháng chiến & Cách mạng miền Nam (1945-1975)', questionCount: chapter2Questions.length, enabled: true },
  { id: 3, title: 'Chương 3', description: 'Đảng lãnh đạo cả nước quá độ lên CNXH và tiến hành công cuộc đổi mới (Từ 1975 đến nay)', questionCount: chapter3Questions.length, enabled: true },
];

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer: number;
    if (quizState && !quizState.isFinished) {
      timer = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - quizState.startTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizState?.startTime, quizState?.isFinished]);

  const startQuiz = (chapter: Chapter, mode: QuizMode) => {
    let questions: Question[] = [];
    
    if (chapter.id === 1) questions = [...chapter1Questions];
    else if (chapter.id === 2) questions = [...chapter2Questions];
    else if (chapter.id === 3) questions = [...chapter3Questions];
    
    if (mode === 'exam') {
      questions = shuffle(questions).slice(0, 50);
    }

    setQuizState({
      currentQuestionIndex: 0,
      userAnswers: {},
      isFinished: false,
      score: 0,
      startTime: Date.now(),
      endTime: null,
      mode,
      questions
    });
    setElapsedTime(0);
    setSelectedChapter(chapter);
  };

  const handleAnswer = (answer: string) => {
    if (!quizState) return;
    
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    
    const newUserAnswers = {
      ...quizState.userAnswers,
      [currentQuestion.id]: answer
    };

    setQuizState({
      ...quizState,
      userAnswers: newUserAnswers
    });
  };

  const nextQuestion = () => {
    if (!quizState) return;
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1
      });
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (!quizState || quizState.currentQuestionIndex === 0) return;
    setQuizState({
      ...quizState,
      currentQuestionIndex: quizState.currentQuestionIndex - 1
    });
  };

  const jumpToQuestion = (index: number) => {
    if (!quizState) return;
    setQuizState({
      ...quizState,
      currentQuestionIndex: index
    });
  };

  const finishQuiz = async () => {
    if (!quizState) return;
    
    let score = 0;
    quizState.questions.forEach(q => {
      if (quizState.userAnswers[q.id] === q.answer) {
        score++;
      }
    });

    const endTime = Date.now();
    setQuizState({
      ...quizState,
      isFinished: true,
      score,
      endTime
    });

    // Auto send email result in background
    try {
      fetch('/api/send-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userName: 'Học viên',
          chapterTitle: selectedChapter?.title,
          mode: quizState.mode,
          score,
          totalQuestions: quizState.questions.length,
          elapsedTime: formatTime(Math.floor((endTime - quizState.startTime) / 1000)),
          timestamp: endTime
        })
      });
    } catch (error) {
      // Silent fail
      console.error('Failed to send email result:', error);
    }
  };

  const reset = () => {
    setSelectedChapter(null);
    setQuizState(null);
    setElapsedTime(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const stats = useMemo(() => {
    if (!quizState) return { answered: 0, correct: 0 };
    let answered = Object.keys(quizState.userAnswers).length;
    let correct = 0;
    quizState.questions.forEach(q => {
      if (quizState.userAnswers[q.id] === q.answer) {
        correct++;
      }
    });
    return { answered, correct };
  }, [quizState?.userAnswers, quizState?.questions]);

  if (!selectedChapter || !quizState) {
    return (
      <div className="min-h-screen bg-bg font-sans text-text-main flex flex-col md:flex-row">
        {/* Sidebar */}
        <nav className="w-full md:w-20 bg-sidebar-bg flex md:flex-col items-center py-4 md:py-8 flex-shrink-0 px-4 md:px-0">
          <div className="flex md:flex-col flex-wrap gap-3 md:gap-0 justify-center md:justify-start w-full">
            {CHAPTERS.map(ch => (
              <div 
                key={ch.id}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-0 md:mb-4 font-bold text-xs md:text-sm transition-all border-2 ${ch.enabled ? 'bg-white/10 text-white cursor-pointer hover:bg-white/20 border-white/5' : 'opacity-30 cursor-not-allowed text-white border-transparent'}`}
              >
                C{ch.id}
              </div>
            ))}
          </div>
        </nav>

        <main className="flex-1 p-6 md:p-12">
          <header className="max-w-4xl mb-8 md:mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Trắc-Nghiệm-Lịch-Sử-Đảng
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-text-dim md:text-lg"
            >
              Hệ thống ôn tập trắc nghiệm mật độ cao
            </motion.p>
          </header>

          <div className="max-w-4xl grid gap-6">
            {CHAPTERS.map((chapter, idx) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-card-bg rounded-2xl p-6 shadow-sm border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${!chapter.enabled ? 'opacity-60' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{chapter.title}</h3>
                    {chapter.enabled && <span className="px-2 py-0.5 bg-success/10 text-success text-[10px] font-bold uppercase rounded">Sẵn sàng</span>}
                  </div>
                  <p className="text-text-dim text-sm mb-4">{chapter.description}</p>
                  <div className="flex gap-4 text-xs font-mono text-text-dim">
                    <span className="flex items-center gap-1"><BookOpen size={14} /> {chapter.questionCount} Câu hỏi</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  {chapter.enabled ? (
                    <>
                      <button 
                        onClick={() => startQuiz(chapter, 'study')}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl border-2 border-border hover:border-accent hover:text-accent transition-all font-bold text-sm"
                      >
                        Học tập
                      </button>
                      <button 
                        onClick={() => startQuiz(chapter, 'exam')}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sidebar-bg text-white hover:bg-black transition-all font-bold text-sm flex items-center justify-center gap-2"
                      >
                        Thi thử (50 câu)
                      </button>
                    </>
                  ) : (
                    <span className="px-6 py-3 bg-bg rounded-xl text-xs font-bold text-text-dim uppercase tracking-wider text-center">Sắp ra mắt</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (quizState.isFinished) {
    return (
      <div className="min-h-screen bg-bg font-sans p-4 flex items-center justify-center overflow-y-auto custom-scrollbar">
        <HeartRain />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-card-bg rounded-[32px] p-6 md:p-12 shadow-xl border border-border max-w-xl w-full text-center my-auto"
        >
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="text-success" size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Kết Quả {quizState.mode === 'exam' ? 'Thi Thử' : 'Ôn Tập'}</h2>
          <p className="text-text-dim mb-8">{selectedChapter.title}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-bg rounded-2xl p-6 border border-border">
              <p className="text-xs font-bold text-text-dim uppercase tracking-widest mb-2">Điểm số</p>
              <p className="text-3xl font-bold text-accent">{quizState.score} <span className="text-lg text-text-dim font-normal">/ {quizState.questions.length}</span></p>
            </div>
            <div className="bg-bg rounded-2xl p-6 border border-border">
              <p className="text-xs font-bold text-text-dim uppercase tracking-widest mb-2">Thời gian</p>
              <p className="text-3xl font-bold">{formatTime(elapsedTime)}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={() => startQuiz(selectedChapter, quizState.mode)}
              className="w-full py-4 rounded-2xl bg-sidebar-bg text-white font-bold hover:bg-black transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} /> Thử lại
            </button>
            <button 
              onClick={reset}
              className="w-full py-4 rounded-2xl border-2 border-border font-bold hover:border-text-main transition-all flex items-center justify-center gap-2"
            >
              <Home size={18} /> Về trang chủ
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
  const userAnswer = quizState.userAnswers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-bg font-sans text-text-main flex flex-col lg:flex-row">
      {/* Sidebar - Hidden on mobile or moved to bottom/top */}
      <nav className="w-full lg:w-20 bg-sidebar-bg flex lg:flex-col items-center py-4 lg:py-8 flex-shrink-0 px-4 lg:px-0 border-b lg:border-b-0 border-white/5">
        <div className="flex lg:flex-col items-center justify-between lg:justify-start w-full gap-4">
          <div 
            onClick={reset}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-accent flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            <Home className="text-white" size={18} />
          </div>

          <div 
            onClick={() => {
              if (Object.keys(quizState.userAnswers).length > 0) {
                if (window.confirm("Bạn có chắc chắn muốn nộp bài và kết thúc ngay bây giờ không?")) {
                  finishQuiz();
                }
              } else {
                finishQuiz();
              }
            }}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-sidebar-bg border-2 border-white/10 flex items-center justify-center cursor-pointer hover:bg-black transition-all"
            title="Nộp bài và kết thúc"
          >
            <CheckCircle2 className="text-success" size={18} />
          </div>

          <div className="flex lg:flex-col gap-2">
            {CHAPTERS.map(ch => (
              <div 
                key={ch.id}
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center font-bold text-xs lg:text-sm transition-all border-2 ${ch.id === selectedChapter.id ? 'bg-accent border-accent text-white' : 'bg-white/10 border-transparent text-white/40 cursor-not-allowed'}`}
              >
                C{ch.id}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col p-4 lg:p-6 gap-4 lg:gap-6">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:h-10 flex-shrink-0">
          <div className="title-area truncate max-w-full">
            <h1 className="text-lg lg:text-xl font-bold truncate">{selectedChapter.title} - {selectedChapter.description}</h1>
          </div>
          <div className="flex flex-wrap gap-4 lg:gap-8 text-[10px] lg:text-sm font-bold bg-white/50 lg:bg-transparent p-2 lg:p-0 rounded-lg w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-text-dim font-normal">Thời gian:</span>
              <span className="font-mono">{formatTime(elapsedTime)}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-dim font-normal">Đã làm:</span>
              <span>{stats.answered}/{quizState.questions.length}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-text-dim font-normal">Đúng:</span>
              <span className="text-success">{stats.correct}</span>
            </div>
          </div>
        </header>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          {/* Question Card */}
          <div className="bg-card-bg rounded-2xl p-6 lg:p-10 shadow-sm border border-border flex flex-col custom-scrollbar">
            <div className="text-accent text-[10px] font-extrabold uppercase tracking-[2px] mb-4">
              Câu hỏi {quizState.currentQuestionIndex + 1} của {quizState.questions.length}
            </div>
            
            <h2 className="text-xl lg:text-2xl font-semibold leading-snug mb-6 lg:mb-10">
              {currentQuestion.text}
            </h2>

            <div className="grid gap-3 mb-6 lg:mb-10">
              {(Object.entries(currentQuestion.options) as [string, string][]).map(([key, value]) => {
                const isSelected = userAnswer === key;
                const isCorrect = key === currentQuestion.answer;
                const showFeedback = userAnswer !== undefined;
                
                let buttonClass = "w-full text-left p-4 lg:p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ";
                
                if (!showFeedback) {
                  buttonClass += "border-border hover:border-accent hover:bg-accent/5";
                } else {
                  if (isCorrect) {
                     buttonClass += "border-success bg-success/5 text-success";
                  } else if (isSelected) {
                     buttonClass += "border-red-500 bg-red-50 text-red-700";
                  } else {
                     buttonClass += "border-border opacity-50";
                  }
                }

                return (
                  <button
                    key={key}
                    disabled={showFeedback}
                    onClick={() => handleAnswer(key)}
                    className={buttonClass}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${!showFeedback ? 'bg-bg group-hover:bg-accent group-hover:text-white' : (isCorrect ? 'bg-success text-white' : (isSelected ? 'bg-red-500 text-white' : 'bg-bg'))}`}>
                      {key}
                    </span>
                    <span className="font-medium text-sm lg:text-base">{value}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-auto">
              <div className="h-1 w-full bg-border rounded-full overflow-hidden mb-6">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>

              <footer className="flex justify-between items-center gap-4">
                <button
                  onClick={prevQuestion}
                  disabled={quizState.currentQuestionIndex === 0}
                  className="flex-1 lg:flex-none px-4 lg:px-6 py-3 rounded-xl font-bold text-text-dim hover:text-text-main disabled:opacity-30 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <ChevronLeft size={18} /> <span className="hidden sm:inline">Quay lại</span>
                </button>

                <button
                  onClick={nextQuestion}
                  disabled={userAnswer === undefined}
                  className="flex-1 lg:flex-none px-4 lg:px-8 py-3 rounded-xl bg-sidebar-bg text-white font-bold hover:bg-black disabled:opacity-30 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <span className="truncate">{quizState.currentQuestionIndex === quizState.questions.length - 1 ? 'Kết thúc' : 'Tiếp theo'}</span>
                  <ChevronRight size={18} />
                </button>
              </footer>
            </div>
          </div>

          {/* Question Map - Hidden on small mobile screens or shown via toggle maybe? For now just place below in grid */}
          <div className="bg-card-bg rounded-2xl p-6 shadow-sm border border-border flex flex-col max-h-[300px] lg:max-h-full">
            <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-wider text-text-dim mb-4">
              <span>Bản đồ câu hỏi</span>
              <span className="text-accent">{Math.round(progress)}%</span>
            </div>
            
            <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-8 gap-2 overflow-y-auto pr-2 custom-scrollbar">
              {quizState.questions.map((q, idx) => {
                const isAnswered = quizState.userAnswers[q.id] !== undefined;
                const isCurrent = idx === quizState.currentQuestionIndex;
                const isCorrect = isAnswered && quizState.userAnswers[q.id] === q.answer;
                
                let dotClass = "aspect-square rounded-md border flex items-center justify-center text-[10px] font-bold transition-all cursor-pointer ";
                
                if (isAnswered) {
                  if (isCorrect) {
                    dotClass += "bg-success border-success text-white";
                  } else {
                    dotClass += "bg-red-500 border-red-500 text-white";
                  }
                  if (isCurrent) {
                    dotClass += " ring-2 ring-offset-2 ring-accent scale-110 z-10";
                  }
                } else if (isCurrent) {
                  dotClass += "bg-accent border-accent text-white ring-2 ring-offset-2 ring-accent scale-110 z-10";
                } else {
                  dotClass += "bg-bg border-border text-text-dim hover:border-accent";
                }

                return (
                  <div 
                    key={q.id}
                    onClick={() => jumpToQuestion(idx)}
                    className={dotClass}
                  >
                    {idx + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
