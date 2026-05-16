// Import and inject Vercel Web Analytics
import { inject } from '@vercel/analytics';

// Initialize analytics with auto mode (production when deployed, development locally)
inject({
  mode: 'auto',
  debug: false
});
