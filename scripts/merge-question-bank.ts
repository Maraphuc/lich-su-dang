import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Question } from '../src/types';
import {
  officialChapter1Questions,
  officialChapter2Questions,
  officialChapter3Questions
} from '../src/data/officialSupplement';

const root = process.cwd();

const targets: Array<{ file: string; questions: Question[] }> = [
  { file: 'src/data/chapter1.ts', questions: officialChapter1Questions },
  { file: 'src/data/chapter2.ts', questions: officialChapter2Questions },
  { file: 'src/data/chapter3.ts', questions: officialChapter3Questions }
];

const renderQuestion = (question: Question) => `  {
    id: ${question.id},
    text: ${JSON.stringify(question.text)},
    options: ${JSON.stringify(question.options)},
    answer: ${JSON.stringify(question.answer)}
  }`;

const hasQuestionId = (content: string, id: number) => new RegExp(`id:\\s*${id}\\b`).test(content);

for (const target of targets) {
  const absolutePath = path.join(root, target.file);
  const content = readFileSync(absolutePath, 'utf8');
  const missingQuestions = target.questions.filter((question) => !hasQuestionId(content, question.id));

  if (missingQuestions.length === 0) {
    continue;
  }

  const insertion = `,\n\n  // Câu hỏi bổ sung biên soạn từ nguồn chính thống\n${missingQuestions
    .map(renderQuestion)
    .join(',\n')}\n`;

  const updated = content.replace(/\n\];\s*$/, `${insertion}];\n`);

  if (updated === content) {
    throw new Error(`Không tìm thấy vị trí đóng mảng câu hỏi trong ${target.file}`);
  }

  writeFileSync(absolutePath, updated, 'utf8');
  console.log(`Đã bổ sung ${missingQuestions.length} câu hỏi vào ${target.file}`);
}
