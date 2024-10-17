import React from 'react'
import Login from './components/login/Login'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProtectedRoute from './components/login/ProtectedRoute'
import TeacherPage from './pages/TeacherPage'
import Sidebar from './components/sidebar/Sidebar'
import SidebarLayout from './components/common/SidebarLayout'
import Dashboard from './pages/Dashboard'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute
        element={
          <SidebarLayout>
            <Homepage />
          </SidebarLayout>
        }
      />
    ),
  },
  {
    path: '/teacher',
    element: (
      <SidebarLayout>
        <TeacherPage />
      </SidebarLayout>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <SidebarLayout>
        <Dashboard />
      </SidebarLayout>
    ),
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
