// src/routes.jsx
import { createRoutesFromElements, Route } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';

const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={
    <div>
      <h1>Oops! Looks like something went wrong.</h1>
    </div>
  }>
    <Route index element={<Home />} />
    <Route path="actors" element={<Actors />} />
    <Route path="directors" element={<Directors />} />
    <Route path="movie/:id" element={<Movie />} />
  </Route>
);

export default routes;
