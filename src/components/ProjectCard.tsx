import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export const ProjectCard = ({ title, description, techStack, link }: ProjectCardProps) => {
  return (
    <Card className="gradient-border p-6 space-y-4 hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Code2 className="w-5 h-5 text-workout-blue" />
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-workout-purple transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
};