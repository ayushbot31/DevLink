'use client';

import { useState } from 'react';
import PortfolioForm from '@/components/PortfolioForm';
import PortfolioPreview from '@/components/PortfolioPreview';
import { Portfolio } from '@/types/portfolio';

const defaultPortfolio: Portfolio = {
  personalInfo: {
    name: '',
    title: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    avatar: '',
  },
  socialLinks: [],
  skills: [],
  projects: [],
  experience: [],
  education: [],
  theme: {
    primaryColor: '#0ea5e9',
    secondaryColor: '#0369a1',
  },
};

export default function Home() {
  const [portfolio, setPortfolio] = useState<Portfolio>(defaultPortfolio);
  const [showPreview, setShowPreview] = useState(false);

  const handlePortfolioChange = (updatedPortfolio: Portfolio) => {
    setPortfolio(updatedPortfolio);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
            DevLink
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Personal Portfolio Website Generator
          </p>
        </div>

        <div className="flex gap-4 mb-4 justify-center">
          <button
            onClick={() => setShowPreview(false)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              !showPreview
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Edit Portfolio
          </button>
          <button
            onClick={() => setShowPreview(true)}
            className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
              showPreview
                ? 'bg-primary-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Preview
          </button>
        </div>

        {showPreview ? (
          <PortfolioPreview portfolio={portfolio} />
        ) : (
          <PortfolioForm
            portfolio={portfolio}
            onChange={handlePortfolioChange}
          />
        )}
      </div>
    </main>
  );
}

