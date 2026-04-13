

export default function Member4_SplitScreen() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Thành viên 4</span>
          <h2 className="section-title">Nguyên Tắc & Biện Pháp</h2>
          <p className="section-subtitle">
            Phương châm <strong className="gold-text" style={{ textShadow: '0 0 10px rgba(255,223,0,0.5)' }}>"Xây đi đôi với Chống"</strong> là triết lý thực tiễn sâu sắc của Hồ Chí Minh nhằm bảo vệ và thúc đẩy những thành quả của quá trình quá độ. Rê chuột vào từng khu vực để xem chi tiết.
          </p>
        </div>

        <div className="split-container" data-aos="fade-up" data-aos-delay="200">
          
          {/* Panel Xây */}
          <div className="split-panel panel-xay">
            <h3 className="split-label">XÂY ✨</h3>
            <div className="split-details">
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', opacity: 0.9, color: 'var(--text-secondary)' }}>
                "Tiến hành xây dựng những giá trị mới, tích cực, vừa làm nền tảng vững chắc, vừa là định hướng cho sự phát triển bền vững."
              </p>
              
              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Giữ vững Độc lập Dân tộc gắn liền với CNXH</h4>
                  <p>Sợi chỉ đỏ xuyên suốt con đường cách mạng. Không có độc lập dân tộc thì không có tiền đề xây dựng CNXH, và ngược lại, xây CNXH là để giữ vững độc lập thực sự.</p>
                </div>
              </div>

              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Dựa trên nền tảng Chủ nghĩa Mác-Lênin</h4>
                  <p>Lấy Chủ nghĩa Mác - Lênin làm "kim chỉ nam". Kế thừa linh hoạt, sáng tạo, không được rập khuôn giáo điều mà phải áp dụng vào thực tiễn Việt Nam.</p>
                </div>
              </div>

              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Đoàn kết quốc tế (Tranh thủ ngoại lực)</h4>
                  <p>Kết hợp chặt chẽ sức mạnh cực kì to lớn của dân tộc với sức mạnh thời đại. Đoàn kết với các lực lượng tiến bộ, yêu chuộng hòa bình toàn cầu.</p>
                </div>
              </div>

              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Dần dần, từng bước, từ thấp đến cao</h4>
                  <p>Bác răn dạy không được nôn nóng, chủ quan, đốt cháy giai đoạn. Phải tiến hành thận trọng, làm đến đâu chắc đến đó.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Panel Chống */}
          <div className="split-panel panel-chong">
            <h3 className="split-label">CHỐNG 🔥</h3>
            <div className="split-details">
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', opacity: 0.9, color: 'rgba(255,255,255,0.8)' }}>
                "Nhổ cỏ dại, kiên quyết loại trừ những thói tật suy thoái, những 'giặc nội xâm' tàn phá thành quả cách mạng từ bên trong."
              </p>

              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Chống Tham ô, Biển thủ</h4>
                  <p>Bác coi tham ô là hành động "ăn cắp của công, làm của tư", là một tội ác tày trời đối với nhân dân, với bộ đội. Phải trừng trị thích đáng bất kể người đó là ai.</p>
                </div>
              </div>

              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Chống Lãng phí nghiêm trọng</h4>
                  <p>Lãng phí thời gian, tiền bạc, tài sản của dân cũng có tội như tham ô. Bác luôn tự mình làm gương về sự cần kiệm liêm chính để quần chúng noi theo.</p>
                </div>
              </div>

              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Chống bệnh Quan liêu, Xa rời quần chúng</h4>
                  <p>Chống thái độ cửa quyền, hách dịch, mệnh lệnh hành chính, "đứng trên đầu nhân dân". Cán bộ là công bộc chứ không phải "quan cách mạng".</p>
                </div>
              </div>

              <div className="split-item">
                <div className="split-bullet"></div>
                <div>
                  <h4>Chống bảo thủ, Vô kỷ luật</h4>
                  <p>Phải dẹp bỏ ngay sự cá nhân chủ nghĩa, thói quen làm việc vô kỷ luật tự do, bảo thủ, chống hiện tượng "phép vua thua lệ làng" cực đoan.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
