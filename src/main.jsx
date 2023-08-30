import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Provider from './Provider/Provider';
import routes from './Routes/Routes';
import './index.css';

const client = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <Provider >
      <RouterProvider router={routes} />
    </Provider>
    <Toaster />
  </QueryClientProvider>,
)
