import React from 'react';
import Bar from './Bar';
import Star from './Star';

const Graph = () => (
  <div id="reviews-graph">
    <div id="reviews-graph-header">
      <div id="RGH-average">4.5</div>
      <div id="RGH-stars-count">
        <Star rating={4.5} />
        <div className="RGH-count">2,101 Reviews</div>
      </div>
    </div>
    <div id="reviews-graph-body">
      <Bar avg={50} rating={5} />
      <Bar avg={20} rating={4} />
      <Bar avg={15} rating={3} />
      <Bar avg={10} rating={2} />
      <Bar avg={5} rating={1} />
    </div>
  </div>
);

export default Graph;
