import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./component/MainLayout/MainLayout"
import Header from './component/Header/Header.jsx';
import About from './component/about/About.jsx'
// import {Navbar} from './component/Navbar/Navbar.jsx'
import Portofolio from './component/Portofolio/Portofolio'
import {Information} from './component/information/Information.jsx'



const routers = createBrowserRouter([
  {path:"/",element:<MainLayout/>,children:[
  {index:true,element:<Header/>},
  {path:"Portofolio",element:<Portofolio/>},
  {path:"About",element:<About/>},
  {path:"Contact",element:<Information/>}
  

  ]}
])
export default function App() {

        return (<>
      
      <RouterProvider router={routers}></RouterProvider>
          
        </>);

}