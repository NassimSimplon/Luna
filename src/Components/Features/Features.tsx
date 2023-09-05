import { FC } from "react";
import { useGetPostsQuery } from "../../Services/Features";
import { FeaturesType } from "../../Utils/Types";
import SplitToFour from "../../Layout/SplitToFour";

type Props = object;

const Features: FC<Props> = () => {
  const { data, isLoading } = useGetPostsQuery({});
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <SplitToFour>
      {data?.map((el: FeaturesType) => (
        <div className="featureCard" key={el.id}>
          <h1 className="title">{el.title}</h1>
          <p className="description-text">{el.description}</p>
          <button className="btn">{el.btn}</button>
        </div>
      ))}
    </SplitToFour>
  );
};

export default Features;
