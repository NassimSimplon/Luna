import { FC } from "react";
import logo from "../../assets/logo.svg";
type Props = object;

const Description: FC<Props> = () => {
  return (
    <div className="description">
      <div className="box">
        <div className="content">
          <img
            src="https://static.wixstatic.com/media/22c520_28486eb255584d59960f3073214df801~mv2.png/v1/fill/w_174,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2034062%20(5).png"
            alt="phone"
          />
          <div className="text-content">
            <img className="logo" src={logo} alt="logo" />
            <p>
              Being a teenager can be <br /> complicated. <br />
              It doesn’t have to be.
            </p>
          </div>
          <img
            className="right-phone"
            src="https://static.wixstatic.com/media/22c520_d3d51e1d4b6d451a936d861827142337~mv2.png/v1/fill/w_167,h_341,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2034062%20(3).png"
            alt="phone"
          />
        </div>
        <div className="footer">
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
    </div>
  );
};

export default Description;
