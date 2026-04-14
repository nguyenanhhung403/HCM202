import { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw, BrainCircuit } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizData: Question[] = [
  {
    id: 1,
    question: "Theo Hồ Chí Minh, mục tiêu cao nhất của Chủ nghĩa Xã hội là gì?",
    options: [
      "Xây dựng thành công chế độ công hữu về tư liệu sản xuất",
      "Không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân",
      "Đánh đuổi hoàn toàn thực dân và phong kiến",
      "Tiến hành công nghiệp hóa, hiện đại hóa đất nước"
    ],
    correctAnswer: 1,
    explanation: "Với Bác, mọi lý luận đều quy về thực tiễn làm cho người dân được ấm no, tự do, hạnh phúc. Đó là mục đích tối thượng."
  },
  {
    id: 2,
    question: "Đặc điểm lớn nhất của thời kỳ quá độ lên CNXH ở nước ta theo Bác là gì?",
    options: [
      "Trải qua giai đoạn tư bản chủ nghĩa ở mức độ thấp",
      "Bắt đầu từ một nước có nền công nghiệp tiên tiến",
      "Từ một nước nông nghiệp lạc hậu tiến thẳng lên CNXH, không kinh qua giai đoạn phát triển TBCN",
      "Nhận được sự viện trợ toàn diện từ các nước XHCN anh em"
    ],
    correctAnswer: 2,
    explanation: "Đây là đặc điểm chi phối toàn bộ lộ trình và bước đi của cách mạng Việt Nam, đòi hỏi sự sáng tạo không rập khuôn."
  },
  {
    id: 3,
    question: "Theo Hồ Chí Minh, động lực quan trọng và quyết định nhất để xây dựng thành công CNXH là gì?",
    options: [
      "Sự giúp đỡ của quốc tế",
      "Tiềm lực kinh tế sẵn có",
      "Khoa học - kỹ thuật tiên tiến",
      "Con người (Sức mạnh của quần chúng nhân dân)"
    ],
    correctAnswer: 3,
    explanation: "Bác luôn khẳng định: 'Sức dân như nước'. Nhân dân không chỉ là mục tiêu mà là động lực lớn nhất của CNXH."
  },
  {
    id: 4,
    question: "Hồ Chí Minh chỉ ra đâu là những kẻ thù nguy hiểm (giặc nội xâm) phá hoại quá trình xây dựng CNXH?",
    options: [
      "Tham ô, lãng phí, quan liêu",
      "Thiên tai, dịch bệnh, nghèo đói",
      "Sự chống phá của thực dân, đế quốc",
      "Sự thiếu thốn về nguồn vốn đầu tư"
    ],
    correctAnswer: 0,
    explanation: "Bác coi tham ô, lãng phí, quan liêu có tội ác ngang với Việt gian, mật thám vì nó phá hoại từ bên trong cơ thể Đảng và Nhà nước."
  },
  {
    id: 5,
    question: "Phương châm xuyên suốt trong quá trình xây dựng Chủ Nghĩa Xã Hội mà Bác đề ra là gì?",
    options: [
      "Làm thật nhanh, đốt cháy giai đoạn để sánh vai cường quốc",
      "Vừa làm vừa chờ viện trợ của nước ngoài",
      "Chỉ tập trung phát triển công nghiệp nặng",
      "Xây đi đôi với Chống, làm dần dần, tiến từng bước vững chắc"
    ],
    correctAnswer: 3,
    explanation: "Xây dựng những giá trị mới (Xây) phải đồng thời loại bỏ thói hư tật xấu (Chống), không được chủ quan nóng vội."
  }
];

export default function Quiz() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQ = quizData[currentQIndex];

  const handleSelect = (index: number) => {
    if (!isSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQIndex < quizData.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section className="section quiz-section" id="trac-nghiem">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <span className="section-badge"><BrainCircuit size={16} style={{ display: 'inline', marginRight: '6px' }}/> Bài Tập Trắc Nghiệm</span>
          <h2 className="section-title">Kiểm tra Kiến Thức</h2>
          <p className="section-subtitle">
            Cùng ôn lại những nội dung trọng tâm về Tư tưởng Hồ Chí Minh.
          </p>
        </div>

        <div className="quiz-container">
          {!showResults ? (
            <div className="quiz-card">
              <div className="quiz-progress">
                Câu hỏi {currentQIndex + 1} / {quizData.length}
              </div>
              <h3 className="quiz-question">{currentQ.question}</h3>
              
              <div className="quiz-options">
                {currentQ.options.map((option, idx) => {
                  let optionClass = "quiz-option";
                  if (selectedAnswer === idx) optionClass += " selected";
                  
                  if (isSubmitted) {
                    if (idx === currentQ.correctAnswer) {
                      optionClass += " correct";
                    } else if (idx === selectedAnswer) {
                      optionClass += " wrong";
                    }
                  }

                  return (
                    <button 
                      key={idx} 
                      className={optionClass}
                      onClick={() => handleSelect(idx)}
                      disabled={isSubmitted}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                      {option}
                      {isSubmitted && idx === currentQ.correctAnswer && <CheckCircle2 className="result-icon correct" />}
                      {isSubmitted && idx === selectedAnswer && idx !== currentQ.correctAnswer && <XCircle className="result-icon wrong" />}
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className={`quiz-explanation ${selectedAnswer === currentQ.correctAnswer ? 'success' : 'error'}`} data-aos="fade-in">
                  <h4>{selectedAnswer === currentQ.correctAnswer ? 'Chính xác!' : 'Chưa đúng!'}</h4>
                  <p>{currentQ.explanation}</p>
                </div>
              )}

              <div className="quiz-actions">
                {!isSubmitted ? (
                  <button 
                    className="btn btn-primary" 
                    onClick={handleSubmit} 
                    disabled={selectedAnswer === null}
                  >
                    Trả lời
                  </button>
                ) : (
                  <button className="btn btn-secondary" onClick={handleNext}>
                    {currentQIndex === quizData.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="quiz-results" data-aos="zoom-in">
              <div className="results-circle">
                <span className="results-score">{score}/{quizData.length}</span>
              </div>
              <h3>Hoàn thành bài Test!</h3>
              <p>
                {score === quizData.length 
                  ? "Xuất sắc! Bạn đã nắm vững các quan điểm cốt lõi của Bác." 
                  : score >= 3 
                  ? "Khá tốt! Bạn có nền tảng vững vàng về Tư tưởng Hồ Chí Minh." 
                  : "Bạn cần xem lại các phần lý thuyết bên trên để nắm rõ hơn nhé."}
              </p>
              <button className="btn btn-primary btn-icon" onClick={handleRestart}>
                <RotateCcw size={18} /> Làm lại từ đầu
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
