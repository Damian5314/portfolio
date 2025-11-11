import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

interface GitHubStatsProps {
  language: 'nl' | 'en';
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ language }) => {
  const translations = {
    nl: {
      title: 'GitHub Activiteit',
      viewProfile: 'Bekijk GitHub Profiel',
    },
    en: {
      title: 'GitHub Activity',
      viewProfile: 'View GitHub Profile',
    },
  };

  const t = translations[language];

  return (
    <Card className="shadow-soft">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Github className="w-5 h-5" />
            {t.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* GitHub Stats - Top Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Damian5314&theme=default&hide_border=true&include_all_commits=false&count_private=false"
              alt="GitHub Stats"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Damian5314&langs_count=6&theme=default&hide_border=true&include_all_commits=true&count_private=false&layout=compact"
              alt="Top Languages"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* GitHub Streak - Bottom Row */}
        <div className="flex justify-center">
          <img
            src="https://nirzak-streak-stats.vercel.app/?user=Damian5314&theme=default&hide_border=true"
            alt="GitHub Streak"
            className="w-full max-w-2xl h-auto object-contain"
          />
        </div>

        {/* View Profile Link */}
        <a
          href="https://github.com/damian5314"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors text-sm font-medium text-foreground"
        >
          <Github className="w-4 h-4" />
          {t.viewProfile}
        </a>
      </CardContent>
    </Card>
  );
};

export default GitHubStats;
