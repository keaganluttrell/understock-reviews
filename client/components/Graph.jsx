import React from 'react';
import Bar from './Bar';
import Star from './Star';

const Graph = () => (
  <div id="reviews-graph">
    <div id="reviews-graph-header">
      <div id="RGH-average">4.5</div>
      <div id="RGH-stars-count">
        <Star />
        <div className="RGH-count">2,101 Reviews</div>
      </div>
    </div>
    <div id="reviews-graph-body">
      <Bar />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  </div>
);

export default Graph;
