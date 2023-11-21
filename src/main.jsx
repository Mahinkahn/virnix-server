import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import Loader from './components/Loader/Loader';

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Let's create an async method to fetch fake data
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    };

    fakeDataFetch();
  }, []);

  return (
    <React.StrictMode>
      <div className="">
        <RouterProvider router={router} />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <h1 className=""></h1>
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
