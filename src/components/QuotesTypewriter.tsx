import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  "\"Chủ nghĩa xã hội là làm sao cho nhân dân đủ ăn, đủ mặc, ngày càng sung sướng, ai nấy được đi học, ốm đau có thuốc uống, già không lao động được thì nghỉ...\"",
  "\"Chủ nghĩa xã hội là nhằm nâng cao đời sống vật chất và văn hoá của nhân dân và do nhân dân tự xây dựng lấy.\"",
  "\"Chủ nghĩa cộng sản không rập khuôn, không giáo điều. Cần phải biết sáng tạo và đem những chân lý phổ biến của chủ nghĩa Mác-Lênin áp dụng một cách sáng tạo vào hoàn cảnh cụ thể của nước ta.\"",
  "\"Cách mệnh là việc chung của cả dân chúng chứ không phải việc một hai người. Sức dân như nước, chống xuồng cũng là nước, mà lật xuồng cũng là nước...\""
];

export default function QuotesTypewriter() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: number;
    const currentQuote = quotes[currentQuoteIndex];
    
    // Typing speed configurations
    const typingSpeed = 40;
    const deletingSpeed = 15;
    const delayBetweenQuotes = 5000; // Let people read

    const typeText = () => {
      // If full text is typed, wait then start deleting
      if (!isDeleting && displayedText === currentQuote) {
        timer = window.setTimeout(() => setIsDeleting(true), delayBetweenQuotes);
        return;
      }

      // If text is fully deleted, move to next quote
      if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        return;
      }

      // Handle typing/deleting
      const nextText = isDeleting 
        ? currentQuote.substring(0, displayedText.length - 1)
        : currentQuote.substring(0, displayedText.length + 1);
        
      setDisplayedText(nextText);
      timer = window.setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    };

    timer = window.setTimeout(typeText, 10);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentQuoteIndex]);

  return (
    <section className="quotes-section section" style={{ padding: '6rem 0' }}>
      <div className="container" data-aos="fade-up">
        <div className="quote-container">
          <div className="quote-icon">
            <Quote size={40} />
          </div>
          
          <div style={{ height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p className="typewriter-text" style={{ maxWidth: '850px' }}>
              {displayedText}
            </p>
            {displayedText === quotes[currentQuoteIndex] && !isDeleting && (
              <span className="quote-source" data-aos="fade-in">
                Trích dẫn lời Chủ tịch Hồ Chí Minh
              </span>
            )}
          </div>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '8px', 
            marginTop: '2rem' 
          }}>
            {quotes.map((_, i) => (
              <div 
                key={i} 
                style={{ 
                  width: i === currentQuoteIndex ? '24px' : '8px', 
                  height: '8px', 
                  borderRadius: '4px', 
                  background: i === currentQuoteIndex ? 'var(--red-500)' : 'var(--border-strong)',
                  transition: 'all 0.3s ease'
                }} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
