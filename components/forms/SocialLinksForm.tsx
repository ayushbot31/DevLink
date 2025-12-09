'use client';

import { SocialLink } from '@/types/portfolio';
import { FaPlus, FaTrash } from 'react-icons/fa';

interface SocialLinksFormProps {
  socialLinks: SocialLink[];
  onChange: (links: SocialLink[]) => void;
}

const commonPlatforms = ['GitHub', 'LinkedIn', 'Twitter', 'Instagram', 'Facebook', 'Website', 'Portfolio'];

export default function SocialLinksForm({ socialLinks, onChange }: SocialLinksFormProps) {
  const addLink = () => {
    onChange([...socialLinks, { platform: '', url: '' }]);
  };

  const removeLink = (index: number) => {
    onChange(socialLinks.filter((_, i) => i !== index));
  };

  const updateLink = (index: number, field: keyof SocialLink, value: string) => {
    const updated = [...socialLinks];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Social Links
        </h2>
        <button
          onClick={addLink}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <FaPlus /> Add Link
        </button>
      </div>
      <div className="space-y-4">
        {socialLinks.map((link, index) => (
          <div key={index} className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Platform
              </label>
              <select
                value={link.platform}
                onChange={(e) => updateLink(index, 'platform', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select platform</option>
                {commonPlatforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                URL
              </label>
              <input
                type="url"
                value={link.url}
                onChange={(e) => updateLink(index, 'url', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="https://..."
              />
            </div>
            <button
              onClick={() => removeLink(index)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <FaTrash />
            </button>
          </div>
        ))}
        {socialLinks.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No social links added yet. Click "Add Link" to get started.
          </p>
        )}
      </div>
    </div>
  );
}

