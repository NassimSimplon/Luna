import { FC } from "react";
import logo from "../assets/logo.svg";
type Props = object;

const Footer: FC<Props> = () => {
  return (
    <div className="page-footer">
      <div className="first-block">
        <div className="links">
          <a href="#">Home</a>
          <a href="#">Download</a>
          <a href="#">About Us</a>
          <a href="#">Work with us</a>
          <a href="#">FAQs</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="contact">
          <h1 className="sectionTitle">
            Contact <span> with us</span>
          </h1>
          <div className="icons">
            <img
              src="https://static.wixstatic.com/media/e1aa082f7c0747168d9cf43e77046142.png/v1/fill/w_55,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1aa082f7c0747168d9cf43e77046142.png"
              alt="icon"
            />
            <img
              src="https://static.wixstatic.com/media/45bce1d726f64f1999c49feae57f6298.png/v1/fill/w_55,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/45bce1d726f64f1999c49feae57f6298.png"
              alt="icon"
            />
            <img
              src="https://static.wixstatic.com/media/11062b_66167d61316d4665841f3397360d54a9~mv2.png/v1/fill/w_55,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_66167d61316d4665841f3397360d54a9~mv2.png"
              alt="icon"
            />
            <img
              src="https://static.wixstatic.com/media/aa0402eb9ba2430d9d0620b59556efca.png/v1/fill/w_55,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aa0402eb9ba2430d9d0620b59556efca.png"
              alt="icon"
            />
          </div>
        </div>
        <div className="store-icons">
          <img
            src="https://static.wixstatic.com/media/22c520_6563e544728949b3935931c225ef293a~mv2.png/v1/fill/w_199,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image%203.png"
            alt="apple"
          />
          <img
            src="https://static.wixstatic.com/media/22c520_0bed54d6ad754028a963e72a22e72332~mv2.png/v1/fill/w_199,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image%204.png"
            alt="android"
          />
        </div>
      </div>
      <div className="last-block">
      <img src={logo} alt="logo" />
        <h1 className="date">© 2022 by Luna Life Limited</h1>
      </div>
    </div>
  );
};

export default Footer;
