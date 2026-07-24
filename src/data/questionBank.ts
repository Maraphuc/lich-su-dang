import { QuestionBankChapter } from '../types';
import { chapter1Questions } from './chapter1';
import { chapter2Questions } from './chapter2';
import { chapter3Questions } from './chapter3';
import {
  officialChapter1Questions,
  officialChapter2Questions,
  officialChapter3Questions
} from './officialSupplement';

const officialSupplementQuestions = [
  ...officialChapter1Questions,
  ...officialChapter2Questions,
  ...officialChapter3Questions
];

export const baseQuestionBank: QuestionBankChapter[] = [
  {
    id: 1,
    title: 'Chương 1',
    description: 'Việt Nam từ 1858 đến 1945',
    questionCount: chapter1Questions.length,
    enabled: true,
    source: 'Bộ câu hỏi hiện có',
    questions: chapter1Questions
  },
  {
    id: 2,
    title: 'Chương 2',
    description: 'Đường lối kháng chiến & Cách mạng miền Nam (1945-1975)',
    questionCount: chapter2Questions.length,
    enabled: true,
    source: 'Bộ câu hỏi hiện có',
    questions: chapter2Questions
  },
  {
    id: 3,
    title: 'Chương 3',
    description: 'Đảng lãnh đạo cả nước quá độ lên CNXH và tiến hành công cuộc đổi mới (Từ 1975 đến nay)',
    questionCount: chapter3Questions.length,
    enabled: true,
    source: 'Bộ câu hỏi hiện có',
    questions: chapter3Questions
  },
  {
    id: 4,
    title: 'Chương 4',
    description: 'Bộ câu hỏi bổ sung từ nguồn chính thống: Văn kiện Đảng, Đại hội Đảng và Cương lĩnh',
    questionCount: officialSupplementQuestions.length,
    enabled: true,
    source: 'Tư liệu Văn kiện Đảng và tài liệu chính thống đã biên soạn lại',
    questions: officialSupplementQuestions
  }
];
