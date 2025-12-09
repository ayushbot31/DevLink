'use client';

import { useState } from 'react';
import { Portfolio, PersonalInfo, SocialLink, Skill, Project, Experience, Education } from '@/types/portfolio';
import PersonalInfoForm from './forms/PersonalInfoForm';
import SocialLinksForm from './forms/SocialLinksForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';

interface PortfolioFormProps {
  portfolio: Portfolio;
  onChange: (portfolio: Portfolio) => void;
}

export default function PortfolioForm({ portfolio, onChange }: PortfolioFormProps) {
  const updatePersonalInfo = (info: PersonalInfo) => {
    onChange({ ...portfolio, personalInfo: info });
  };

  const updateSocialLinks = (links: SocialLink[]) => {
    onChange({ ...portfolio, socialLinks: links });
  };

  const updateSkills = (skills: Skill[]) => {
    onChange({ ...portfolio, skills });
  };

  const updateProjects = (projects: Project[]) => {
    onChange({ ...portfolio, projects });
  };

  const updateExperience = (experience: Experience[]) => {
    onChange({ ...portfolio, experience });
  };

  const updateEducation = (education: Education[]) => {
    onChange({ ...portfolio, education });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <div className="space-y-8">
        <PersonalInfoForm
          personalInfo={portfolio.personalInfo}
          onChange={updatePersonalInfo}
        />
        
        <SocialLinksForm
          socialLinks={portfolio.socialLinks}
          onChange={updateSocialLinks}
        />
        
        <SkillsForm
          skills={portfolio.skills}
          onChange={updateSkills}
        />
        
        <ProjectsForm
          projects={portfolio.projects}
          onChange={updateProjects}
        />
        
        <ExperienceForm
          experience={portfolio.experience}
          onChange={updateExperience}
        />
        
        <EducationForm
          education={portfolio.education}
          onChange={updateEducation}
        />
      </div>
    </div>
  );
}

