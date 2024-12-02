// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // Import Tailwind CSS
import { Amplify } from 'aws-amplify'
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito'
import { CookieStorage } from 'aws-amplify/utils'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '@/i18n.ts'
import { Sentry } from './Instrument'
import '@/i18n.ts'
import CustomErrorBoundary from './pages/CustomErrorBoundary'
import { AuthRoutes } from './routes/Auth/AuthRoute'
import ContentRoute from './routes/Content/ContentRoute'

export const amplifyConfigMainPool = () => {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: import.meta.env.VITE_AWS_USER_POOlS_ID, // Or type in your user pool id here as a string
        userPoolClientId: import.meta.env.VITE_AWS_USER_POOlS_WEB_CLIENT_ID, // or type in your user pool web client id here as a string
        loginWith: {
          email: true,
        },
      },
    },
  })
  localStorage.setItem('isAnonymous', 'false')
  cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage())
}

export const amplifyConfigAnonymousPool = () => {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: import.meta.env.VITE_AWS_COGNITO_POOL_ID_ANONYMOUS,
        userPoolClientId: import.meta.env.VITE_AWS_COGNITO_CLIENT_ID_ANONYMOUS,
      },
    },
  })
  localStorage.setItem('isAnonymous', 'true')
  cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage())
}

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <SentryRoutes>
            <Route path='/auth/*' element={<AuthRoutes />} />

            <Route path='/*' element={<ContentRoute />} />
          </SentryRoutes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CustomErrorBoundary>
  </React.StrictMode>,
)
