import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import './style.scss'




function App() {
  return (
    <div className='app'>
      <div className='containers'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;