import React from 'react';

export interface IPortfolioTestimonial {
  student: string;
  exercise: string;
  feedback: string;
}

interface ITestimonials {
  testimonials: IPortfolioTestimonial[];
}

export default function Testimonials({ testimonials }: ITestimonials) {
  return (
    <div>
      {testimonials.map(({ student, exercise, feedback }, index) => (
        <div key={`testimonial-${index}`}>
          <span>{student}</span>
          <span>{exercise}</span>
          <span>{feedback}</span>
        </div>
      ))}
    </div>
  );
}
