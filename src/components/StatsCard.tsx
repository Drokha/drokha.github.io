import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
}

export const StatsCard = ({ title, value, description }: StatsCardProps) => {
  return (
    <Card className="gradient-border p-6 space-y-2 hover:scale-105 transition-transform duration-300">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="text-2xl font-bold bg-gradient-to-r from-workout-blue to-workout-purple text-transparent bg-clip-text">
        {value}
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </Card>
  );
};