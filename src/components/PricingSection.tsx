import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams and startups',
    features: [
      { text: 'Up to 5 team members', included: true },
      { text: '5GB storage', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'API access', included: false },
      { text: '24/7 support', included: false },
      { text: 'Custom integrations', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'For growing teams and businesses',
    features: [
      { text: 'Up to 20 team members', included: true },
      { text: '50GB storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'API access', included: true },
      { text: '24/7 support', included: true },
      { text: 'Custom integrations', included: false },
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      { text: 'Unlimited team members', included: true },
      { text: 'Unlimited storage', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'API access', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Custom integrations', included: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>
        
        {/* Pricing Toggle - Monthly/Annual */}
        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className="text-gray-600">Monthly</span>
          <button className="w-12 h-6 bg-emerald-600 rounded-full relative">
            <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
          </button>
          <span className="text-gray-600">Annual</span>
          <span className="text-sm text-emerald-600 font-semibold">Save 20%</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'Can I switch plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
              },
              {
                q: 'Is there a long-term contract?',
                a: 'No, all our plans are month-to-month or annual. You can cancel at any time.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes, we offer a 30-day money-back guarantee for all paid plans.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}