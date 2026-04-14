import {
  ShieldCheck,
  TrendingUp,
  HandHeart,
  Users,
  BookOpen,
  SunMedium,
} from "lucide-react";

export default function Member1_Bento() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Quan Niệm & Đặc Trưng Cơ Bản</h2>
          <p className="section-subtitle">
            Hệ thống lý luận của Chủ tịch Hồ Chí Minh về bản chất của{" "}
            <span className="red-text font-semibold">Chủ Nghĩa Xã Hội</span>,
            được tiếp cận từ nhiều phương diện khác nhau.
          </p>
        </div>

        <div className="bento-grid">
          {/* Chính trị - Large Span */}
          <div
            className="bento-item span-8"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="flip-inner">
              <div className="flip-front">
                <div className="bento-icon red">
                  <ShieldCheck size={28} />
                </div>
                <h3>Chính trị: Nhân dân làm chủ</h3>
                <p>
                  Chế độ chính trị do nhân dân làm chủ, Nhà nước là của dân, do
                  dân, vì dân. Mọi quyền lực trong xã hội và Nhà nước đều thuộc
                  về nhân dân dưới sự lãnh đạo của Đảng Cộng sản.
                </p>
                <div className="hover-hint">
                  Cảm ứng lật 3D <SunMedium size={14} />
                </div>
              </div>
              <div className="flip-back">
                <h4>Quần chúng & Quyền lực</h4>
                <p>
                  Hồ Chí Minh khẳng định: "Nước ta là nước dân chủ, địa vị cao
                  nhất là dân, vì dân là chủ". Hệ thống chính trị XHCN phải đảm
                  bảo phát huy cao độ quyền làm chủ của nhân dân trên mọi lĩnh
                  vực của đời sống. Dân chủ không chỉ là mục tiêu mà còn là động
                  lực của CNXH.
                </p>
                <p className="quote-attr">- Hồ Chí Minh toàn tập, Tập 8</p>
              </div>
            </div>
          </div>

          {/* Kinh tế - Tall Span */}
          <div
            className="bento-item span-4 tall"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flip-inner">
              <div
                className="flip-front"
                style={{ justifyContent: "flex-start", paddingTop: "3rem" }}
              >
                <div className="bento-icon gold">
                  <TrendingUp size={28} />
                </div>
                <h3>Kinh tế: Hiện đại & Năng suất</h3>
                <p>
                  Nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện
                  đại và chế độ công hữu về các tư liệu sản xuất chủ yếu. Mục
                  tiêu tuyệt đối là không ngừng cải thiện đời sống vật chất của
                  nhân dân lao động.
                </p>
                <div className="hover-hint">
                  Cảm ứng lật 3D <SunMedium size={14} />
                </div>
              </div>
              <div
                className="flip-back"
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold-600), var(--gold-400))",
                  color: "var(--text-primary)",
                }}
              >
                <h4 style={{ color: "var(--red-700)" }}>
                  Cơ Sở Vật Chất của CNXH
                </h4>
                <p style={{ color: "var(--text-secondary)", fontWeight: 500 }}>
                  Theo Bác, "Chủ nghĩa xã hội là cốt làm cho dân giàu, nước
                  mạnh". Để có CNXH, phải có một nền công nghiệp và nông nghiệp
                  hiện đại, khoa học kỹ thuật tiên tiến. Không thể có CNXH trên
                  một nền tảng kinh tế nghèo nàn, lạc hậu. Tăng năng suất lao
                  động là chìa khóa then chốt.
                </p>
                <p
                  className="quote-attr"
                  style={{ color: "var(--text-secondary)" }}
                >
                  - Tư tưởng lớn về Kinh tế học
                </p>
              </div>
            </div>
          </div>

          {/* Đạo đức */}
          <div
            className="bento-item span-4"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="flip-inner">
              <div className="flip-front">
                <div className="bento-icon green">
                  <HandHeart size={28} />
                </div>
                <h3>Phương diện Đạo đức</h3>
                <p>
                  Giải phóng con người khỏi ách áp bức, bất công. Xã hội không
                  còn hiện tượng người bóc lột người. Đề cao tình đồng chí,
                  nghĩa đồng bào và chủ nghĩa nhân đạo cộng sản.
                </p>
                <div className="hover-hint">
                  Cảm ứng lật 3D <SunMedium size={14} />
                </div>
              </div>
              <div
                className="flip-back"
                style={{
                  background: "linear-gradient(135deg, #2B8A3E, #40C057)",
                }}
              >
                <h4 style={{ color: "white" }}>Chủ Nghĩa Nhân Đạo Cao Cả</h4>
                <p>
                  CNXH là sự xóa bỏ triệt để bóc lột, bất công, mang lại tự do,
                  hạnh phúc thực sự cho con người. Một xã hội coi trọng phẩm
                  giá, nơi con người được phát triển toàn diện cả về thể chất
                  lẫn tinh thần.
                </p>
              </div>
            </div>
          </div>

          {/* Văn hóa */}
          <div
            className="bento-item span-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="flip-inner">
              <div className="flip-front">
                <div className="bento-icon blue">
                  <BookOpen size={28} />
                </div>
                <h3>Phương diện Văn hóa</h3>
                <p>
                  Phát triển nền văn hóa tiên tiến, đậm đà bản sắc dân tộc. Nâng
                  cao trình độ học vấn, khoa học công nghệ, phát huy trí tuệ con
                  người mới.
                </p>
                <div className="hover-hint">
                  Cảm ứng lật 3D <SunMedium size={14} />
                </div>
              </div>
              <div
                className="flip-back"
                style={{
                  background: "linear-gradient(135deg, #1971C2, #339AF0)",
                }}
              >
                <h4 style={{ color: "white" }}>Văn Hóa Soi Đường</h4>
                <p>
                  "Văn hóa nghệ thuật cũng là một mặt trận". Văn hóa phải thấm
                  sâu vào mọi lĩnh vực của đời sống, tạo ra nếp sống mới, thói
                  quen mới tốt đẹp, đẩy lùi những hủ tục lạc hậu, mê tín dị
                  đoan.
                </p>
              </div>
            </div>
          </div>

          {/* Chủ thể (Vĩ mô) */}
          <div
            className="bento-item span-12"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flip-inner">
              <div
                className="flip-front"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <div
                  className="bento-icon red"
                  style={{
                    width: "80px",
                    height: "80px",
                    flexShrink: 0,
                    marginBottom: 0,
                  }}
                >
                  <Users size={40} />
                </div>
                <div>
                  <h3>Chủ Thể Của Chủ Nghĩa Xã Hội</h3>
                  <p style={{ maxWidth: "800px" }}>
                    Công cuộc xây dựng CNXH là{" "}
                    <strong>sự nghiệp của toàn dân</strong> do Đảng Cộng sản
                    lãnh đạo. Nhân dân không chỉ là người thụ hưởng mà trước hết
                    phải là người kiến tạo, bằng mồ hôi, trí tuệ và sự hy sinh
                    của chính mình. Sự lãnh đạo của Đảng là nhân tố quyết định
                    mọi thắng lợi.
                  </p>
                </div>
              </div>
              <div
                className="flip-back"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "2rem",
                  justifyContent: "flex-start",
                  padding: "2rem 4rem",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
                    "Sự nghiệp vĩ đại của quần chúng"
                  </h4>
                  <p style={{ fontSize: "1.1rem", maxWidth: "800px" }}>
                    Không có trí tuệ và sức mạnh của quần chúng nhân dân thì
                    không thể có Chủ nghĩa Xã hội. Bác Hồ luôn nhấn mạnh: "Cách
                    mạng là việc chung của cả dân chúng chứ không phải việc một
                    hai người".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
