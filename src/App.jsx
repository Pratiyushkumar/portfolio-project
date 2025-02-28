import { Routes, Route } from 'react-router';
import Layout from './components/layout/layout';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
