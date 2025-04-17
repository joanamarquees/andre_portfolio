// SkillCloud.jsx
import React from "react";

interface Skill {
  name: string;
  level: 'primary' | 'secondary' | 'basic';
}

const skills: Skill[] = [
  // Primary/Favorite skills
  { name: "Node.js", level: "primary" },
  { name: "Next.js", level: "primary" },
  { name: "React", level: "primary" },
  { name: "React Native", level: "primary" },
  { name: "Tailwind CSS", level: "primary" },
  { name: "JavaScript", level: "primary" },
  { name: "TypeScript", level: "primary" },
  { name: "Python", level: "primary" },

  // Secondary skills
  { name: "Kubernetes", level: "secondary" },
  { name: "Docker", level: "secondary" },
  { name: "Jenkins", level: "secondary" },
  { name: "AWS", level: "secondary" },
  { name: "DevOps", level: "secondary" },
  { name: "System Administrator", level: "secondary" },
  { name: "ArgoCD", level: "secondary" },
  { name: "GitOps", level: "secondary" },
  { name: "Prometheus", level: "secondary" },
  { name: "Spring Boot", level: "secondary" },
  { name: "PostgreSQL", level: "secondary" },
  { name: "MongoDB", level: "secondary" },
  { name: "Redis", level: "secondary" },
  { name: "Flask", level: "secondary" },
  { name: "Express", level: "secondary" },

  // Basic skills
  { name: "Java", level: "basic" },
  { name: "HTML", level: "basic" },
  { name: "Grafana", level: "basic" },
  { name: "CSS", level: "basic" }
];

const levelToClass: Record<Skill['level'], string> = {
  primary: "text-4xl font-bold",
  secondary: "text-2xl",
  basic: "text-base",
};

const SkillCloud: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center items-center bg-black text-white">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`${levelToClass[skill.level]} text-orange-400 hover:text-orange-200 transition-all`}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default SkillCloud;
