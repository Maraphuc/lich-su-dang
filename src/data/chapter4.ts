import { Question } from '../types';
import {
  officialChapter1Questions,
  officialChapter2Questions,
  officialChapter3Questions
} from './officialSupplement';

type GeneratedQuestionItem = {
  topic: string;
  keyPoint: string;
  correct: string;
  distractors: [string, string, string];
};

const curatedOfficialQuestions: Question[] = [
  ...officialChapter1Questions,
  ...officialChapter2Questions,
  ...officialChapter3Questions
].map((question, index) => ({
  ...question,
  id: 4001 + index
}));

const questionItems: GeneratedQuestionItem[] = [
  { topic: "Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930", keyPoint: "thời gian", correct: "từ ngày 3 đến ngày 7-2-1930", distractors: ["từ ngày 11 đến ngày 19-2-1951", "từ ngày 5 đến ngày 12-9-1960", "từ ngày 15 đến ngày 18-12-1986"] },
  { topic: "Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930", keyPoint: "người chủ trì", correct: "Nguyễn Ái Quốc", distractors: ["Trần Phú", "Lê Hồng Phong", "Nguyễn Văn Cừ"] },
  { topic: "Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930", keyPoint: "địa điểm", correct: "Cửu Long, Hương Cảng, Trung Quốc", distractors: ["Pác Bó, Cao Bằng", "Tân Trào, Tuyên Quang", "Hà Nội"] },
  { topic: "Sự kiện ngày 3-2-1930", keyPoint: "ý nghĩa mốc lịch sử", correct: "ngày thành lập Đảng Cộng sản Việt Nam", distractors: ["ngày thành lập Mặt trận Việt Minh", "ngày toàn quốc kháng chiến", "ngày khai mạc Đại hội VI"] },
  { topic: "Cương lĩnh chính trị đầu tiên của Đảng năm 1930", keyPoint: "vai trò nổi bật", correct: "gắn với sự chuẩn bị và chủ trì của Nguyễn Ái Quốc", distractors: ["do Quốc tế Cộng sản trực tiếp soạn hoàn chỉnh", "do Việt Nam Quốc dân Đảng thông qua", "được ban hành sau Đại hội VI"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ I của Đảng", keyPoint: "thời gian", correct: "từ ngày 27 đến ngày 31-3-1935", distractors: ["từ ngày 3 đến ngày 7-2-1930", "từ ngày 11 đến ngày 19-2-1951", "từ ngày 24 đến ngày 27-6-1991"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ I của Đảng", keyPoint: "địa điểm", correct: "Ma Cao, Trung Quốc", distractors: ["Hà Nội", "Vinh Quang, Chiêm Hóa, Tuyên Quang", "Cửu Long, Hương Cảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ II của Đảng", keyPoint: "thời gian", correct: "từ ngày 11 đến ngày 19-2-1951", distractors: ["từ ngày 5 đến ngày 12-9-1960", "từ ngày 15 đến ngày 18-12-1986", "từ ngày 19 đến ngày 22-4-2001"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ II của Đảng", keyPoint: "địa điểm", correct: "xã Vinh Quang, huyện Chiêm Hóa, tỉnh Tuyên Quang", distractors: ["Hà Nội", "Ma Cao, Trung Quốc", "thành phố Hồ Chí Minh"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ II của Đảng", keyPoint: "quyết định quan trọng về tổ chức", correct: "đưa Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam", distractors: ["đổi tên Đảng thành Đảng Cộng sản Đông Dương", "thông qua Cương lĩnh bổ sung năm 2011", "mở đầu công cuộc đổi mới"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ II của Đảng", keyPoint: "chức danh Chủ tịch Đảng", correct: "Hồ Chí Minh được bầu làm Chủ tịch Đảng", distractors: ["Lê Duẩn được bầu làm Chủ tịch Đảng", "Nguyễn Văn Linh được bầu làm Chủ tịch Đảng", "Đỗ Mười được bầu làm Chủ tịch Đảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ II của Đảng", keyPoint: "Tổng Bí thư", correct: "Trường Chinh được bầu làm Tổng Bí thư", distractors: ["Nguyễn Văn Linh được bầu làm Tổng Bí thư", "Nông Đức Mạnh được bầu làm Tổng Bí thư", "Nguyễn Phú Trọng được bầu làm Tổng Bí thư"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ III của Đảng", keyPoint: "thời gian", correct: "từ ngày 5 đến ngày 12-9-1960", distractors: ["từ ngày 11 đến ngày 19-2-1951", "từ ngày 14 đến ngày 20-12-1976", "từ ngày 24 đến ngày 27-6-1991"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ III của Đảng", keyPoint: "địa điểm", correct: "Hà Nội", distractors: ["Tuyên Quang", "Ma Cao, Trung Quốc", "Cửu Long, Hương Cảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ III của Đảng", keyPoint: "đường lối chiến lược", correct: "xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh thống nhất nước nhà", distractors: ["mở đầu công cuộc đổi mới toàn diện", "thành lập Mặt trận Việt Minh", "thông qua Cương lĩnh bổ sung năm 2011"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ III của Đảng", keyPoint: "chức danh Bí thư thứ nhất", correct: "Lê Duẩn được bầu làm Bí thư thứ nhất", distractors: ["Nguyễn Văn Linh được bầu làm Bí thư thứ nhất", "Đỗ Mười được bầu làm Bí thư thứ nhất", "Nông Đức Mạnh được bầu làm Bí thư thứ nhất"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng", keyPoint: "thời gian", correct: "từ ngày 14 đến ngày 20-12-1976", distractors: ["từ ngày 15 đến ngày 18-12-1986", "từ ngày 5 đến ngày 12-9-1960", "từ ngày 12 đến ngày 19-1-2011"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng", keyPoint: "địa điểm", correct: "Hà Nội", distractors: ["Chiêm Hóa, Tuyên Quang", "Ma Cao, Trung Quốc", "Hương Cảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng", keyPoint: "ý nghĩa sau năm 1975", correct: "là Đại hội đầu tiên sau khi đất nước thống nhất", distractors: ["là Đại hội mở đầu công cuộc đổi mới", "là Đại hội thông qua Cương lĩnh 1991", "là Đại hội thành lập Đảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ IV của Đảng", keyPoint: "quyết định về tên Đảng", correct: "đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam", distractors: ["đổi tên Đảng thành Việt Nam Quốc dân Đảng", "đổi tên Đảng thành Hội Việt Nam Cách mạng Thanh niên", "đổi tên Đảng thành Mặt trận Việt Minh"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ V của Đảng", keyPoint: "thời gian", correct: "từ ngày 27 đến ngày 31-3-1982", distractors: ["từ ngày 14 đến ngày 20-12-1976", "từ ngày 15 đến ngày 18-12-1986", "từ ngày 24 đến ngày 27-6-1991"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ V của Đảng", keyPoint: "địa điểm", correct: "Hà Nội", distractors: ["Tuyên Quang", "Ma Cao, Trung Quốc", "Cửu Long, Hương Cảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng", keyPoint: "thời gian họp công khai", correct: "từ ngày 15 đến ngày 18-12-1986", distractors: ["từ ngày 5 đến ngày 12-9-1960", "từ ngày 24 đến ngày 27-6-1991", "từ ngày 19 đến ngày 22-4-2001"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng", keyPoint: "ý nghĩa nổi bật", correct: "mở đầu công cuộc đổi mới toàn diện đất nước", distractors: ["thành lập Đảng Cộng sản Việt Nam", "thông qua Cương lĩnh đầu tiên năm 1930", "kết thúc cuộc kháng chiến chống Pháp"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng", keyPoint: "Tổng Bí thư", correct: "Nguyễn Văn Linh được bầu làm Tổng Bí thư", distractors: ["Đỗ Mười được bầu làm Tổng Bí thư", "Nông Đức Mạnh được bầu làm Tổng Bí thư", "Trường Chinh được bầu làm Tổng Bí thư"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VI của Đảng", keyPoint: "địa điểm", correct: "Hà Nội", distractors: ["Vinh Quang, Chiêm Hóa, Tuyên Quang", "Ma Cao, Trung Quốc", "Cửu Long, Hương Cảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng", keyPoint: "thời gian", correct: "từ ngày 24 đến ngày 27-6-1991", distractors: ["từ ngày 15 đến ngày 18-12-1986", "từ ngày 19 đến ngày 22-4-2001", "từ ngày 12 đến ngày 19-1-2011"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng", keyPoint: "văn kiện quan trọng", correct: "thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội năm 1991", distractors: ["thông qua Cương lĩnh bổ sung, phát triển năm 2011", "thông qua Hiệp định Giơnevơ", "phát động toàn quốc kháng chiến"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VII của Đảng", keyPoint: "Tổng Bí thư", correct: "Đỗ Mười được bầu làm Tổng Bí thư", distractors: ["Nguyễn Văn Linh được bầu làm Tổng Bí thư", "Nông Đức Mạnh được bầu làm Tổng Bí thư", "Nguyễn Phú Trọng được bầu làm Tổng Bí thư"] },
  { topic: "Cương lĩnh năm 1991", keyPoint: "số đặc trưng cơ bản của mô hình xã hội xã hội chủ nghĩa", correct: "6 đặc trưng", distractors: ["4 đặc trưng", "8 đặc trưng", "10 đặc trưng"] },
  { topic: "Cương lĩnh năm 1991", keyPoint: "đặc trưng về quyền làm chủ", correct: "xã hội do nhân dân lao động làm chủ", distractors: ["xã hội do chính quyền thực dân quản lý", "xã hội do giai cấp tư sản độc quyền làm chủ", "xã hội tách rời quyền làm chủ của nhân dân"] },
  { topic: "Cương lĩnh năm 1991", keyPoint: "đặc trưng về văn hóa", correct: "nền văn hóa tiên tiến, đậm đà bản sắc dân tộc", distractors: ["nền văn hóa biệt lập với thế giới", "nền văn hóa phủ nhận truyền thống dân tộc", "nền văn hóa thuộc địa nửa phong kiến"] },
  { topic: "Cương lĩnh năm 1991", keyPoint: "đặc trưng về kinh tế", correct: "nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu", distractors: ["nền kinh tế tự cấp tự túc khép kín", "nền kinh tế thuộc địa phụ thuộc hoàn toàn", "nền kinh tế không cần phát triển lực lượng sản xuất"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ VIII của Đảng", keyPoint: "thời gian", correct: "từ ngày 28-6 đến ngày 1-7-1996", distractors: ["từ ngày 24 đến ngày 27-6-1991", "từ ngày 19 đến ngày 22-4-2001", "từ ngày 18 đến ngày 25-4-2006"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ IX của Đảng", keyPoint: "thời gian", correct: "từ ngày 19 đến ngày 22-4-2001", distractors: ["từ ngày 28-6 đến ngày 1-7-1996", "từ ngày 12 đến ngày 19-1-2011", "từ ngày 25-1 đến ngày 1-2-2021"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ IX của Đảng", keyPoint: "Tổng Bí thư", correct: "Nông Đức Mạnh được bầu làm Tổng Bí thư", distractors: ["Đỗ Mười được bầu làm Tổng Bí thư", "Nguyễn Văn Linh được bầu làm Tổng Bí thư", "Lê Duẩn được bầu làm Tổng Bí thư"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ X của Đảng", keyPoint: "thời gian", correct: "từ ngày 18 đến ngày 25-4-2006", distractors: ["từ ngày 19 đến ngày 22-4-2001", "từ ngày 12 đến ngày 19-1-2011", "từ ngày 20 đến ngày 28-1-2016"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ X của Đảng", keyPoint: "Tổng Bí thư", correct: "Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư", distractors: ["Đỗ Mười tiếp tục được bầu làm Tổng Bí thư", "Nguyễn Văn Linh tiếp tục được bầu làm Tổng Bí thư", "Trường Chinh tiếp tục được bầu làm Tổng Bí thư"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XI của Đảng", keyPoint: "thời gian", correct: "từ ngày 12 đến ngày 19-1-2011", distractors: ["từ ngày 18 đến ngày 25-4-2006", "từ ngày 20 đến ngày 28-1-2016", "từ ngày 25-1 đến ngày 1-2-2021"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XI của Đảng", keyPoint: "văn kiện quan trọng", correct: "thông qua Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội bổ sung, phát triển năm 2011", distractors: ["thông qua Cương lĩnh chính trị đầu tiên năm 1930", "thông qua Lời kêu gọi toàn quốc kháng chiến", "thành lập Hội Việt Nam Cách mạng Thanh niên"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XI của Đảng", keyPoint: "Tổng Bí thư", correct: "Nguyễn Phú Trọng được bầu làm Tổng Bí thư", distractors: ["Nông Đức Mạnh được bầu làm Tổng Bí thư", "Đỗ Mười được bầu làm Tổng Bí thư", "Nguyễn Văn Linh được bầu làm Tổng Bí thư"] },
  { topic: "Cương lĩnh bổ sung, phát triển năm 2011", keyPoint: "mục tiêu khái quát của xã hội xã hội chủ nghĩa", correct: "dân giàu, nước mạnh, dân chủ, công bằng, văn minh", distractors: ["dân nghèo, nước yếu, xã hội bất công", "tự cấp, tự túc, biệt lập, khép kín", "thuộc địa, phụ thuộc, chia cắt"] },
  { topic: "Cương lĩnh bổ sung, phát triển năm 2011", keyPoint: "số đặc trưng của xã hội xã hội chủ nghĩa", correct: "8 đặc trưng", distractors: ["4 đặc trưng", "6 đặc trưng", "12 đặc trưng"] },
  { topic: "Cương lĩnh bổ sung, phát triển năm 2011", keyPoint: "đặc trưng về Nhà nước", correct: "có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân", distractors: ["có nhà nước quân chủ chuyên chế", "có nhà nước bảo hộ thuộc địa", "không cần tổ chức nhà nước"] },
  { topic: "Cương lĩnh bổ sung, phát triển năm 2011", keyPoint: "đặc trưng về dân tộc", correct: "các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển", distractors: ["các dân tộc đối lập và tách rời nhau", "chỉ một dân tộc có quyền phát triển", "phủ nhận sự đoàn kết giữa các dân tộc"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XII của Đảng", keyPoint: "thời gian", correct: "từ ngày 20 đến ngày 28-1-2016", distractors: ["từ ngày 12 đến ngày 19-1-2011", "từ ngày 25-1 đến ngày 1-2-2021", "từ ngày 18 đến ngày 25-4-2006"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XII của Đảng", keyPoint: "Tổng Bí thư", correct: "Nguyễn Phú Trọng tiếp tục được bầu làm Tổng Bí thư", distractors: ["Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư", "Đỗ Mười tiếp tục được bầu làm Tổng Bí thư", "Nguyễn Văn Linh tiếp tục được bầu làm Tổng Bí thư"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XIII của Đảng", keyPoint: "thời gian", correct: "từ ngày 25-1 đến ngày 1-2-2021", distractors: ["từ ngày 20 đến ngày 28-1-2016", "từ ngày 12 đến ngày 19-1-2011", "từ ngày 19 đến ngày 22-4-2001"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XIII của Đảng", keyPoint: "địa điểm", correct: "Hà Nội", distractors: ["Tuyên Quang", "Ma Cao, Trung Quốc", "Hương Cảng"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XIII của Đảng", keyPoint: "Tổng Bí thư", correct: "Nguyễn Phú Trọng tiếp tục được bầu làm Tổng Bí thư", distractors: ["Nông Đức Mạnh tiếp tục được bầu làm Tổng Bí thư", "Đỗ Mười tiếp tục được bầu làm Tổng Bí thư", "Lê Duẩn tiếp tục được bầu làm Tổng Bí thư"] },
  { topic: "Đại hội đại biểu toàn quốc lần thứ XIII của Đảng", keyPoint: "định hướng phát triển được nhấn mạnh", correct: "khơi dậy khát vọng phát triển đất nước phồn vinh, hạnh phúc", distractors: ["khép kín đất nước với thế giới", "từ bỏ mục tiêu độc lập dân tộc", "chỉ phát triển kinh tế tự cấp tự túc"] },
  { topic: "Cương lĩnh bổ sung, phát triển năm 2011", keyPoint: "những thắng lợi lớn được khái quát", correct: "Cách mạng Tháng Tám 1945, các cuộc kháng chiến chống xâm lược và công cuộc đổi mới", distractors: ["chỉ có khởi nghĩa Yên Bái", "chỉ có phong trào Đông Du", "chỉ có phong trào cải lương đầu thế kỷ XX"] }
];

const questionTemplates = [
  (item: GeneratedQuestionItem) => `${item.keyPoint.charAt(0).toUpperCase() + item.keyPoint.slice(1)} của ${item.topic} là gì?`,
  (item: GeneratedQuestionItem) => `Chọn thông tin đúng về ${item.keyPoint} của ${item.topic}.`,
  (item: GeneratedQuestionItem) => `Nội dung nào sau đây gắn với ${item.topic}?`,
  (item: GeneratedQuestionItem) => `Khi ôn tập ${item.topic}, cần ghi nhớ ${item.keyPoint} nào?`,
  (item: GeneratedQuestionItem) => `Nhận định nào chính xác về ${item.topic}?`
];

const rotateOptions = (choices: [string, string, string, string], offset: number) => {
  const rotated = [...choices.slice(offset), ...choices.slice(0, offset)] as [string, string, string, string];
  const correctIndex = rotated.indexOf(choices[0]);
  const letters = ['A', 'B', 'C', 'D'] as const;

  return {
    options: {
      A: rotated[0],
      B: rotated[1],
      C: rotated[2],
      D: rotated[3]
    },
    answer: letters[correctIndex]
  };
};

const generatedQuestions: Question[] = questionItems.flatMap((item, itemIndex) =>
  questionTemplates.map((template, templateIndex) => {
    const id = 4046 + itemIndex * questionTemplates.length + templateIndex;
    const choices: [string, string, string, string] = [item.correct, item.distractors[0], item.distractors[1], item.distractors[2]];
    const { options, answer } = rotateOptions(choices, (itemIndex + templateIndex) % 4);

    return {
      id,
      text: template(item),
      options,
      answer
    };
  })
);

export const chapter4Questions: Question[] = [...curatedOfficialQuestions, ...generatedQuestions].slice(0, 300);
