import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export const MathComponent = ({ equation }) => {
  const html = katex.renderToString(equation, {
    throwOnError: false
  });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

