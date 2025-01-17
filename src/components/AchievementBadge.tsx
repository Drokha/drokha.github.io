import { Trophy, Award, Medal, BadgeCheck } from "lucide-react";
import { Card } from "./ui/card";

type BadgeType = "trophy" | "award" | "medal" | "certification";

interface AchievementBadgeProps {
  type: BadgeType;
  title: string;
  description: string;
}

const getBadgeIcon = (type: BadgeType) => {
  switch (type) {
    case "trophy":
      return <Trophy className="w-8 h-8 text-workout-purple" />;
    case "award":
      return <Award className="w-8 h-8 text-workout-blue" />;
    case "medal":
      return <Medal className="w-8 h-8 text-workout-purple" />;
    case "certification":
      return <BadgeCheck className="w-8 h-8 text-workout-blue" />;
  }
};

export const AchievementBadge = ({ type, title, description }: AchievementBadgeProps) => {
  return (
    <Card className="gradient-border p-6 flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300">
      <div className="rounded-full p-4 bg-background/10 backdrop-blur-sm">
        {getBadgeIcon(type)}
      </div>
      <div className="text-center space-y-2">
        <h3 className="font-bold bg-gradient-to-r from-workout-blue to-workout-purple text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};