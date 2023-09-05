import { FC } from "react";

type Props = object;

const Intro: FC<Props> = () => {
  return (
    <div className="intro">
      <div className="content">
        <h1 className="title">
          Meet <span className="sub">Luna</span>
        </h1>
        <p>
          luna is an app that helps teens understand health and well-being
          topics that aren't always taught or talked about. <br /> <br /> It's a
          safe space for teens to learn new things, ask questions, and track how
          they feel.
          <br /> <br />
          Built by medical professionals and other teens across the UK, luna is
          here for you.
        </p>
      </div>
    </div>
  );
};

export default Intro;
