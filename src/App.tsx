import './global.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import { Toaster } from 'sonner'

import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />

      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
