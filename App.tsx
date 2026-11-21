import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { AppErrorBoundary } from './components/ui/AppErrorBoundary'
import { BookingProvider } from './contexts/BookingContext'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'
import { BookDetailsPage } from './pages/booking/BookDetailsPage'
import { BookPlanPage } from './pages/booking/BookPlanPage'
import { BookReviewPage } from './pages/booking/BookReviewPage'
import { BookSchedulePage } from './pages/booking/BookSchedulePage'
import { BookSentPage } from './pages/booking/BookSentPage'
import { BookWhatsAppPage } from './pages/booking/BookWhatsAppPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'services/:slug', element: <ServiceDetailPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'book', element: <BookPlanPage /> },
      { path: 'book/schedule', element: <BookSchedulePage /> },
      { path: 'book/details', element: <BookDetailsPage /> },
      { path: 'book/review', element: <BookReviewPage /> },
      { path: 'book/whatsapp', element: <BookWhatsAppPage /> },
      { path: 'book/sent', element: <BookSentPage /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
])

export default function App() {
  return (
    <AppErrorBoundary>
      <BookingProvider>
        <RouterProvider router={router} />
      </BookingProvider>
    </AppErrorBoundary>
  )
}