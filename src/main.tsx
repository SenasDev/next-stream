import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const router  = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [	
      {
        path:"/",
        element: <div>HomePage</div>
      },{
        path:"/movies",
        element: <div>Movies</div>
      },
      {
        path:"/series",
        element: <div>Series</div>
      },
      {
        path:"/profile",
        element: <div>Search</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme appearance="dark" accentColor="ruby" grayColor="slate">
      <RouterProvider router={router} />
    </Theme>
  </StrictMode>,
)