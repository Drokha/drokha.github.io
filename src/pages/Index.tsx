import { StatsCard } from "@/components/StatsCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillProgress } from "@/components/SkillProgress";
import { AchievementBadge } from "@/components/AchievementBadge";
import { Dumbbell, Trophy, History, Code, Award } from "lucide-react";

const Index = () => {
  const skills = [
    {
      name: "React & React Native",
      level: 90,
      description: "Advanced state management, custom hooks, and performance optimization",
    },
    {
      name: "TypeScript",
      level: 85,
      description: "Type systems, generics, and advanced patterns",
    },
    {
      name: "Node.js",
      level: 80,
      description: "REST APIs, authentication, and database integration",
    },
    {
      name: "GraphQL",
      level: 75,
      description: "Schema design, resolvers, and Apollo implementation",
    },
  ];

  const achievements = [
    {
      type: "trophy" as const,
      title: "Best Code Architecture",
      description: "Recognized for exceptional system design patterns",
    },
    {
      type: "award" as const,
      title: "Innovation Award",
      description: "Created groundbreaking solutions for client challenges",
    },
    {
      type: "medal" as const,
      title: "Top Performer",
      description: "Consistently exceeded project expectations",
    },
    {
      type: "certification" as const,
      title: "AWS Certified",
      description: "Professional cloud architecture certification",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-workout-blue to-workout-purple text-transparent bg-clip-text">
          Developer Workout Plan
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Welcome to my developer fitness journey! Track my progress as I build
          stronger applications and flex my coding muscles.
        </p>
      </header>

      {/* Stats Grid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-workout-blue" />
          <h2 className="text-2xl font-bold">Developer Stats</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Projects Completed"
            value="15+"
            description="Successfully deployed applications"
          />
          <StatsCard
            title="Code Quality"
            value="98%"
            description="Test coverage across projects"
          />
          <StatsCard
            title="Tech Stack"
            value="10+"
            description="Technologies mastered"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-workout-blue" />
          <h2 className="text-2xl font-bold">Technical Skills</h2>
        </div>
        <div className="gradient-border p-6">
          <SkillProgress skills={skills} />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-6 h-6 text-workout-purple" />
          <h2 className="text-2xl font-bold">Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementBadge
              key={index}
              type={achievement.type}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-workout-purple" />
          <h2 className="text-2xl font-bold">Featured Workouts (Projects)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-stack e-commerce solution with real-time inventory management"
            techStack={["React", "Node.js", "MongoDB", "Redux"]}
            link="#"
          />
          <ProjectCard
            title="AI Chat Application"
            description="Real-time chat application with AI-powered responses"
            techStack={["Next.js", "OpenAI", "TypeScript", "Tailwind"]}
            link="#"
          />
          <ProjectCard
            title="Fitness Tracker"
            description="Mobile-first fitness tracking application with social features"
            techStack={["React Native", "Firebase", "GraphQL"]}
            link="#"
          />
          <ProjectCard
            title="Portfolio Generator"
            description="Dynamic portfolio generator with customizable themes"
            techStack={["Vue.js", "Nuxt", "Sass", "Firebase"]}
            link="#"
          />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <History className="w-6 h-6 text-workout-blue" />
          <h2 className="text-2xl font-bold">Training History</h2>
        </div>
        <div className="space-y-6">
          <div className="gradient-border p-6">
            <h3 className="text-lg font-bold">Senior Developer @ Tech Corp</h3>
            <p className="text-sm text-muted-foreground">2021 - Present</p>
            <p className="mt-2 text-muted-foreground">
              Leading development of enterprise applications and mentoring junior developers
            </p>
          </div>
          <div className="gradient-border p-6">
            <h3 className="text-lg font-bold">Full Stack Developer @ StartupX</h3>
            <p className="text-sm text-muted-foreground">2019 - 2021</p>
            <p className="mt-2 text-muted-foreground">
              Developed and maintained multiple client applications using modern web technologies
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
