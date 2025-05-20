
import React from 'react';
import { Droplet, Leaf, TreeDeciduous, Earth, HandHeart } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Droplet className="h-8 w-8 text-black" />,
    title: "Naturally Cools Water",
    description: "Our clay pots keep water naturally cool without refrigeration, perfect for hot summer days."
  },
  {
    icon: <Leaf className="h-8 w-8 text-black" />,
    title: "Alkaline Properties",
    description: "Clay naturally balances the pH level of water, making it more alkaline and healthier for your body."
  },
  {
    icon: <TreeDeciduous className="h-8 w-8 text-black" />,
    title: "Enhances Digestion",
    description: "Drinking clay-stored water helps improve metabolism and aids in better digestion."
  },
  {
    icon: <Earth className="h-8 w-8 text-black" />,
    title: "No Harmful Chemicals",
    description: "Unlike plastic containers, our clay pots don't release microplastics or harmful chemicals."
  },
  {
    icon: <HandHeart className="h-8 w-8 text-black" />,
    title: "Keeps Minerals Intact",
    description: "Clay preserves the natural minerals in water that are essential for your health."
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="page-section bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto mb-12">Why Choose Clay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="mb-4 bg-sketch-light p-4 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-sketch-dark">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="wavy-separator mt-16"></div>
    </section>
  );
};

export default BenefitsSection;
