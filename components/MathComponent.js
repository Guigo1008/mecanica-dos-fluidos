import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

export const MathComponent = ({ equation, className="", type="div" }) => {
  const html = katex.renderToString(equation, {
    throwOnError: false
  });

  if (type==="span") {
    return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  } else {
    return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }

};

