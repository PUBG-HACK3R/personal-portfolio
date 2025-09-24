// Maintenance Mode Configuration
// Change this value to enable/disable maintenance mode
// true = maintenance mode ON (shows maintenance page)
// false = maintenance mode OFF (shows normal portfolio)

export const MAINTENANCE_CONFIG = {
  enabled: false, // Maintenance mode is currently disabled
  message: "We're currently updating our portfolio to bring you an even better experience.",
  estimatedTime: "We'll be back online shortly with exciting updates!",
  // Timer configuration (24 hours from now)
  countdownHours: 24, // Duration in hours
  startTime: new Date().getTime() // When maintenance started (timestamp)
};

export default MAINTENANCE_CONFIG;
