import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


