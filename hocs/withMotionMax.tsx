import { domMax, LazyMotion } from 'framer-motion';
import React from 'react';

export function withMotionMax<T>(
  WrappedComponent: React.ComponentType<T>,
): typeof ComponentWithMotionMax {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithMotionMax: React.FC<T> = (props) => {
    return (
      <LazyMotion features={domMax} strict>
        <WrappedComponent {...props} />
      </LazyMotion>
    );
  };

  ComponentWithMotionMax.displayName = `withMotionMax(${displayName})`;

  return ComponentWithMotionMax;
}
