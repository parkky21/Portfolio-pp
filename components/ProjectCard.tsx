
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="relative group rounded-2xl overflow-hidden border border-gray-100 bg-white p-4 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" title={project.title}>
      <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
        <img src={project.img} alt={project.title} className="object-cover w-full h-full" onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/640x400?text=Project"; }} />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{project.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">{project.date}</div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <a href={`https://github.com/parkky21/${project.id}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`View project ${project.title}`}>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg max-w-xs text-center">
                  <div className="text-sm font-medium">Quick preview</div>
                  <p className="mt-2 text-xs text-gray-600">Click to view project or visit the repository.</p>
                  <div className="mt-4 flex gap-2 justify-center">
                      <span className="text-xs px-3 py-2 border rounded-full bg-white">Repo</span>
                      <span className="text-xs px-3 py-2 border rounded-full bg-white">Demo</span>
                  </div>
              </div>
          </div>
      </a>
    </article>
  );
};

export default ProjectCard;