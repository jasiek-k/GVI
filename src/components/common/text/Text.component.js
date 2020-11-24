import React from 'react';
import './Text.styles.scss';

const Text = (children, ...props) => {
  return (
    <p className="common-text" props>{children}</p>
  )
};

export default Text;
