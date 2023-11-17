import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ChakraProvider } from '@chakra-ui/react';

/* Components */
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ReactError from 'pages/ReactError';
import Dashboard from 'layout/Dashboard';
import Fallback from 'pages/Fallback';

const routes = createRoutesFromElements(
  <Route element={<Dashboard />} errorElement={<ReactError />}>
    <Route index element={<Home />} />
    <Route path="/no" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <ChakraProvider>
        <ErrorBoundary FallbackComponent={ReactError}>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </ChakraProvider>
    </ErrorBoundary>
  );
}

export default App;
