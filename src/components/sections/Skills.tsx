import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Layers3,
  LucideIcon,
  Smartphone,
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import AnimatedSection from '../ui/AnimatedSection';

type SkillCategory =
  | 'frontend'
  | 'backend'
  | 'data-ai'
  | 'database'
  | 'cloud-tools'
  | 'mobile';

interface SkillGroup {
  id: SkillCategory;
  title: string;
  headline: string;
  summary: string;
  icon: LucideIcon;
  accent: string;
  depth: number;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    headline: 'Clean, responsive, component-driven interfaces',
    summary:
      'I build polished web experiences with modern frontend frameworks, reusable components, smooth interaction states, and strong responsive design habits.',
    icon: Layers3,
    accent: 'from-sky-500 to-cyan-400',
    depth: 95,
    skills: [
      'React.js',
      'Angular',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material Tailwind',
      'Redux Toolkit',
      'Responsive Web Design',
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    headline: 'APIs, services, and application logic',
    summary:
      'I work comfortably on the server side, building REST APIs, routing, middleware, and backend flows that support real product functionality.',
    icon: Code2,
    accent: 'from-violet-500 to-indigo-400',
    depth: 88,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'API Development',
      'Middleware',
      'Web Services',
      'JWT',
      'Server-Side Development',
    ],
  },
  {
    id: 'data-ai',
    title: 'Data and AI Workflows',
    headline: 'Scraping, analysis, automation, and AI integration',
    summary:
      'I use Python, SQL, scraping tools, and AI APIs to collect, clean, analyze, and enrich large datasets for research and product use cases.',
    icon: BrainCircuit,
    accent: 'from-emerald-500 to-teal-400',
    depth: 92,
    skills: [
      'Python',
      'Pandas',
      'Selenium',
      'OpenAI API',
      'Generative AI',
      'Machine Learning',
      'Scikit-learn',
      'Data Analysis',
      'Excel',
      'DBSCAN',
      'Cosine Similarity',
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    headline: 'Structured and NoSQL data systems',
    summary:
      'I design and work with both relational and NoSQL databases, focusing on clean schemas, efficient queries, and dependable data handling.',
    icon: Database,
    accent: 'from-amber-500 to-orange-400',
    depth: 86,
    skills: [
      'SQL',
      'MySQL',
      'MongoDB',
      'Oracle',
      'SQL Databases',
      'NoSQL Databases',
      'Normalization',
      'Triggers',
      'Backup and Recovery',
    ],
  },
  {
    id: 'cloud-tools',
    title: 'Cloud and Tooling',
    headline: 'Version control, deployment, and engineering workflow',
    summary:
      'I use collaborative dev tooling and cloud platforms to ship features, manage code, test APIs, and support deployment and storage workflows.',
    icon: CloudCog,
    accent: 'from-fuchsia-500 to-pink-400',
    depth: 82,
    skills: [
      'AWS',
      'Firebase',
      'Azure',
      'GCP',
      'Docker',
      'Git',
      'GitHub',
      'GitLab',
      'Jira',
      'Postman',
      'Swagger',
      'Jupyter Notebook',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    headline: 'Cross-platform app delivery',
    summary:
      'I have hands-on experience building and improving mobile applications with frameworks that let me ship quickly across platforms.',
    icon: Smartphone,
    accent: 'from-rose-500 to-red-400',
    depth: 80,
    skills: [
      'Ionic Framework',
      'React Native',
      'Android Studio',
      'Mobile UI Flows',
      'App Debugging',
      'Cross-Platform Development',
    ],
  },
];

const spotlightStats = [
  {
    label: 'Core Strength',
    value: 'Full Stack',
    detail: 'Frontend, backend, APIs, and product delivery',
  },
  {
    label: 'AI + Data',
    value: 'Research Ready',
    detail: 'Scraping, cleaning, analysis, and OpenAI integration',
  },
  {
    label: 'Platforms',
    value: 'Web + Mobile',
    detail: 'Responsive products and cross-platform apps',
  },
  {
    label: 'Workflow',
    value: 'Ship Fast',
    detail: 'Git, cloud tools, testing, debugging, and iteration',
  },
];

const filters: Array<{ id: SkillCategory | 'all'; label: string }> = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'data-ai', label: 'Data + AI' },
  { id: 'database', label: 'Databases' },
  { id: 'cloud-tools', label: 'Cloud + Tools' },
  { id: 'mobile', label: 'Mobile' },
];

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory | 'all'>('all');

  const visibleGroups = useMemo(() => {
    if (activeFilter === 'all') {
      return skillGroups;
    }

    return skillGroups.filter((group) => group.id === activeFilter);
  }, [activeFilter]);

  return (
    <AnimatedSection
      id="skills"
      className="bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.10),transparent_35%),linear-gradient(180deg,rgba(248,250,252,1),rgba(241,245,249,1))] dark:bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_30%),linear-gradient(180deg,rgba(17,24,39,1),rgba(15,23,42,1))]"
    >
      <SectionTitle
        title="Skills Architecture"
        subtitle="A full-stack capability map across frontend engineering, backend systems, AI integration, mobile development, databases, and analytics."
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70 md:p-8">
        <div className="pointer-events-none absolute -left-16 top-0 h-44 w-44 rounded-full bg-sky-400/15 blur-3xl dark:bg-sky-500/10" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-500/10" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300">
              <BarChart3 size={16} />
              Capability Overview
            </div>

            <h3 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
              Experienced full stack development backed by data analysis, AI integration, and mobile app delivery.
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
              My work combines product engineering and data-heavy problem solving. I build responsive websites,
              scalable backend systems, and mobile apps, while also handling scraping, cleaning, analysis, and AI-based
              enrichment of large datasets.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {['React', 'Node.js', 'Python', 'OpenAI', 'SQL', 'Ionic', 'MongoDB', 'AWS'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {spotlightStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm dark:border-slate-700/60 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
                <p className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 dark:bg-white dark:text-slate-900'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-primary-400 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-primary-500'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {visibleGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-all duration-300 dark:border-slate-700/60 dark:bg-slate-900/75 md:p-7"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`} />

              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`rounded-2xl bg-gradient-to-br p-3 text-white shadow-lg ${group.accent}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      {group.headline}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
                  </div>
                </div>

                <div className="min-w-[76px] text-right">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">{group.depth}%</span>
                  <p className="text-xs uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">Depth</p>
                </div>
              </div>

              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{group.summary}</p>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.depth}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + index * 0.05 }}
                  className={`h-full rounded-full bg-gradient-to-r ${group.accent}`}
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:border-primary-300 group-hover:text-primary-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:group-hover:border-primary-500/60 dark:group-hover:text-primary-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
