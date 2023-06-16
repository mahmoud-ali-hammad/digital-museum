import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './pages/wrapper';
import HomePage from './pages/homePage';
import ProductPage from './pages/productPage';
import Halls from './pages/halls';
import Opnennigours from './pages/opennigours';
import Details from './pages/hallsdetails';
import Reserve from './pages/ticket';
import VisitGuide from './pages/visitGuide';
import Map from './pages/map'
import Hotels from './pages/hotels';
const router1 = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/product', element: <ProductPage /> },
      { path: '/halls/:id', element: <Halls /> },
      { path: 'halls/:id/:id2', element: <Details /> },
      { path: '/openning-ours', element: <Opnennigours /> },
      {
        path: '/ticket',
        element: <Reserve />,
      },
      { path: '/guide', element: <VisitGuide /> },
      {path:'/map',element:<Map/>},{path:'/hotels',element:<Hotels/>}
    ],
  },
]);
function App() {
  return (
    <div className='App'>
      <RouterProvider router={router1} />
    </div>
  );
}

export default App;
