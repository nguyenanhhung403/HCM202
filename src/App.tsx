import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { LightboxProvider } from './components/Lightbox';
import ThemeToggle from './components/ThemeToggle';
import QuotesTypewriter from './components/QuotesTypewriter';
import Member1_Bento from './components/Member1_Bento';
import Member2_Infographic from './components/Member2_Infographic';
import Member3_Timeline from './components/Member3_Timeline';
import Member4_SplitScreen from './components/Member4_SplitScreen';
import Quiz from './components/Quiz';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "visible" : ""}`}>
      <div className="nav-inner">
        <div className="nav-brand">HCM-202</div>
        <ul className="nav-links">
          <li>
            <a href="#quan-niem">Đặc Trưng</a>
          </li>
          <li>
            <a href="#muc-tieu">Mục Tiêu</a>
          </li>
          <li>
            <a href="#thoi-ky">Thời Kỳ Quá Độ</a>
          </li>
          <li>
            <a href="#nguyen-tac">Nguyên Tắc</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          Tư Tưởng Hồ Chí Minh
        </h1>
        <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
          Về Chủ Nghĩa Xã Hội và Thời Kỳ Quá Độ Tại Việt Nam
        </p>
        <p className="hero-desc" data-aos="fade-up" data-aos-delay="600">
          Dự án nghiên cứu nhóm môn học HCM202 - Giảng viên: Lê Minh Trí
        </p>
      </div>

      <div
        className="hero-scroll-hint"
        data-aos="fade-in"
        data-aos-delay="1000"
      >
        <span>Cuộn để khám phá</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </header>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <LightboxProvider>
      <Navbar />
      <ThemeToggle />

      <HeroSection />

      <main>
        {/* Lời dạy của Bác - Hiệu ứng Typewriter */}
        <QuotesTypewriter />

        {/* Thành viên 1 */}
        <div id="quan-niem">
          <Member1_Bento />
        </div>

        {/* Thành viên 2 */}
        <div id="muc-tieu">
          <Member2_Infographic />
        </div>

        {/* Thành viên 3 */}
        <div id="thoi-ky">
          <Member3_Timeline />
        </div>

        {/* Thành viên 4 */}
        <div id="nguyen-tac">
          <Member4_SplitScreen />
        </div>

        {/* Trắc nghiệm */}
        <Quiz />
      </main>

      <footer className="site-footer">
        <div className="container">
          <h2 className="footer-brand">Nhóm Sinh Viên Thực Hiện</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <p style={{ fontWeight: "bold" }}>Thành viên 1</p>
              <p className="footer-sub">Nguyễn Anh Hùng</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Thành viên 2</p>
              <p className="footer-sub">Bùi Bá Cường</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Thành viên 3</p>
              <p className="footer-sub">Nguyễn Hoàng Trường Duy</p>
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Thành viên 4</p>
              <p className="footer-sub">Lữ Bùi Quang Nhân</p>
            </div>
          </div>
          <p className="footer-sub" style={{ fontSize: "1rem" }}>
            Giảng viên hướng dẫn: <strong>Lê Minh Trí</strong>
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              opacity: 0.5,
            }}
          >
            <span style={{ fontSize: "0.8rem" }}>
              © 2026 Bản quyền thuộc về Nhóm môn học HCM202
            </span>
          </div>
        </div>
      </footer>
    </LightboxProvider>
  );
}

export default App;
