const { execSync } = require('child_process');
const fs = require('fs');

process.env.CHROME_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

try {
  console.log('Running Lighthouse on LIVE production site: https://brysonnn1704.github.io/Portfolio/ ...');
  execSync('npx --yes lighthouse https://brysonnn1704.github.io/Portfolio/ --output=json --output-path=live-report.json --chrome-flags="--headless --no-sandbox"', {
    stdio: 'inherit',
    env: process.env
  });
  const data = JSON.parse(fs.readFileSync('live-report.json', 'utf8'));
  console.log('\n=======================================');
  console.log('--- LIVE PRODUCTION LIGHTHOUSE SCORES ---');
  console.log('Performance:   ', Math.round(data.categories.performance.score * 100));
  console.log('Accessibility: ', Math.round(data.categories.accessibility.score * 100));
  console.log('Best Practices:', Math.round(data.categories['best-practices'].score * 100));
  console.log('SEO:           ', Math.round(data.categories.seo.score * 100));
  console.log('=======================================\n');
} catch (err) {
  console.error('Live audit error:', err.message);
}
