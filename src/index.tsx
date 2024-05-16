import './index.css';

import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}


const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));

const App = props => (
  <>
    <nav className="grid grid-cols-3 pt-5 pb-5 bg-sky-300">
      <a href="/">🎨</a>
      <a href="/gallery">gallery</a>
      <a href="/about">about</a>
    </nav>
    {props.children}
  </>
);

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
    </Router>
  ),
  root!
);
export default App;