import Link from 'next/link';

export const metadata = {
  title: 'Projects',
  description: 'Explore my recent software development projects.',
};

const projects = [
  {
    title: 'Modern VPN Windows App',
    description: 'A cutting-edge VPN application for Windows, built with WPF and C# using the MVVM pattern. This project demonstrates my proficiency in desktop application development and my understanding of secure networking principles.',
    tech: ['WPF', 'C#', 'MVVM', 'Networking'],
    link: 'https://github.com/mrmorgan-i/vpn-adventure',
  },
  {
    title: 'Contacts Management System',
    description: 'A robust contacts application leveraging WPF, C#, and SQLite. This project showcases my skills in creating intuitive user interfaces and implementing efficient data management solutions.',
    tech: ['WPF', 'C#', 'SQLite', 'CRUD Operations'],
    link: 'https://github.com/mrmorgan-i/contactswsqlite-fun',
  },
  {
    title: 'AI-Powered Landmark Predictor',
    description: 'An innovative application that utilizes Microsoft Azure\'s Custom Vision to predict landmarks from user-uploaded images. This project highlights my expertise in integrating AI and machine learning technologies into practical applications.',
    tech: ['WPF', 'C#', 'Azure Custom Vision', 'AI/ML'],
    link: 'https://github.com/mrmorgan-i/customvision-adventure',
  },
  {
    title: 'The Skincare Blend E-commerce Platform',
    description: 'A full-fledged e-commerce website built with modern web technologies. This project demonstrates my full-stack development capabilities, from responsive front-end design to robust back-end implementation and database management. Source code available for review from potential employers/programming enthusiasts upon request. Kindly use the contact me interface',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'NeonDB (Postgres)', 'Algolia'],
    link: 'https://theskincareblend.store',
  },
  {
    title: 'Newman Coding Club Info Website',
    description: 'A single-page website built with modern web technologies. This project was completed in a weekend! It highlights my strength in delivering swift solutions that are functional.',
    tech: ['Next.js', 'Typescript', 'Tailwind CSS', 'Node.js', 'Framer-motion', 'Resend API'],
    link: 'https://newmancoding.club',
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Projects</h1>
      <p className="mb-4 text-neutral-800 dark:text-neutral-200">
        Here are some of my recent projects that showcase my skills and passion for software development. Each project represents a unique challenge and demonstrates my ability to work with various technologies and frameworks.
      </p>
      <div className="space-y-8 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {tech}
                </span>
              ))}
            </div>
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">
              View Project &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
