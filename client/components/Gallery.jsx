import React from 'react';

const Gallery = () => (
  <div id="reviews-gallery">
    {[1, 1, 1, 1, 1, 1].map((img, i) => (
      <div className="reviews-gallery-img">
        <img src={`https://fec-aws-images.s3.us-east-2.amazonaws.com/images/img${i+9}.jpg`} alt="img" />
      </div>
    ))}

  </div>
);

export default Gallery;
