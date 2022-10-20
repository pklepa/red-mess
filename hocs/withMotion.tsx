import { domAnimation, LazyMotion } from 'framer-motion';
import React from 'react';

export function withMotion<T>(
  WrappedComponent: React.ComponentType<T>,
): typeof ComponentWithMotion {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithMotion: React.FC<T> = (props) => {
    return (
      <LazyMotion features={domAnimation} strict>
        <WrappedComponent {...props} />
      </LazyMotion>
    );
  };

  ComponentWithMotion.displayName = `withMotion(${displayName})`;

  return ComponentWithMotion;
}
