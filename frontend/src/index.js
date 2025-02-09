import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import {ErrorProvider} from "./components/Errors/errorContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ErrorProvider>
          <App />
      </ErrorProvider>
  </React.StrictMode>
);

reportWebVitals();
