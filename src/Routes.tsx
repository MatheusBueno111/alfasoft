import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import SignUp from './pages/SignUp'

import { auth } from './services/firebase'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import NewContact from './pages/NewContact'

import ContactDetails from './pages/ContactDetails'
import { ContactContextProvider } from './contexts/ContactContext'

const PrivateRoute = () => {
  const user = auth.currentUser

  if (!user) {
    return <Navigate to="/signin" />
  }
  return <Outlet />
}

export const Router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
    index: true,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: (
          <ContactContextProvider>
            <Home />
          </ContactContextProvider>
        ),
      },
      {
        path: '/newcontact',
        element: <NewContact />,
      },
      {
        path: '/:id',
        element: <ContactDetails />,
      },
    ],
  },
])
