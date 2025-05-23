import React from 'react';

interface ProjectItem {
  text: string;
  href?: string;
}

interface Project {
  icon: string;
  title: string;
  items: ProjectItem[];
}

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const projects: Project[] = [
    {
      icon: 'uil uil-briefcase-alt',
      title: 'Internship',
      items: [
        { text: 'Backend Programmer at PT. Alfahuma Rekayasa Teknologi', href: 'https://www.linkedin.com/company/alfahuma/posts/?feedView=all' },
        { text: 'IT Backend Programmer at SchoolTech.Id', href: 'https://www.linkedin.com/company/schooltechid/posts/?feedView=all' },
      ],
    },
    {
      icon: 'uil uil-users-alt',
      title: 'Kursus',
      items: [
        { text: 'Web Development by MySkill.id' },
        { text: 'Full Stack by JagoFlutter.com' },
        { text: 'Mahir Laravel by ProrammerZamanNow.com' },
      ],
    },
    {
      icon: 'uil uil-award',
      title: 'Pendidikan',
      items: [{ text: 'S1 Teknik Informatika IPK 3.84' }],
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-box">
            <i className={project.icon}></i>
            <h3>{project.title}</h3>
            {project.items.map((item, i) => (
              <p key={i} className="project-item">
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                ) : (
                  item.text
                )}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;