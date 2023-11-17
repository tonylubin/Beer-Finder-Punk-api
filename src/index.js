import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from './containers/ThemeContext';


const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


