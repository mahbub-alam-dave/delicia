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

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: "/",
        element: <Home />,
        hydrateFallbackElement: <Loader />,
        loader: () => fetch('http://localhost:3000/top-recipes')
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
        path: "add-recipe",
        element: <PrivateRoutes> <AddRecipe /></PrivateRoutes>
      },
      {
        path: "recipe-details/:id",
        element: <PrivateRoutes> <RecipeDetails /> </PrivateRoutes>
      },
      {
        path: "my-recipes",
        element: <PrivateRoutes> <MyRecipe /> </PrivateRoutes>
      }
    ]
  },
  {
        path: '*',
        element: <NotFound />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
