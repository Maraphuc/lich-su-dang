import { motion } from 'motion/react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  Home,
  RotateCcw,
  Settings,
  Target,
  Trophy
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { AdminPage } from './AdminPage';
import { baseQuestionBank } from './data/questionBank';
import { Chapter, Question, QuestionBankChapter, QuizMode, QuizState } from './types';

const QUESTION_BANK_STORAGE_KEY = 'lich-su-dang-question-bank-v1';

const shuffle = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const normalizeBank = (chapters: QuestionBankChapter[]): QuestionBankChapter[] =>
  chapters.map((chapter) => ({
    ...chapter,
    enabled: chapter.enabled !== false,
    questionCount: chapter.questions.length
  }));

const mergeQuestionBank = (savedChapters: QuestionBankChapter[]): QuestionBankChapter[] => {
  const savedById = new Map(savedChapters.map((chapter) => [chapter.id, chapter]));
  const baseIds = new Set(baseQuestionBank.map((chapter) => chapter.id));

  const mergedBase = baseQuestionBank.map((baseChapter) => {
    const savedChapter = savedById.get(baseChapter.id);
    if (!savedChapter) return baseChapter;

    const savedQuestionsById = new Map(savedChapter.questions.map((question) => [question.id, question]));
    const baseQuestionIds = new Set(baseChapter.questions.map((question) => question.id));
    const mergedQuestions = [
      ...baseChapter.questions.map((question) => savedQuestionsById.get(question.id) ?? question),
      ...savedChapter.questions.filter((question) => !baseQuestionIds.has(question.id))
    ];

    return {
      ...baseChapter,
      ...savedChapter,
      source: savedChapter.source ?? baseChapter.source,
      enabled: savedChapter.enabled !== false,
      questions: mergedQuestions,
      questionCount: mergedQuestions.length
    };
  });

  const customChapters = savedChapters.filter((chapter) => !baseIds.has(chapter.id));
  return normalizeBank([...mergedBase, ...customChapters]);
};

const loadQuestionBank = (): QuestionBankChapter[] => {
  try {
    const saved = window.localStorage.getItem(QUESTION_BANK_STORAGE_KEY);
    if (!saved) return normalizeBank(baseQuestionBank);

    const parsed = JSON.parse(saved) as QuestionBankChapter[];
    if (!Array.isArray(parsed)) return normalizeBank(baseQuestionBank);

    const migrated = mergeQuestionBank(parsed);
    window.localStorage.setItem(QUESTION_BANK_STORAGE_KEY, JSON.stringify(migrated));
    return migrated;
  } catch {
    return normalizeBank(baseQuestionBank);
  }
};

const isAdminLocation = () =>
  window.location.hash === '#/admin' ||
  window.location.hash === '#admin' ||
  window.location.search.includes('admin=1');

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const HeartRain = () => {
  const hearts = useMemo(
    () =>
      Array.from({ length: 28 }, () => ({
        left: `${Math.random() * 100}%`,
        scale: Math.random() * 0.5 + 0.45,
        rotate: Math.random() * 360,
        duration: Math.random() * 3 + 2.5,
        delay: Math.random() * 4,
        size: Math.random() * 18 + 18
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          initial={{ top: -60, left: heart.left, scale: heart.scale, opacity: 0.95, rotate: heart.rotate }}
          animate={{ top: '110%', rotate: heart.rotate + 360 }}
          transition={{ duration: heart.duration, repeat: index % 2 === 0 ? Infinity : 0, ease: 'linear', delay: heart.delay }}
          className="absolute"
        >
          <Heart className="text-red-500 fill-red-500 drop-shadow-sm" size={heart.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const [questionBank, setQuestionBank] = useState<QuestionBankChapter[]>(loadQuestionBank);
  const [isAdminRoute, setIsAdminRoute] = useState(isAdminLocation);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const enabledChapters = useMemo(
    () => normalizeBank(questionBank).filter((chapter) => chapter.enabled),
    [questionBank]
  );

  const totalQuestions = useMemo(
    () => enabledChapters.reduce((total, chapter) => total + chapter.questions.length, 0),
    [enabledChapters]
  );

  useEffect(() => {
    const handleLocationChange = () => setIsAdminRoute(isAdminLocation());
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const migrated = mergeQuestionBank(questionBank);
    const current = JSON.stringify(questionBank);
    const next = JSON.stringify(migrated);
    if (current !== next) {
      window.localStorage.setItem(QUESTION_BANK_STORAGE_KEY, next);
      setQuestionBank(migrated);
    }
  }, [questionBank]);

  useEffect(() => {
    let timer: number | undefined;

    if (quizState && !quizState.isFinished) {
      timer = window.setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - quizState.startTime) / 1000));
      }, 1000);
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [quizState?.startTime, quizState?.isFinished]);

  const getQuestionsByChapter = (chapterId: number): Question[] => {
    const chapter = questionBank.find((item) => item.id === chapterId);
    return chapter ? [...chapter.questions] : [];
  };

  const saveQuestionBank = (chapters: QuestionBankChapter[]) => {
    const normalized = normalizeBank(chapters);
    window.localStorage.setItem(QUESTION_BANK_STORAGE_KEY, JSON.stringify(normalized));
    setQuestionBank(normalized);
    setSelectedChapter(null);
    setQuizState(null);
    setElapsedTime(0);
  };

  const resetDefaultQuestionBank = () => {
    const normalized = normalizeBank(baseQuestionBank);
    window.localStorage.removeItem(QUESTION_BANK_STORAGE_KEY);
    setQuestionBank(normalized);
    setSelectedChapter(null);
    setQuizState(null);
    setElapsedTime(0);
  };

  const openAdmin = () => {
    window.location.hash = '#/admin';
    setIsAdminRoute(true);
  };

  const closeAdmin = () => {
    window.location.hash = '';
    setIsAdminRoute(false);
  };

  const startQuiz = (chapter: Chapter, mode: QuizMode) => {
    let questions = getQuestionsByChapter(Number(chapter.id));

    if (mode === 'exam') {
      questions = shuffle(questions).slice(0, Math.min(50, questions.length));
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
    setQuizState({
      ...quizState,
      userAnswers: {
        ...quizState.userAnswers,
        [currentQuestion.id]: answer
      }
    });
  };

  const finishQuiz = async () => {
    if (!quizState) return;

    let score = 0;
    quizState.questions.forEach((question) => {
      if (quizState.userAnswers[question.id] === question.answer) score++;
    });

    const endTime = Date.now();
    const finalElapsedTime = Math.floor((endTime - quizState.startTime) / 1000);
    setElapsedTime(finalElapsedTime);
    setQuizState({ ...quizState, isFinished: true, score, endTime });

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
          elapsedTime: formatTime(finalElapsedTime),
          timestamp: endTime
        })
      });
    } catch (error) {
      console.error('Failed to send email result:', error);
    }
  };

  const nextQuestion = () => {
    if (!quizState) return;
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState({ ...quizState, currentQuestionIndex: quizState.currentQuestionIndex + 1 });
    } else {
      finishQuiz();
    }
  };

  const prevQuestion = () => {
    if (!quizState || quizState.currentQuestionIndex === 0) return;
    setQuizState({ ...quizState, currentQuestionIndex: quizState.currentQuestionIndex - 1 });
  };

  const jumpToQuestion = (index: number) => {
    if (!quizState) return;
    setQuizState({ ...quizState, currentQuestionIndex: index });
  };

  const reset = () => {
    setSelectedChapter(null);
    setQuizState(null);
    setElapsedTime(0);
  };

  const stats = useMemo(() => {
    if (!quizState) return { answered: 0, correct: 0 };
    let correct = 0;
    quizState.questions.forEach((question) => {
      if (quizState.userAnswers[question.id] === question.answer) correct++;
    });
    return { answered: Object.keys(quizState.userAnswers).length, correct };
  }, [quizState]);

  if (isAdminRoute) {
    return (
      <AdminPage
        chapters={questionBank}
        onSave={saveQuestionBank}
        onResetDefault={resetDefaultQuestionBank}
        onBack={closeAdmin}
      />
    );
  }

  if (!selectedChapter || !quizState) {
    return (
      <div className="min-h-screen bg-bg text-text-main font-sans">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(15,118,110,0.12),transparent_28%)]" />

        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:flex-row lg:gap-8 lg:py-8">
          <aside className="mb-5 flex items-center justify-between rounded-[28px] border border-white/70 bg-sidebar-bg p-4 text-white shadow-[0_22px_70px_rgba(15,23,42,0.18)] lg:mb-0 lg:w-72 lg:flex-col lg:items-start lg:p-6">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-lg font-black text-sidebar-bg shadow-lg">LS</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">Quiz App</p>
                <h1 className="text-lg font-extrabold leading-tight">Lịch Sử Đảng</h1>
              </div>
            </div>

            <div className="hidden w-full lg:block">
              <div className="my-8 h-px bg-white/10" />
              <div className="space-y-4">
                <div className="rounded-3xl bg-white/10 p-4 backdrop-blur">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/70">
                    <Target size={16} />
                    Mục tiêu
                  </div>
                  <p className="text-sm leading-relaxed text-white/85">
                    Ôn tập trọng tâm, luyện thi nhanh và quản lý ngân hàng câu hỏi theo chương.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">{enabledChapters.length}</p>
                    <p className="text-xs text-white/60">Chương</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-2xl font-black">{totalQuestions}</p>
                    <p className="text-xs text-white/60">Câu hỏi</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openAdmin}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-sidebar-bg transition-all hover:-translate-y-0.5"
                >
                  <Settings size={17} />
                  Bảng điều khiển Admin
                </button>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <section className="mb-6 overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8 lg:p-10">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  <Award size={15} />
                  Hệ thống ôn tập thông minh
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-end">
                  <div>
                    <h2 className="max-w-3xl text-3xl font-black tracking-tight text-text-main sm:text-4xl lg:text-5xl">
                      Ôn tập Lịch sử Đảng rõ ràng, hiện đại và dễ mở rộng.
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-text-dim sm:text-lg">
                      Chọn chương để học theo từng câu hoặc làm bài thi thử 50 câu. Chương 4 là bộ câu hỏi bổ sung từ nguồn chính thống và Admin cho phép tự tạo chương mới.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 rounded-3xl border border-border bg-bg/70 p-3">
                    <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
                      <BookOpen className="mx-auto mb-2 text-accent" size={18} />
                      <p className="text-lg font-black">{totalQuestions}</p>
                      <p className="text-[11px] text-text-dim">Câu hỏi</p>
                    </div>
                    <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
                      <Clock className="mx-auto mb-2 text-accent" size={18} />
                      <p className="text-lg font-black">50</p>
                      <p className="text-[11px] text-text-dim">Câu thi</p>
                    </div>
                    <div className="rounded-2xl bg-white p-3 text-center shadow-sm">
                      <CheckCircle2 className="mx-auto mb-2 text-success" size={18} />
                      <p className="text-lg font-black">{enabledChapters.length}</p>
                      <p className="text-[11px] text-text-dim">Chương</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-[auto_1fr]">
                  <button
                    type="button"
                    onClick={openAdmin}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-white px-5 py-3 text-sm font-extrabold transition-all hover:border-accent hover:text-accent focus:outline-none focus:ring-4 focus:ring-accent/15"
                  >
                    <Settings size={17} />
                    Bảng điều khiển Admin
                  </button>
                  <span className="rounded-2xl bg-bg px-5 py-3 text-sm font-semibold text-text-dim">
                    Link trực tiếp: <span className="font-mono text-accent">#/admin</span>. Admin hiện là bảng quản trị local trong app, không phải backend đăng nhập riêng.
                  </span>
                </div>
              </motion.div>
            </section>

            <section className="grid gap-4 lg:gap-5">
              {enabledChapters.map((chapter, index) => (
                <motion.article
                  key={chapter.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[28px] border border-white/80 bg-card-bg p-5 shadow-[0_16px_55px_rgba(15,23,42,0.07)] transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_75px_rgba(15,23,42,0.11)] sm:p-6"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sidebar-bg text-base font-black text-white shadow-lg">
                        C{chapter.id}
                      </div>
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-black">{chapter.title}</h3>
                          <span className="rounded-full bg-success/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-success">
                            Sẵn sàng
                          </span>
                        </div>
                        <p className="max-w-2xl text-sm leading-6 text-text-dim">{chapter.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-2 rounded-full bg-bg px-3 py-1.5 text-xs font-bold text-text-dim">
                            <BookOpen size={14} />
                            {chapter.questions.length} câu hỏi
                          </span>
                          {chapter.source && (
                            <span className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">{chapter.source}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2 md:min-w-[300px]">
                      <button
                        type="button"
                        onClick={() => startQuiz(chapter, 'study')}
                        className="rounded-2xl border border-border bg-white px-5 py-3 text-sm font-extrabold text-text-main transition-all hover:border-accent hover:text-accent focus:outline-none focus:ring-4 focus:ring-accent/15"
                      >
                        Học từng câu
                      </button>
                      <button
                        type="button"
                        onClick={() => startQuiz(chapter, 'exam')}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sidebar-bg px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5 hover:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-accent/20"
                      >
                        Thi thử
                        <ChevronRight size={17} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>
          </main>
        </div>
      </div>
    );
  }

  if (quizState.isFinished) {
    const finalElapsedSeconds = quizState.endTime ? Math.floor((quizState.endTime - quizState.startTime) / 1000) : elapsedTime;
    const percent = Math.round((quizState.score / quizState.questions.length) * 100);

    return (
      <div className="min-h-screen bg-bg p-4 text-text-main font-sans sm:p-6">
        <HeartRain />
        <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-2xl items-center justify-center">
          <motion.section
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full rounded-[36px] border border-white/80 bg-card-bg p-6 text-center shadow-[0_28px_90px_rgba(15,23,42,0.13)] sm:p-10"
          >
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-[28px] bg-success/10">
              <Trophy className="text-success" size={42} />
            </div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
              {quizState.mode === 'exam' ? 'Kết quả thi thử' : 'Kết quả ôn tập'}
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{selectedChapter.title}</h2>
            <p className="mt-3 text-sm leading-6 text-text-dim">{selectedChapter.description}</p>

            <div className="my-8 grid grid-cols-3 gap-3">
              <div className="rounded-3xl border border-border bg-bg p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-text-dim">Điểm</p>
                <p className="mt-2 text-2xl font-black text-accent">
                  {quizState.score}
                  <span className="text-sm font-semibold text-text-dim">/{quizState.questions.length}</span>
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-bg p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-text-dim">Tỷ lệ</p>
                <p className="mt-2 text-2xl font-black">{percent}%</p>
              </div>
              <div className="rounded-3xl border border-border bg-bg p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-text-dim">Thời gian</p>
                <p className="mt-2 text-2xl font-black">{formatTime(finalElapsedSeconds)}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => startQuiz(selectedChapter, quizState.mode)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-sidebar-bg px-5 py-4 font-extrabold text-white transition-all hover:bg-slate-950 focus:outline-none focus:ring-4 focus:ring-accent/20"
              >
                <RotateCcw size={18} />
                Làm lại
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-white px-5 py-4 font-extrabold transition-all hover:border-text-main focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                <Home size={18} />
                Về trang chủ
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;
  const userAnswer = quizState.userAnswers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-bg text-text-main font-sans">
      <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col lg:flex-row">
        <aside className="sticky top-0 z-30 border-b border-white/70 bg-sidebar-bg/95 px-4 py-3 text-white shadow-lg backdrop-blur lg:min-h-screen lg:w-24 lg:border-b-0 lg:px-0 lg:py-6">
          <div className="flex items-center justify-between gap-3 lg:h-full lg:flex-col">
            <button
              type="button"
              onClick={reset}
              className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-sidebar-bg shadow-md transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20 lg:h-12 lg:w-12"
              aria-label="Về trang chủ"
            >
              <Home size={19} />
            </button>

            <div className="flex items-center gap-2 lg:flex-col">
              {enabledChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`grid h-10 w-10 place-items-center rounded-2xl border text-xs font-black transition-all lg:h-12 lg:w-12 lg:text-sm ${
                    chapter.id === selectedChapter.id
                      ? 'border-accent bg-accent text-white shadow-lg shadow-blue-500/20'
                      : 'border-white/10 bg-white/10 text-white/45'
                  }`}
                >
                  C{chapter.id}
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                if (Object.keys(quizState.userAnswers).length > 0) {
                  if (window.confirm('Bạn có chắc chắn muốn nộp bài và kết thúc ngay bây giờ không?')) finishQuiz();
                } else {
                  finishQuiz();
                }
              }}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/10 text-success transition-all hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/15 lg:h-12 lg:w-12"
              aria-label="Nộp bài"
            >
              <CheckCircle2 size={20} />
            </button>
          </div>
        </aside>

        <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <header className="mb-5 rounded-[28px] border border-white/75 bg-white/85 p-4 shadow-[0_16px_55px_rgba(15,23,42,0.07)] backdrop-blur sm:p-5">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
              <div className="min-w-0">
                <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                  {quizState.mode === 'exam' ? 'Chế độ thi thử' : 'Chế độ học tập'}
                </p>
                <h1 className="truncate text-xl font-black tracking-tight sm:text-2xl">
                  {selectedChapter.title} · {selectedChapter.description}
                </h1>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-end">
                <div className="rounded-2xl bg-bg px-3 py-2 text-center sm:min-w-28">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-dim">Thời gian</p>
                  <p className="font-mono text-sm font-black">{formatTime(elapsedTime)}</p>
                </div>
                <div className="rounded-2xl bg-bg px-3 py-2 text-center sm:min-w-28">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-dim">Đã làm</p>
                  <p className="text-sm font-black">
                    {stats.answered}/{quizState.questions.length}
                  </p>
                </div>
                <div className="rounded-2xl bg-bg px-3 py-2 text-center sm:min-w-28">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-dim">
                    {quizState.mode === 'study' ? 'Đúng' : 'Tiến độ'}
                  </p>
                  <p className="text-sm font-black text-success">
                    {quizState.mode === 'study' ? stats.correct : `${Math.round(progress)}%`}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-border">
              <motion.div className="h-full bg-accent" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
            </div>
          </header>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <section className="rounded-[32px] border border-white/80 bg-card-bg p-5 shadow-[0_24px_80px_rgba(15,23,42,0.09)] sm:p-7 lg:p-9">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-accent/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                  Câu {quizState.currentQuestionIndex + 1}/{quizState.questions.length}
                </span>
                <span className="rounded-full bg-bg px-4 py-2 text-xs font-bold text-text-dim">
                  {quizState.mode === 'study' ? 'Hiển thị đáp án sau khi chọn' : 'Không hiện đáp án khi thi'}
                </span>
              </div>

              <h2 className="mb-7 text-xl font-bold leading-8 tracking-tight sm:text-2xl sm:leading-9 lg:text-[28px] lg:leading-10">
                {currentQuestion.text}
              </h2>

              <div className="grid gap-3 sm:gap-4">
                {(Object.entries(currentQuestion.options) as [string, string][]).map(([key, value]) => {
                  const isSelected = userAnswer === key;
                  const isCorrect = key === currentQuestion.answer;
                  const hasAnswered = userAnswer !== undefined;
                  const showFeedback = quizState.mode === 'study' && hasAnswered;
                  const isLocked = quizState.mode === 'study' && hasAnswered;

                  let buttonClass =
                    'w-full rounded-2xl border-2 p-4 text-left transition-all focus:outline-none focus:ring-4 focus:ring-accent/15 sm:p-5 ';

                  if (!hasAnswered) {
                    buttonClass += 'border-border bg-white hover:border-accent hover:bg-accent/5';
                  } else if (showFeedback) {
                    if (isCorrect) buttonClass += 'border-success bg-success/10 text-success';
                    else if (isSelected) buttonClass += 'border-red-500 bg-red-50 text-red-700';
                    else buttonClass += 'border-border bg-white opacity-55';
                  } else if (isSelected) {
                    buttonClass += 'border-accent bg-accent/10 text-accent';
                  } else {
                    buttonClass += 'border-border bg-white hover:border-accent hover:bg-accent/5';
                  }

                  return (
                    <button
                      key={key}
                      type="button"
                      disabled={isLocked}
                      onClick={() => handleAnswer(key)}
                      className={buttonClass}
                    >
                      <span className="flex items-start gap-4">
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-black transition-colors ${
                            showFeedback && isCorrect
                              ? 'bg-success text-white'
                              : showFeedback && isSelected
                                ? 'bg-red-500 text-white'
                                : isSelected
                                  ? 'bg-accent text-white'
                                  : 'bg-bg text-text-dim'
                          }`}
                        >
                          {key}
                        </span>
                        <span className="pt-1 text-sm font-semibold leading-6 sm:text-base">{value}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              <footer className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={prevQuestion}
                  disabled={quizState.currentQuestionIndex === 0}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-white px-5 py-3 text-sm font-extrabold transition-all hover:border-text-main disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-4 focus:ring-slate-200"
                >
                  <ChevronLeft size={18} />
                  Quay lại
                </button>

                <button
                  type="button"
                  onClick={nextQuestion}
                  disabled={userAnswer === undefined}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sidebar-bg px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus:ring-4 focus:ring-accent/20"
                >
                  {quizState.currentQuestionIndex === quizState.questions.length - 1 ? 'Kết thúc' : 'Tiếp theo'}
                  <ChevronRight size={18} />
                </button>
              </footer>
            </section>

            <aside className="rounded-[32px] border border-white/80 bg-card-bg p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:sticky lg:top-7 lg:max-h-[calc(100vh-3.5rem)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-text-dim">Bản đồ câu hỏi</p>
                  <p className="mt-1 text-sm text-text-dim">Chạm để chuyển câu nhanh</p>
                </div>
                <div className="rounded-2xl bg-accent/10 px-3 py-2 text-sm font-black text-accent">
                  {Math.round(progress)}%
                </div>
              </div>

              <div className="grid max-h-[310px] grid-cols-6 gap-2 overflow-y-auto pr-1 custom-scrollbar sm:grid-cols-8 lg:max-h-[calc(100vh-11rem)] lg:grid-cols-6">
                {quizState.questions.map((question, index) => {
                  const isAnswered = quizState.userAnswers[question.id] !== undefined;
                  const isCurrent = index === quizState.currentQuestionIndex;
                  const isCorrect = isAnswered && quizState.userAnswers[question.id] === question.answer;

                  let dotClass =
                    'aspect-square rounded-xl border text-[11px] font-black transition-all focus:outline-none focus:ring-4 focus:ring-accent/15 ';

                  if (quizState.mode === 'study' && isAnswered) {
                    dotClass += isCorrect ? 'border-success bg-success text-white' : 'border-red-500 bg-red-500 text-white';
                  } else if (isAnswered) {
                    dotClass += 'border-accent bg-accent/10 text-accent';
                  } else {
                    dotClass += 'border-border bg-bg text-text-dim hover:border-accent';
                  }

                  if (isCurrent) dotClass += ' ring-2 ring-accent ring-offset-2 scale-105';

                  return (
                    <button key={question.id} type="button" onClick={() => jumpToQuestion(index)} className={dotClass}>
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
