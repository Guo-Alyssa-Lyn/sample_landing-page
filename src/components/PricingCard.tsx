import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
}

export default function PricingCard({ name, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <div className={`relative p-8 rounded-2xl ${
      highlighted 
        ? 'bg-emerald-600 text-white shadow-xl scale-105 my-8 md:my-0' 
        : 'bg-white text-gray-900 shadow-sm'
    }`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-emerald-200 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className={highlighted ? 'text-emerald-100' : 'text-gray-500'}>/month</span>}
        </div>
        <p className={`mb-6 ${highlighted ? 'text-emerald-100' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-5 h-5 mr-3 ${
              highlighted 
                ? feature.included ? 'text-emerald-200' : 'text-emerald-400/50' 
                : feature.included ? 'text-emerald-600' : 'text-gray-300'
            }`} />
            <span className={`${
              highlighted 
                ? feature.included ? 'text-white' : 'text-emerald-100/70' 
                : feature.included ? 'text-gray-900' : 'text-gray-400'
            }`}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-lg font-semibold transition duration-200 ${
        highlighted
          ? 'bg-white text-emerald-600 hover:bg-emerald-50'
          : 'bg-emerald-600 text-white hover:bg-emerald-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}