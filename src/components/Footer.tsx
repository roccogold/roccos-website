import React, { useEffect, useState } from 'react';

export function Footer() {
  const [lastUpdated, setLastUpdated] = useState('Site updated recently — work in progress.');

  useEffect(() => {
    // Mock GitHub API call - replace with actual implementation if needed
    const fetchLastUpdated = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/roccogold/my-website/actions/runs?per_page=1');
        const data = await response.json();
        
        if (data.workflow_runs && data.workflow_runs.length > 0) {
          const run = data.workflow_runs[0];
          const updatedDate = new Date(run.updated_at);
          const day = String(updatedDate.getDate()).padStart(2, '0');
          const month = String(updatedDate.getMonth() + 1).padStart(2, '0');
          const year = updatedDate.getFullYear();
          const hours = String(updatedDate.getHours()).padStart(2, '0');
          const minutes = String(updatedDate.getMinutes()).padStart(2, '0');
          const username = run.actor?.login || 'unknown';
          
          setLastUpdated(
            `© Updated on ${day}-${month}-${year} ${hours}:${minutes} by ${username} — work in progress, just like me.`
          );
        }
      } catch (error) {
        // Keep default message on error
        console.log('Could not fetch last updated info');
      }
    };

    fetchLastUpdated();
  }, []);

  return (
    <footer className="text-center py-8 relative z-10">
      <p className="text-small text-text-muted font-mono">
        {lastUpdated}
      </p>
    </footer>
  );
}
