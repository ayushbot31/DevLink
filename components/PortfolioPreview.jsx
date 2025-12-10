'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const getSocialIcon = (platform) => {
  const lowerPlatform = platform.toLowerCase();
  if (lowerPlatform.includes('github')) return <FaGithub />;
  if (lowerPlatform.includes('linkedin')) return <FaLinkedin />;
  if (lowerPlatform.includes('twitter')) return <FaTwitter />;
  if (lowerPlatform.includes('instagram')) return <FaInstagram />;
  if (lowerPlatform.includes('facebook')) return <FaFacebook />;
  return <FaGlobe />;
};

export default function PortfolioPreview({ portfolio }) {
  const { personalInfo, socialLinks, skills, projects, experience, education } = portfolio;

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-600 to-primary-800 text-white p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {personalInfo.avatar && (
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          )}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {personalInfo.name || 'Your Name'}
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-4">
              {personalInfo.title || 'Your Title'}
            </p>
            <p className="text-primary-100 mb-4 max-w-2xl">
              {personalInfo.bio || 'Add your bio to get started'}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-primary-200">
                  <FaEnvelope /> {personalInfo.email}
                </a>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-2">
                  <FaPhone /> {personalInfo.phone}
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt /> {personalInfo.location}
                </div>
              )}
            </div>
            {socialLinks.length > 0 && (
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                    title={link.platform}
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="p-8 md:p-12 space-y-12">
        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        skill.level === 'expert' ? 'bg-green-500' :
                        skill.level === 'advanced' ? 'bg-blue-500' :
                        skill.level === 'intermediate' ? 'bg-yellow-500' :
                        'bg-gray-400'
                      }`}
                      style={{
                        width: skill.level === 'expert' ? '100%' :
                               skill.level === 'advanced' ? '75%' :
                               skill.level === 'intermediate' ? '50%' :
                               '25%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -{' '}
                    {exp.current
                      ? 'Present'
                      : exp.endDate
                      ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      : ''}
                    {exp.location && ` • ${exp.location}`}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-lg text-primary-600 dark:text-primary-400">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(edu.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} -{' '}
                    {edu.current
                      ? 'Present'
                      : edu.endDate
                      ? new Date(edu.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                      : ''}
                  </p>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 p-6 text-center text-gray-600 dark:text-gray-400">
        <p>Generated with DevLink - Personal Portfolio Website Generator</p>
      </footer>
    </div>
  );
}

