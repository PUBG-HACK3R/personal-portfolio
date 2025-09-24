const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'src', 'config', 'maintenance.js');

// Read current config
let configContent = fs.readFileSync(configPath, 'utf8');

// Check current state
const isCurrentlyEnabled = configContent.includes('enabled: true');

// Toggle the state
if (isCurrentlyEnabled) {
  configContent = configContent.replace('enabled: true', 'enabled: false');
  console.log('✅ Maintenance mode DISABLED - Portfolio is now LIVE');
} else {
  configContent = configContent.replace('enabled: false', 'enabled: true');
  // Update the start time to current time when enabling maintenance
  const currentTime = new Date().getTime();
  configContent = configContent.replace(/startTime: \d+/, `startTime: ${currentTime}`);
  console.log('🔧 Maintenance mode ENABLED - Showing maintenance page with 24-hour timer');
}

// Write back to file
fs.writeFileSync(configPath, configContent);

console.log('🔄 Changes saved! Refresh your browser to see the update.');
