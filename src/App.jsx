import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import './App.css'
// import { OutletLayout } from './OutletLayout/OutletLayout'
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Page/Home/Home';
import { Header } from './Components/Header/Header';
import { Liked } from './Page/Liked/Liked';


function App() {

  // const routers = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <OutletLayout />,

  //     children: [
  //       {
  //         path: "/contact",
  //         element: <Contact />
  //       },
  //       {
  //         path: '/xyz',
  //         element: <Xyz />
  //       }
  //     ]
  //   },
  // ])

  return (

    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/like' element={<Liked />} />
      </Routes>
    </BrowserRouter>

    // <RouterProvider router={routers} />
  )
}

export default App
