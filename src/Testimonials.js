import React from 'react';
import './Testimonials.css'; // Import CSS file for styling

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'medhnait',
      comment: 'I am extremely satisfied with the quality and design of the furniture I purchased from Yom Furniture. Highly recommended!',
    },
    {
      id: 2,
      name: 'mercy',
      comment: 'Yom Furniture has exceeded my expectations. Their customer service is top-notch, and their furniture is beautiful and durable.',
    },
    {
      id: 3,
      name: 'yoyo',
      comment: 'I love the unique and modern designs offered by Yom Furniture. The attention to detail is impeccable. Will definitely buy again!',
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <p className="testimonial-comment">{testimonial.comment}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;