import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

interface GitHubStatsProps {
  language: 'nl' | 'en';
}

// Theme colours tuned to the warm cream + ink + gold palette
const TITLE = '1f242c'; // ink
const TEXT = '535f7e';  // slate / info
const ICON = 'a87b3a';  // gold-ink
const BG = '00000000';  // transparent

const GitHubStats: React.FC<GitHubStatsProps> = ({ language }) => {
  const translations = {
    nl: {
      eyebrow: 'Activiteit',
      title: 'GitHub Activiteit',
      viewProfile: 'Bekijk GitHub profiel',
    },
    en: {
      eyebrow: 'Activity',
      title: 'GitHub Activity',
      viewProfile: 'View GitHub profile',
    },
  };

  const t = translations[language];

  const statsUrl =
    `https://github-readme-stats.vercel.app/api?username=Damian5314&hide_border=true&include_all_commits=false&count_private=false&bg_color=${BG}&title_color=${TITLE}&text_color=${TEXT}&icon_color=${ICON}`;
  const langsUrl =
    `https://github-readme-stats.vercel.app/api/top-langs/?username=Damian5314&langs_count=6&layout=compact&hide_border=true&include_all_commits=true&count_private=false&bg_color=${BG}&title_color=${TITLE}&text_color=${TEXT}&icon_color=${ICON}`;
  const streakUrl =
    `https://nirzak-streak-stats.vercel.app/?user=Damian5314&hide_border=true&background=${BG}&ring=${ICON}&fire=${ICON}&currStreakNum=${TITLE}&sideNums=${TITLE}&currStreakLabel=${ICON}&sideLabels=${TEXT}&dates=${TEXT}&stroke=${TEXT}`;

  const tileClass =
    'flex items-center justify-center rounded-xl border border-border bg-background/40 p-4';

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-1">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-ink">
          {t.eyebrow}
        </span>
      </div>
      <div className="mb-5 flex items-center gap-2">
        <Github className="h-5 w-5 text-foreground" />
        <h2 className="font-semibold text-foreground">{t.title}</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className={tileClass}>
          <img src={statsUrl} alt="GitHub Stats" className="h-auto w-full object-contain" loading="lazy" />
        </div>
        <div className={tileClass}>
          <img src={langsUrl} alt="Top Languages" className="h-auto w-full object-contain" loading="lazy" />
        </div>
      </div>

      <div className={`mt-4 ${tileClass}`}>
        <img src={streakUrl} alt="GitHub Streak" className="h-auto w-full max-w-2xl object-contain" loading="lazy" />
      </div>

      <a
        href="https://github.com/damian5314"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-5 inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-card px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-foreground/40"
      >
        <Github className="h-4 w-4" />
        {t.viewProfile}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default GitHubStats;
