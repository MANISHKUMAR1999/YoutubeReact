//import ""
//import './App.css';

import { createBrowserRouter,Router,RouterProvider, Routes,Route,BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Error from './components/Error';
import Sidebar from './components/Sidebar';
import SearchResult from './components/SearchResult';
//import SearchResult from './components/SearchResult';
//import SideBar from './components/SideBar';
//import SideBar from './components/SideBar';
//import { useMemo } from "react";



// const appRouter = createBrowserRouter([{
  
//   path:"/",
//   element:<Body/>,
//   errorElement:<Error/>,
//   children:[
//     {
//       path:"/",
//       element:<MainContainer/>
//     },
//     {
//       path:"watch",
//       element:<WatchPage/>
//     },
//     {
//       path:'searchResult/:searchQuery',
//       element:<SearchResult/>
//     }
//   ]
// }])



function App() {

 

  return (
   
      <Provider store={store}>
         {/* <Head/> */}
         {/* <RouterProvider router={appRouter} /> */}
        
        <BrowserRouter>
                
                    <Head />
                    
                    <Routes>
                   
                      <Route path="/"  element={<Body />} />
                      <Route path="watch" element={<WatchPage />} />
                      <Route path='searchResult/:searchQuery' element={<SearchResult/>}/>
                     
                       
                       
                       
                    </Routes>
               
            </BrowserRouter>
       
      </Provider> 
     
  );
}

// const appRouter = createBrowserRouter([{
  
//   path:"/",
//   element:<Body/>,
//   errorElement:<Error/>,
//   children:[
//     {
//       path:"/",
//       element:<MainContainer/>
//     },
//     {
//       path:"watch",
//       element:<WatchPage/>
//     },
//     {
//       path:'searchResult/:searchQuery',
//       element:<SearchResult/>
//     }
//   ]
// }])




export default App;
