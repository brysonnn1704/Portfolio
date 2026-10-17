const { execSync } = require('child_process');
const fs = require('fs');

process.env.CHROME_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

try {
  console.log('Running Lighthouse on redesigned site...');
  execSync('npx --yes lighthouse http://localhost:8080/ --output=json --output-path=redesign-report.json --chrome-flags="--headless --no-sandbox"', {
    stdio: 'inherit',
    env: process.env
  });
  const data = JSON.parse(fs.readFileSync('redesign-report.json', 'utf8'));
  console.log('\n--- REDESIGNED LIGHTHOUSE SCORES ---');
  console.log('Performance:', Math.round(data.categories.performance.score * 100));
  console.log('Accessibility:', Math.round(data.categories.accessibility.score * 100));
  console.log('Best Practices:', Math.round(data.categories['best-practices'].score * 100));
  console.log('SEO:', Math.round(data.categories.seo.score * 100));
  
  // Also log any accessibility or seo audits that failed:
  const audits = data.audits;
  const failedAudits = Object.keys(audits)
    .filter(k => audits[k].score !== null && audits[k].score < 1 && (audits[k].details || audits[k].description))
    .map(k => ({ id: k, title: audits[k].title, score: audits[k].score }));
  
  console.log('\nAudits with score < 1:', failedAudits);
} catch (err) {
  console.error('Lighthouse audit error:', err.message);
}
