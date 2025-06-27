import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './layouts/Root.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AllRecipes from './pages/AllRecipes.jsx'
import NotFound from './pages/NotFound.jsx'
import PrivateRoutes from './pages/PrivateRoutes.jsx'
import AddRecipe from './pages/AddRecipe.jsx'
import ContextProvider from './contexts/ContextProvider.jsx'
import RecipeDetails from './pages/RecipeDetails.jsx'
import Loader from './components/Loader.jsx'
import MyRecipe from './pages/MyRecipe.jsx'
import Dashboard from './layouts/Dashboard.jsx'
import MyProfile from './pages/dashboardPages/MyProfile.jsx'
import Overview from './pages/dashboardPages/overview/Overview.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: "/",
        element: <Home />,
        hydrateFallbackElement: <Loader />,
        loader: () => fetch(`${import.meta.env.VITE_api_url}/top-recipes`)
      },
      {
        path: "all-recipes",
        element: <AllRecipes />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "recipe-details/:id",
        element: <PrivateRoutes> <RecipeDetails /> </PrivateRoutes>
      }
    ]
  },
  {
        path: '*',
        element: <NotFound />
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes> <Dashboard /> </PrivateRoutes>,
    children: [
      {
        path: 'my-profile',
        element: <MyProfile />
      },
      {
        index: true,
        element: <Overview />
      },
      {
        path: "my-recipes",
        element: <MyRecipe /> 
      },
            {
        path: "add-recipe",
        element: <AddRecipe />
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='dark:bg-gray-900'>
      <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    </div>
  </StrictMode>,
)
