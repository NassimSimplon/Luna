import { FC } from "react";

type Props = object;

const DownloadLuna: FC<Props> = () => {
  return (
    <div className="downloadLuna">
      <img
        src="https://static.wixstatic.com/media/22c520_342527fc0d174ce1a90b21339e2c8d3f~mv2.jpg/v1/fill/w_952,h_462,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/22c520_342527fc0d174ce1a90b21339e2c8d3f~mv2.jpg"
        alt="girl"
      />

      <div className="download-block">
        <h1 className="sectionTitle">
          <span> Download</span> luna
        </h1>
        <p className="download-text">
          Learn, ask, grow and be a part of an authentic teen community{" "}
        </p>
        <div className="download-footer">
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

export default DownloadLuna;
