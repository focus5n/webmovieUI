function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="sec aboutus">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            corrupti quibusdam in! Dignissimos sapiente ipsam doloremque iusto
            amet repudiandae reprehenderit totam sunt sit veritatis consequatur,
            accusamus explicabo nobis eum eius!
          </p>
          <ul className="link">
            <li>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fab fa-twitter"></em>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/?hl=ko"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fab fa-instagram"></em>
              </a>
            </li>
            <li>
              <a
                href="https://ko-kr.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <em className="fab fa-facebook-square"></em>
              </a>
            </li>
          </ul>
        </div>
        <div className="blank"></div>

        <div className="sec contact">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <span>
                서울특별시 금천구 가산동 371-28
                <br />
                피닉스밸리, 923단지 19334호
              </span>
            </li>
            <li>
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              <p>
                <a href="tel:01920492323">+1 019 2049 2323</a>
              </p>
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <p>
                <a href="mailto:supererrrr@naver.com">neveremail@naver.cox</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
