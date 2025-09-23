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
  console.log('🔧 Maintenance mode ENABLED - Showing maintenance page');
}

// Write back to file
fs.writeFileSync(configPath, configContent);

console.log('🔄 Changes saved! Refresh your browser to see the update.');
