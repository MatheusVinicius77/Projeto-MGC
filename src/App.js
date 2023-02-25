import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={2500} />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
