import React from "react";
import LazyLoad from "../../HOC/LazyLoaded/LazyLoaded";
import icon from "../../assets/download.svg";
//Components
const Description = LazyLoad(() => import("../../Components/Description"));
const Intro = LazyLoad(() => import("../../Components/Intro"));
const Features = LazyLoad(() => import("../../Components/Features"));
const DownloadLuna = LazyLoad(() => import("../../Components/DownloadLuna"));

type Props = object;

const Home: React.FC<Props> = () => {
  return (
    <div className="home">
      <div className="empty" style={{ width: "100%", height: "80px" }} />
      <Description />
      <Intro />
      <h1 className="sectionTitle">
        luna's <span> features</span>
      </h1>
      <Features />
      <DownloadLuna />
      <button className="download-btn">
        <img src={icon} alt="logo" />
      </button>
    </div>
  );
};

export default Home;
