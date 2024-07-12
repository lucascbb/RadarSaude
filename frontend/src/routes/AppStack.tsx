import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

/* Pages */
import Dashboard from '../pages/Dashboard/index';


const AppStack = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppStack
