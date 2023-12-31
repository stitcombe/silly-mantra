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
import TestSuiteItem from 'pages/TestSuites/TestSuiteItem';
import TestSuiteItemSummary from 'pages/TestSuites/TestSuiteItemSummary';
import TestSuiteItemMembers from 'pages/TestSuites/TestSuiteItemMembers';
import TestSuiteItemMemberNoDetails from 'pages/TestSuites/TestSuiteItemMemberNoDetails';
import TestSuiteItemMemberDetails from 'pages/TestSuites/TestSuiteItemMemberDetails';
import Gridy from 'pages/Grid';

const routes = createRoutesFromElements(
  <Route element={<Dashboard />} errorElement={<ReactError />}>
    <Route index element={<Home />} />
    <Route path="/no" element={<NotFound />} />
    <Route path="/gridy" element={<Gridy />} />
    <Route path="/test-suites/:id" element={<TestSuiteItem />}>
      <Route index element={<TestSuiteItemSummary />} />
      <Route path="/test-suites/:id/members" element={<TestSuiteItemMembers />}>
        <Route index element={<TestSuiteItemMemberNoDetails />} />
        <Route
          path="/test-suites/:id/members/:memberId"
          element={<TestSuiteItemMemberDetails />}
        />
      </Route>
    </Route>
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
