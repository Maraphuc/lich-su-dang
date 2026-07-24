/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
}

export type QuizMode = 'study' | 'exam';

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: Record<number, string>;
  isFinished: boolean;
  score: number;
  startTime: number;
  endTime: number | null;
  mode: QuizMode;
  questions: Question[];
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  questionCount: number;
  enabled: boolean;
}
