import { Users, Building2 } from "lucide-react";

export default function Member2_Infographic() {
  return (
    <section className="section infographic-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Hệ Thống Mục Tiêu & Động Lực</h2>
          <p className="section-subtitle">
            Hồ Chí Minh chỉ rõ{" "}
            <span className="red-text font-semibold">
              Tự do và Hạnh phúc của Nhân dân
            </span>{" "}
            là mục tiêu tối thượng. Từ đó phân nhánh thành các mục tiêu cụ thể
            và khai thác các nguồn động lực to lớn.
          </p>
        </div>

        <div className="info-layout">
          {/* Cột Trái: Mục Tiêu */}
          <div data-aos="fade-right">
            <h3 className="info-column-title">Hệ Thống Mục Tiêu</h3>

            <div className="info-card">
              <div className="info-card-num">01</div>
              <div>
                <h4>Mục tiêu Chính trị</h4>
                <p>
                  Xây dựng chế độ dân chủ nhân dân. Mở rộng dân chủ sâu rộng,
                  đảm bảo quyền lực thực sự thuộc về quảng đại quần chúng lao
                  động.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-num">02</div>
              <div>
                <h4>Mục tiêu Kinh tế</h4>
                <p>
                  Chuyển đổi từ nền tảng kinh tế nông nghiệp lạc hậu sang công
                  nghiệp & nông nghiệp hiện đại. Xây dựng nền tảng vật chất kỹ
                  thuật vững chắc.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-num">03</div>
              <div>
                <h4>Mục tiêu Văn hóa</h4>
                <p>
                  Xây dựng nền văn hóa mang tính Dân tộc, Khoa học và Đại chúng.
                  Con người XHCN phải có trí tuệ, lối sống lành mạnh, tự trọng.
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-card-num">04</div>
              <div>
                <h4>Mục tiêu Quan hệ Xã hội</h4>
                <p>
                  Đảm bảo công bằng, dân chủ, văn minh. Đẩy lùi bất công bóc
                  lột, xóa bỏ khoảng cách phân hóa giàu nghèo cực đoan.
                </p>
              </div>
            </div>
          </div>

          {/* Cột Phải: Động Lực (Kết hợp khối trung tâm) */}
          <div data-aos="fade-left">
            <h3
              className="info-column-title"
              style={{ color: "var(--gold-600)" }}
            >
              Hệ Thống Động Lực
            </h3>

            <div className="info-center-block" style={{ marginBottom: "2rem" }}>
              <h3 className="font-playfair">"Hạnh Phúc Nhân Dân"</h3>
              <p>
                Mục tiêu tối thượng và cũng là điểm xuất phát của mọi động lực.
                Khi nhân dân thấy được lợi ích thiết thân, sức mạnh vượt mọi rào
                cản sẽ được sinh ra.
              </p>
            </div>

            <div
              className="info-card"
              style={{ borderColor: "var(--gold-300)" }}
            >
              <div
                className="info-card-num"
                style={{
                  background: "var(--gold-500)",
                  color: "var(--red-800)",
                }}
              >
                <Users size={18} />
              </div>
              <div>
                <h4 style={{ color: "var(--gold-600)" }}>
                  Động lực Con người (Lợi ích thiết thân)
                </h4>
                <p>
                  Gắn liền nghĩa vụ với quyền lợi, cống hiến với thụ hưởng. Phát
                  huy quyền làm chủ thực sự và khơi dậy đạo đức cách mạng của
                  mỗi cá nhân.
                </p>
              </div>
            </div>

            <div
              className="info-card"
              style={{ borderColor: "var(--gold-300)" }}
            >
              <div
                className="info-card-num"
                style={{
                  background: "var(--gold-500)",
                  color: "var(--red-800)",
                }}
              >
                <Building2 size={18} />
              </div>
              <div>
                <h4 style={{ color: "var(--gold-600)" }}>
                  Động lực Tổ chức & Quản lý
                </h4>
                <p>
                  Sự lãnh đạo đúng đắn của Đảng, hiệu lực quản lý sắc bén của
                  Nhà nước kết hợp với sức mạnh của các đoàn thể chính trị.
                </p>
              </div>
            </div>

            <div
              className="info-card"
              style={{ borderColor: "var(--gold-300)" }}
            >
              <div
                className="info-card-num"
                style={{
                  background: "var(--gold-500)",
                  color: "var(--red-800)",
                }}
              >
                <HeartHandshake size={18} />
              </div>
              <div>
                <h4 style={{ color: "var(--gold-600)" }}>
                  Sức mạnh Đại đoàn kết toàn dân
                </h4>
                <p>
                  Khối liên minh công - nông - trí thức là nền tảng. Đoàn kết
                  mọi giai tầng yêu nước, không phân biệt tôn giáo, tạo thành
                  sức mạnh vô song.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick component shim since we didn't import HeartHandshake at the top
import { HeartHandshake } from "lucide-react";
