import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillProgressProps {
  skills: Skill[];
}

export const SkillProgress = ({ skills }: SkillProgressProps) => {
  return (
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <Progress
            value={skill.level}
            className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-workout-blue [&>div]:to-workout-purple [&>div]:transition-all [&>div]:duration-500"
          />
          <p className="text-xs text-muted-foreground">{skill.description}</p>
        </div>
      ))}
    </div>
  );
};