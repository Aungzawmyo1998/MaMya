import logo from './logo.svg';
import './App.css';

import UserRoutes from './routes/UserRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <div>
      <UserRoutes />
      <AdminRoutes />
    </div>
  );
}

export default App;
