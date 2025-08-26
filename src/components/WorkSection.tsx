import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Moody\'s Analytics',
    url: 'https://www.moodys.com/web/en/us/solutions/compliance-third-party-risk/maxsight.html',
    description: 'currently building APIs that make onboarding so easy, even your grandpa could integrate them.',
    type: 'current'
  },
  {
    title: 'Bitpanda',
    url: 'https://www.bitpanda.com/en',
    description: 'worked on the backend of the broker app to streamline operations, compliance and support processes for smoother trading days.',
    type: 'previous'
  }
];

const sideProjects = [
  {
    title: 'insurtrain',
    url: 'https://github.com/roccogold/insurtrain',
    description: 'decentralized insurance solution on smart contracts to automate claims processing for train delays.'
  },
  {
    title: 'tbills-auctions',
    url: 'https://github.com/roccogold/tbills-auction',
    description: 'blockchain-based solution that automates treasury bill auctions.'
  }
];

export function WorkSection() {
  return (
    <section className="container-custom section-spacing reveal">
      <h2 className="text-section mb-8 pb-2 border-b border-border">
        My work
      </h2>
      
      <div className="space-y-8">
        <div className="text-body leading-relaxed mb-8">
          I work where design, tech and finance meet — turning complicated fintech puzzles into smooth solutions.
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-3">
                <span className="text-primary font-mono text-sm mt-1">•</span>
                <div className="flex-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-primary hover:text-interactive-hover transition-colors group-hover:underline font-medium"
                  >
                    <span>[{project.title}]</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-foreground">: {project.description}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="ml-6">
            <div className="mb-4">
              <span className="text-primary font-mono">•</span>
              <span className="ml-3 text-foreground">Other projects:</span>
            </div>
            
            <div className="ml-6 space-y-4">
              {sideProjects.map((project, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-3">
                    <span className="text-primary font-mono text-sm mt-1">•</span>
                    <div className="flex-1">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-primary hover:text-interactive-hover transition-colors group-hover:underline font-medium"
                      >
                        <span>[{project.title}]</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-foreground">: {project.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-start space-x-3">
              <span className="text-primary font-mono text-sm mt-1">•</span>
              <div className="text-foreground">
                Currently juggling APIs and dreaming up new ways to make fintech less boring. Got a challenge? Let's solve it together.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}