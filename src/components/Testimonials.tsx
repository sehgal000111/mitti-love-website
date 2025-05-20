
import React from 'react';

interface Testimonial {
  name: string;
  location: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    comment: "The water tastes amazingly fresh from these clay pots. My family has noticed a positive difference in digestion and overall health since we switched from plastic bottles.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    location: "Mumbai",
    comment: "I was skeptical at first, but the naturally cool water during summers has made me a believer! The affordable price point is just an added bonus.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    location: "Bangalore",
    comment: "These clay dispensers are not just eco-friendly but also add a beautiful aesthetic touch to my kitchen. The water has a pure, earthy taste that plastic can never provide.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="page-section container mx-auto px-4">
      <h2 className="section-title text-center mx-auto mb-12">What Our Customers Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <p className="text-muted-foreground italic mb-4">"{testimonial.comment}"</p>
            
            <div className="flex justify-between items-center">
              <span className="font-semibold text-earth-dark">{testimonial.name}</span>
              <span className="text-sm text-muted-foreground">{testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
