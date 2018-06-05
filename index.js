import { GoogleAnalyticsBackwardsCompability } from './src/GoogleAnalyticsBackwardsCompability';
import { GoogleAnalyticsTracker } from './src/GoogleAnalyticsTracker';
import { GoogleAnalyticsSettings } from './src/GoogleAnalyticsSettings';
import { GoogleAnalyticsBridge } from './src/NativeBridges';

export {
  GoogleAnalyticsTracker,
  GoogleAnalyticsSettings,
};

/**
 * Backwards compatibility default export.
 * Versions bellow 3.1.0 used static GoogleAnalytics class.
 * This exported instance makes sure older implementations work.
 */
export default new GoogleAnalyticsBackwardsCompability(GoogleAnalyticsBridge ? GoogleAnalyticsBridge.nativeTrackerId : null);
