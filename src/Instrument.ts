import * as Sentry from '@sentry/react'


Sentry.init({
  // dsn: import.meta.env.VITE_SENTRY_DNS,
  // integrations: [
  //   Sentry.reactRouterV6BrowserTracingIntegration({
  //     useEffect,
  //     useLocation,
  //     useNavigationType,
  //     createRoutesFromChildren,
  //     matchRoutes,
  //   }),
  //   Sentry.replayIntegration(),
  // ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
  tracePropagationTargets: ['localhost'],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})

export { Sentry }
