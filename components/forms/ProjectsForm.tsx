'use client';

import { useRef, useState } from 'react';
import { Project } from '@/types/portfolio';
import { FaPlus, FaTrash } from 'react-icons/fa';

interface ProjectsFormProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

export default function ProjectsForm({ projects, onChange }: ProjectsFormProps) {
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});
  const [uploadMethods, setUploadMethods] = useState<{ [key: string]: 'upload' | 'url' }>({});
  const addProject = () => {
    onChange([
      ...projects,
      {
        id: Date.now().toString(),
        title: '',
        description: '',
        technologies: [],
        imageUrl: '',
        liveUrl: '',
        githubUrl: '',
      },
    ]);
  };

  const removeProject = (id: string) => {
    onChange(projects.filter((p) => p.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    onChange(
      projects.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const addTechnology = (projectId: string, tech: string) => {
    if (!tech.trim()) return;
    const project = projects.find((p) => p.id === projectId);
    if (project && !project.technologies.includes(tech.trim())) {
      updateProject(projectId, 'technologies', [...project.technologies, tech.trim()]);
    }
  };

  const removeTechnology = (projectId: string, tech: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      updateProject(
        projectId,
        'technologies',
        project.technologies.filter((t) => t !== tech)
      );
    }
  };

  const handleFileUpload = (projectId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        updateProject(projectId, 'imageUrl', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getUploadMethod = (projectId: string): 'upload' | 'url' => {
    return uploadMethods[projectId] || 'upload';
  };

  const setUploadMethod = (projectId: string, method: 'upload' | 'url') => {
    setUploadMethods({ ...uploadMethods, [projectId]: method });
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Projects
        </h2>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <FaPlus /> Add Project
        </button>
      </div>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Project {projects.indexOf(project) + 1}
              </h3>
              <button
                onClick={() => removeProject(project.id)}
                className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FaTrash />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Project Name"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description *
                </label>
                <textarea
                  value={project.description}
                  onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Describe your project..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Project Image
                </label>
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setUploadMethod(project.id, 'upload')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      getUploadMethod(project.id) === 'upload'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    Upload Image
                  </button>
                  <button
                    type="button"
                    onClick={() => setUploadMethod(project.id, 'url')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      getUploadMethod(project.id) === 'url'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    Use URL
                  </button>
                </div>
                
                {getUploadMethod(project.id) === 'upload' ? (
                  <div>
                    <input
                      ref={(el) => (fileInputRefs.current[project.id] = el)}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(project.id, e)}
                      className="hidden"
                    />
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => fileInputRefs.current[project.id]?.click()}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Choose Image
                      </button>
                      {project.imageUrl && project.imageUrl.startsWith('data:') && (
                        <div className="flex items-center gap-2">
                          <img
                            src={project.imageUrl}
                            alt="Preview"
                            className="w-24 h-24 rounded-lg object-cover border-2 border-gray-300 dark:border-gray-600"
                          />
                          <button
                            type="button"
                            onClick={() => updateProject(project.id, 'imageUrl', '')}
                            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      Supported formats: JPG, PNG, GIF (Max 5MB)
                    </p>
                  </div>
                ) : (
                  <div>
                    <input
                      type="url"
                      value={project.imageUrl && !project.imageUrl.startsWith('data:') ? project.imageUrl : ''}
                      onChange={(e) => updateProject(project.id, 'imageUrl', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="https://..."
                    />
                    {project.imageUrl && !project.imageUrl.startsWith('data:') && (
                      <div className="mt-2">
                        <img
                          src={project.imageUrl}
                          alt="Preview"
                          className="w-24 h-24 rounded-lg object-cover border-2 border-gray-300 dark:border-gray-600"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Live URL
                </label>
                <input
                  type="url"
                  value={project.liveUrl || ''}
                  onChange={(e) => updateProject(project.id, 'liveUrl', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  GitHub URL
                </label>
                <input
                  type="url"
                  value={project.githubUrl || ''}
                  onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="https://github.com/..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Technologies
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                    >
                      {tech}
                      <button
                        onClick={() => removeTechnology(project.id, tech)}
                        className="hover:text-red-600"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <input
                  type="text"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTechnology(project.id, e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Type technology and press Enter"
                />
              </div>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">
            No projects added yet. Click "Add Project" to get started.
          </p>
        )}
      </div>
    </div>
  );
}

