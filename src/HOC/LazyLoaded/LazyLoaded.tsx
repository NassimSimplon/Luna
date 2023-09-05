/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, lazy, Suspense, ComponentType } from "react";

const LazyLoad = (
  importComponent: () => Promise<{ default: ComponentType<any> }>
) => {
  const LazyLoadComponent: FC = (props) => {
    const LazyComponent = lazy(importComponent);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };

  return LazyLoadComponent;
};

export default LazyLoad;
