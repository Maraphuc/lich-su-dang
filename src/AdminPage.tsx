import { useMemo, useState } from 'react';
import { Question, QuestionBankChapter } from './types';

const ANSWERS: Question['answer'][] = ['A', 'B', 'C', 'D'];

const emptyQuestion = (id: number): Question => ({
  id,
  text: 'Câu hỏi mới',
  options: {
    A: 'Đáp án A',
    B: 'Đáp án B',
    C: 'Đáp án C',
    D: 'Đáp án D'
  },
  answer: 'A'
});

const normalizeBank = (chapters: QuestionBankChapter[]): QuestionBankChapter[] =>
  chapters.map((chapter) => ({
    ...chapter,
    questionCount: chapter.questions.length,
    enabled: Boolean(chapter.enabled)
  }));

interface AdminPageProps {
  chapters: QuestionBankChapter[];
  onSave: (chapters: QuestionBankChapter[]) => void;
  onResetDefault: () => void;
  onBack: () => void;
}

export const AdminPage = ({ chapters, onSave, onResetDefault, onBack }: AdminPageProps) => {
  const [draft, setDraft] = useState<QuestionBankChapter[]>(() => normalizeBank(chapters));
  const [selectedChapterId, setSelectedChapterId] = useState(draft[0]?.id ?? 1);
  const [importText, setImportText] = useState('');
  const [message, setMessage] = useState('');

  const selectedChapter = draft.find((chapter) => chapter.id === selectedChapterId) ?? draft[0];
  const totalQuestions = useMemo(
    () => draft.reduce((total, chapter) => total + chapter.questions.length, 0),
    [draft]
  );
  const exportText = useMemo(() => JSON.stringify(normalizeBank(draft), null, 2), [draft]);

  const updateSelectedChapter = (updates: Partial<QuestionBankChapter>) => {
    if (!selectedChapter) return;
    setDraft((current) =>
      normalizeBank(
        current.map((chapter) =>
          chapter.id === selectedChapter.id
            ? {
                ...chapter,
                ...updates,
                questions: updates.questions ?? chapter.questions
              }
            : chapter
        )
      )
    );
  };

  const addChapter = () => {
    const nextId = Math.max(0, ...draft.map((chapter) => chapter.id)) + 1;
    const newChapter: QuestionBankChapter = {
      id: nextId,
      title: `Chương ${nextId}`,
      description: 'Chương mới do admin tạo',
      questionCount: 0,
      enabled: true,
      custom: true,
      source: 'Admin local',
      questions: []
    };
    setDraft((current) => [...current, newChapter]);
    setSelectedChapterId(nextId);
    setMessage('Đã tạo chương mới. Hãy thêm câu hỏi rồi bấm Lưu thay đổi.');
  };

  const deleteChapter = () => {
    if (!selectedChapter) return;
    if (!window.confirm(`Xóa ${selectedChapter.title}? Thao tác này chỉ áp dụng trên dữ liệu admin local.`)) return;
    const nextDraft = draft.filter((chapter) => chapter.id !== selectedChapter.id);
    setDraft(nextDraft);
    setSelectedChapterId(nextDraft[0]?.id ?? 1);
  };

  const addQuestion = () => {
    if (!selectedChapter) return;
    const nextId = Math.max(selectedChapter.id * 10000, ...selectedChapter.questions.map((question) => question.id)) + 1;
    updateSelectedChapter({ questions: [...selectedChapter.questions, emptyQuestion(nextId)] });
  };

  const updateQuestion = (questionId: number, updates: Partial<Question>) => {
    if (!selectedChapter) return;
    updateSelectedChapter({
      questions: selectedChapter.questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              ...updates,
              options: updates.options ?? question.options
            }
          : question
      )
    });
  };

  const deleteQuestion = (questionId: number) => {
    if (!selectedChapter) return;
    updateSelectedChapter({
      questions: selectedChapter.questions.filter((question) => question.id !== questionId)
    });
  };

  const save = () => {
    onSave(normalizeBank(draft));
    setMessage('Đã lưu vào bộ nhớ máy này. Bản xuất JSON có thể gửi lại để cập nhật vào mã nguồn.');
  };

  const copyExport = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      setMessage('Đã copy JSON question bank.');
    } catch {
      setMessage('Không copy được tự động. Bạn có thể chọn toàn bộ ô JSON và copy thủ công.');
    }
  };

  const importBank = () => {
    try {
      const parsed = JSON.parse(importText) as QuestionBankChapter[];
      if (!Array.isArray(parsed)) throw new Error('Dữ liệu phải là mảng chương.');
      const normalized = normalizeBank(parsed);
      setDraft(normalized);
      setSelectedChapterId(normalized[0]?.id ?? 1);
      setMessage('Đã import JSON vào bản nháp. Bấm Lưu thay đổi để áp dụng.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'JSON không hợp lệ.');
    }
  };

  return (
    <div className="min-h-screen bg-bg px-4 py-5 text-text-main sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 rounded-[32px] border border-white/80 bg-white/85 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-accent">Admin local</p>
              <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Quản lý chương và câu hỏi</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-text-dim">
                Trang này lưu dữ liệu bằng localStorage trên thiết bị của bạn. Có thể thêm chương mới, sửa câu hỏi,
                import/export JSON và gửi JSON để cập nhật vĩnh viễn vào mã nguồn.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={onBack}
                className="rounded-2xl border border-border bg-white px-5 py-3 text-sm font-extrabold hover:border-accent"
              >
                Về app
              </button>
              <button
                type="button"
                onClick={save}
                className="rounded-2xl bg-sidebar-bg px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-slate-900/10"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-bg p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-text-dim">Số chương</p>
              <p className="mt-2 text-2xl font-black">{draft.length}</p>
            </div>
            <div className="rounded-2xl bg-bg p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-text-dim">Tổng câu hỏi</p>
              <p className="mt-2 text-2xl font-black">{totalQuestions}</p>
            </div>
            <div className="rounded-2xl bg-bg p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-text-dim">Chương đang sửa</p>
              <p className="mt-2 text-2xl font-black">{selectedChapter?.questions.length ?? 0} câu</p>
            </div>
          </div>

          {message && <p className="mt-4 rounded-2xl bg-accent/10 px-4 py-3 text-sm font-bold text-accent">{message}</p>}
        </header>

        <div className="grid gap-5 lg:grid-cols-[20rem_minmax(0,1fr)]">
          <aside className="rounded-[28px] border border-white/80 bg-card-bg p-4 shadow-[0_18px_65px_rgba(15,23,42,0.07)]">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-black">Danh sách chương</h2>
              <button type="button" onClick={addChapter} className="rounded-xl bg-accent px-3 py-2 text-xs font-black text-white">
                + Chương
              </button>
            </div>
            <div className="space-y-2">
              {draft.map((chapter) => (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className={`w-full rounded-2xl border p-3 text-left transition-all ${
                    chapter.id === selectedChapter?.id ? 'border-accent bg-accent/10' : 'border-border bg-white hover:border-accent'
                  }`}
                >
                  <p className="font-black">{chapter.title}</p>
                  <p className="mt-1 text-xs text-text-dim">{chapter.questions.length} câu hỏi</p>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('Khôi phục dữ liệu gốc và xóa toàn bộ chỉnh sửa local?')) {
                  onResetDefault();
                  setDraft(normalizeBank(chapters));
                  setMessage('Đã khôi phục dữ liệu gốc.');
                }
              }}
              className="mt-4 w-full rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-extrabold text-red-700"
            >
              Khôi phục dữ liệu gốc
            </button>
          </aside>

          <main className="space-y-5">
            {selectedChapter && (
              <section className="rounded-[28px] border border-white/80 bg-card-bg p-5 shadow-[0_18px_65px_rgba(15,23,42,0.07)]">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-black">Thông tin chương</h2>
                  <button
                    type="button"
                    onClick={deleteChapter}
                    className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-extrabold text-red-700"
                  >
                    Xóa chương
                  </button>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-dim">Tiêu đề</span>
                    <input
                      value={selectedChapter.title}
                      onChange={(event) => updateSelectedChapter({ title: event.target.value })}
                      className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 font-semibold outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-dim">Nguồn</span>
                    <input
                      value={selectedChapter.source ?? ''}
                      onChange={(event) => updateSelectedChapter({ source: event.target.value })}
                      className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 font-semibold outline-none focus:border-accent"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-text-dim">Mô tả</span>
                    <textarea
                      value={selectedChapter.description}
                      onChange={(event) => updateSelectedChapter({ description: event.target.value })}
                      rows={3}
                      className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 font-semibold outline-none focus:border-accent"
                    />
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 font-bold">
                    <input
                      type="checkbox"
                      checked={selectedChapter.enabled}
                      onChange={(event) => updateSelectedChapter({ enabled: event.target.checked })}
                    />
                    Hiển thị chương trong app
                  </label>
                </div>
              </section>
            )}

            {selectedChapter && (
              <section className="rounded-[28px] border border-white/80 bg-card-bg p-5 shadow-[0_18px_65px_rgba(15,23,42,0.07)]">
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-xl font-black">Câu hỏi</h2>
                  <button type="button" onClick={addQuestion} className="rounded-2xl bg-accent px-4 py-3 text-sm font-extrabold text-white">
                    + Thêm câu hỏi
                  </button>
                </div>
                <div className="space-y-4">
                  {selectedChapter.questions.map((question, index) => (
                    <article key={question.id} className="rounded-3xl border border-border bg-white p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="text-sm font-black text-accent">Câu {index + 1} · ID {question.id}</p>
                        <button
                          type="button"
                          onClick={() => deleteQuestion(question.id)}
                          className="rounded-xl bg-red-50 px-3 py-2 text-xs font-black text-red-700"
                        >
                          Xóa
                        </button>
                      </div>
                      <textarea
                        value={question.text}
                        onChange={(event) => updateQuestion(question.id, { text: event.target.value })}
                        rows={3}
                        className="w-full rounded-2xl border border-border bg-bg px-4 py-3 font-semibold outline-none focus:border-accent"
                      />
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {ANSWERS.map((key) => (
                          <label key={key} className="block">
                            <span className="text-xs font-black text-text-dim">Đáp án {key}</span>
                            <input
                              value={question.options[key]}
                              onChange={(event) =>
                                updateQuestion(question.id, {
                                  options: { ...question.options, [key]: event.target.value }
                                })
                              }
                              className="mt-1 w-full rounded-2xl border border-border bg-bg px-4 py-3 text-sm font-semibold outline-none focus:border-accent"
                            />
                          </label>
                        ))}
                      </div>
                      <label className="mt-3 block">
                        <span className="text-xs font-black text-text-dim">Đáp án đúng</span>
                        <select
                          value={question.answer}
                          onChange={(event) => updateQuestion(question.id, { answer: event.target.value as Question['answer'] })}
                          className="mt-1 rounded-2xl border border-border bg-bg px-4 py-3 font-black outline-none focus:border-accent"
                        >
                          {ANSWERS.map((answer) => (
                            <option key={answer} value={answer}>
                              {answer}
                            </option>
                          ))}
                        </select>
                      </label>
                    </article>
                  ))}
                </div>
              </section>
            )}

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[28px] border border-white/80 bg-card-bg p-5 shadow-[0_18px_65px_rgba(15,23,42,0.07)]">
                <h2 className="mb-3 text-xl font-black">Export JSON</h2>
                <textarea readOnly value={exportText} rows={10} className="w-full rounded-2xl border border-border bg-bg p-3 font-mono text-xs" />
                <button type="button" onClick={copyExport} className="mt-3 rounded-2xl bg-sidebar-bg px-4 py-3 text-sm font-extrabold text-white">
                  Copy JSON
                </button>
              </div>
              <div className="rounded-[28px] border border-white/80 bg-card-bg p-5 shadow-[0_18px_65px_rgba(15,23,42,0.07)]">
                <h2 className="mb-3 text-xl font-black">Import JSON</h2>
                <textarea
                  value={importText}
                  onChange={(event) => setImportText(event.target.value)}
                  rows={10}
                  placeholder="Dán JSON question bank vào đây"
                  className="w-full rounded-2xl border border-border bg-bg p-3 font-mono text-xs"
                />
                <button type="button" onClick={importBank} className="mt-3 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-extrabold">
                  Import vào bản nháp
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
