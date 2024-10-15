import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/Contact/Contact.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     },
//     {
//       path: 'About',
//       element: <About />
//     },
//     {
//       path: "",
//       element: <Contact />
//     }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="" element={<About />} />
      <Route path="" element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
