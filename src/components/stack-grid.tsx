import { 
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiFlask,
  SiOpencv,
  SiTensorflow,
  SiCloudflare,
} from "react-icons/si";

const tools = [
  { name: "Node.js", type: "Dev tool", icon: <SiNodedotjs className="text-2xl" /> },
  { name: "Next.js", type: "Dev tool", icon: <SiNextdotjs className="text-2xl" /> },
  { name: "React", type: "Dev tool", icon: <SiReact className="text-2xl" /> },
  { name: "React Native", type: "Dev tool", icon: <SiReact className="text-2xl" /> },
  { name: "Tailwind CSS", type: "Dev tool", icon: <SiTailwindcss className="text-2xl" /> },
  { name: "JavaScript", type: "Dev tool", icon: <SiJavascript className="text-2xl" /> },
  { name: "TypeScript", type: "Dev tool", icon: <SiTypescript className="text-2xl" /> },
  { name: "Python", type: "Dev tool", icon: <SiPython className="text-2xl" /> },
  { name: "Kubernetes", type: "Dev tool", icon: <SiKubernetes className="text-2xl" /> },
  { name: "Docker", type: "Dev tool", icon: <SiDocker className="text-2xl" /> },
  { name: "Express", type: "Dev tool", icon: <SiExpress className="text-2xl" /> },
  { name: "Redis", type: "Dev tool", icon: <SiRedis className="text-2xl" /> },
  { name: "Flask", type: "Dev tool", icon: <SiFlask className="text-2xl" /> },
  { name: "Cloudflare", type: "Dev tool", icon: <SiCloudflare className="text-2xl" /> },
  { name: "MongoDB", type: "Database", icon: <SiMongodb className="text-2xl" /> },
  { name: "PostgreSQL", type: "Database", icon: <SiPostgresql className="text-2xl" /> },
  { name: "Machine Learning", type: "Dev tool", icon: <SiTensorflow className="text-2xl" /> },
  { name: "Computer Vision", type: "Dev tool", icon: <SiOpencv className="text-2xl" /> },
];


const StackGrid = () => {
  return (
    <div className="flex flex-col items-center h-full w-full text-white space-y-5">
      <h2 className="font-jersey text-orange-400 text-[12vw] text-center tracking-[3vw] space-y-2 md:leading-30">
        STACK
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex items-center justify-center md:justify-between bg-zinc-900 p-2 md:p-4 rounded-xl hover:bg-zinc-800 transition"
          >
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 overflow-hidden text-ellipsis">
              <div className="text-white">{tool.icon}</div>
              <div className="space-y-1">
                <div className="font-martian text-[9px] md:text-xs text-center md:text-left">{tool.name}</div>
                <div className="hidden md:flex text-gray-500 font-martian text-[10px]">{tool.type}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default StackGrid
