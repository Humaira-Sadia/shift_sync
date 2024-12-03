/**
 * @version 0.0.1
 * Updated On : August 28, 2024
 * This is the navigation file that takes care of all router
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as Pages from 'src/pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Pages.Dashboard />} />
          {/* ALL RESTRICTED ROUTES */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return <h1>404 Not Found</h1>;
};

export default Navigation;
