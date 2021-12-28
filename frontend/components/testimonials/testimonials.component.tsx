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
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-6'>
      {testimonials.map(({ student, exercise, feedback }, index) => (
        <div
          className='border border-gray-200 shadow-lg rounded-md p-3 mb-8'
          key={`testimonial-${index}`}
        >
          <p>{feedback}</p>
          <div className='mt-3'>
            <span>{`- @${student}`}</span>
            <span>{' on '}</span>
            <span>{exercise}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
