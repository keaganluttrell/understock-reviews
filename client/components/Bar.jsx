import React from 'react';
import Star from './Star';

const Bar = () => (
  <div className="RGB-bar-group">
    <div className="RGB-bar-bottom">
      <div className="RGB-bar-top" />
    </div>
    <Star />
    <div className="RGB-count">1,101</div>
  </div>
);

export default Bar;
