// SkillCloud.jsx
import React from "react";

interface Skill {
  name: string;
  level: 'primary' | 'secondary' | 'basic';
  x: number;
  y: number;
}

const skills: Skill[] = [
  // Primary (center-ish)
  { name: "Node.js", level: "primary", x: 85, y: 45 },
  { name: "React", level: "primary", x: 70, y: 15 },
  { name: "Next.js", level: "primary", x: 52, y: 50 },
  { name: "React Native", level: "primary", x: 80, y: 75 },
  { name: "Tailwind CSS", level: "primary", x: 27, y: 60  },
  { name: "JavaScript", level: "primary", x: 17, y: 21 },
  { name: "TypeScript", level: "primary", x: 27, y: 83 },
  { name: "Python", level: "primary", x: 50, y: 30 },

  // Secondary (middle ring)
  { name: "Kubernetes", level: "secondary", x: 85, y: 65 },
  { name: "Docker", level: "secondary", x: 70, y: 40 },
  { name: "Jenkins", level: "secondary", x: 50, y: 65 },
  { name: "AWS", level: "secondary", x: 32, y: 35 },
  { name: "DevOps", level: "secondary", x: 60 , y: 85 },
  { name: "Prometheus", level: "secondary", x: 70, y: 55 },
  { name: "System Administrator", level: "secondary", x: 20, y: 70 },
  { name: "GitOps", level: "secondary", x: 63, y: 23 },
  { name: "Spring Boot", level: "secondary", x: 45, y: 40 },
  { name: "PostgreSQL", level: "secondary", x: 50, y: 17 },
  { name: "Express", level: "secondary", x: 75, y: 30 },
  { name: "MongoDB", level: "secondary", x: 20, y: 45 },
  { name: "Redis", level: "secondary", x: 35, y: 25 },
  { name: "Flask", level: "secondary", x: 45, y: 75 },

  // Basic (outer ring)
  { name: "ArgoCD", level: "basic", x: 15, y: 35 },
  { name: "Java", level: "basic", x: 63, y: 70 },
  { name: "HTML", level: "basic", x: 30, y: 16 },
  { name: "Grafana", level: "basic", x: 55, y: 60 },
  { name: "CSS", level: "basic", x: 33, y: 51 },
];


const levelToClass: Record<Skill['level'], string> = {
  primary: "text-sm sm:text-lg lg:text-2xl font-bold text-orange-400",
  secondary: "text-xs sm:text-sm lg:text-base text-orange-200",
  basic: "text-[10px] sm:text-xs lg:text-sm text-white",
};

const SkillCloud: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`${levelToClass[skill.level]} absolute whitespace-nowrap transition-all duration-300 ease-in-out select-none`}
          style={{
            left: `${skill.x}%`,
            top: `${skill.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {skill.name}
        </span>
      ))}
    </div>
  );
};

export default SkillCloud;
