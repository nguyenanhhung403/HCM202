import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export default function Member3_Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = rect.top - windowHeight / 2;

      if (start < 0) {
        let currentProgress = Math.abs(start) / rect.height;
        currentProgress = Math.max(0, Math.min(1, currentProgress));
        setProgress(currentProgress);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section timeline-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Thời Kỳ Quá Độ Lên CNXH</h2>
          <p className="section-subtitle">
            Khám phá tính chất phức tạp và lộ trình nhảy cóc lịch sử: "Tiến
            thẳng lên Chủ nghĩa Xã hội, bỏ qua giai đoạn phát triển tư bản chủ
            nghĩa".
          </p>
        </div>

        <div className="timeline-container" ref={containerRef}>
          <div className="timeline-track"></div>
          <div
            className="timeline-progress"
            style={{ height: `${progress * 100}%` }}
          ></div>
          <div
            className="timeline-runner"
            style={{ top: `calc(${progress * 100}% - 14px)` }}
          >
            <Star size={14} fill="white" strokeWidth={1.5} />
          </div>

          <div className="tl-item" data-aos="fade-up">
            <div className="tl-dot"></div>
            <div className="tl-card">
              <span className="tl-card-badge red">Tính chất & Đặc điểm</span>
              <h3>Bối cảnh đi lên từ nông nghiệp lạc hậu</h3>
              <p>
                Đây là đặc điểm bao trùm, lớn nhất, chi phối mọi điều kiện phát
                triển ở nước ta thời bấy giờ:{" "}
                <strong className="red-text">
                  Tiến thẳng lên Chủ nghĩa Xã hội, không kinh qua giai đoạn phát
                  triển tư bản chủ nghĩa
                </strong>
                . Nền kinh tế tiểu nông bị tàn phá nặng nề bởi chiến tranh.
              </p>
              <ul>
                <li>
                  Thời kỳ lịch sử đặc biệt, đan xen giữa cái cũ và cái mới.
                </li>
                <li>
                  Cuộc đấu tranh gay go, gian khổ, phức tạp và cực kì lâu dài.
                </li>
                <li>
                  Phải tự mò mẫm, vừa làm vừa rút kinh nghiệm chưa từng có tiền
                  lệ.
                </li>
              </ul>
            </div>
          </div>

          <div className="tl-item" data-aos="fade-up">
            <div className="tl-dot"></div>
            <div className="tl-card">
              <span className="tl-card-badge gold">Nhiệm vụ: Chính trị</span>
              <h3>Xây dựng vững chắc bộ máy Nhà nước</h3>
              <p>
                Nhiệm vụ hàng đầu là phải củng cố chính quyền dân chủ nhân dân,
                kiện toàn bộ máy Nhà nước từ trung ương tới địa phương.
              </p>
              <ul>
                <li>
                  Nâng cao vai trò lãnh đạo tuyệt đối, toàn diện của Đảng Cộng
                  sản.
                </li>
                <li>
                  Phát huy tối đa quyền làm chủ của giai cấp công nhân và nhân
                  dân lao động.
                </li>
                <li>
                  Đập tan mọi âm mưu chia rẽ, chống phá của thế lực thù địch.
                </li>
              </ul>
            </div>
          </div>

          <div className="tl-item" data-aos="fade-up">
            <div className="tl-dot"></div>
            <div className="tl-card">
              <span className="tl-card-badge green">Nhiệm vụ: Kinh tế</span>
              <h3>Cải tạo và Xây dựng nền kinh tế mới</h3>
              <p>
                Hồ Chí Minh đặc biệt nhấn mạnh trọng tâm là quá trình{" "}
                <strong>Công nghiệp hóa Xã hội chủ nghĩa</strong>. Phải cải biến
                cơ cấu kinh tế một cách triệt để.
              </p>
              <ul>
                <li>Cải tạo nền kinh tế cũ, lạc hậu, manh mún.</li>
                <li>
                  Xây dựng nền kinh tế công hữu vững chắc, lấy doanh nghiệp nhà
                  nước làm chủ đạo.
                </li>
                <li>
                  Kết hợp phát triển công nghiệp nặng hợp lý, ưu tiên nông
                  nghiệp và công nghiệp nhẹ.
                </li>
              </ul>
            </div>
          </div>

          <div className="tl-item" data-aos="fade-up">
            <div className="tl-dot"></div>
            <div className="tl-card">
              <span
                className="tl-card-badge blue"
                style={{ background: "#D0EBFF", color: "#1971C2" }}
              >
                Nhiệm vụ: Văn hóa Xã hội
              </span>
              <h3>Chiến dịch chống "Giặc Dốt" & Thay đổi nhận thức</h3>
              <p>
                Cùng với "giặc đói" và "giặc ngoại xâm", Bác xem dốt nát là một
                trong những kẻ thù lớn nhất cản bước tiến tới Xã hội chủ nghĩa.
              </p>
              <ul>
                <li>
                  Bài trừ triệt để tệ nạn xã hội cũ, cờ bạc, rượu chè, mê tín dị
                  đoan.
                </li>
                <li>
                  Xây dựng nền giáo dục tiến bộ, đào tạo nguồn nhân lực cốt cán,
                  có tư duy.
                </li>
                <li>
                  Bồi đắp nếp sống văn minh, khoa học lan tỏa tới từng xóm làng.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
