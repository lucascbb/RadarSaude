import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import reportWebVitals from './reportWebVitals';
import AppStack from './routes/AppStack';
import { GlobalContextProvider } from './context/GlobalContex';
import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <GlobalContextProvider>
    <ToastContainer />
    <AppStack />
  </GlobalContextProvider>
);

reportWebVitals();
