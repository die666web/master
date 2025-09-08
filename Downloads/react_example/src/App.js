import './App.scss';
import Header from './components/Header/Header';
import { Link,Outlet } from 'react-router-dom';
import Login from './components/Setting/Login';
import Log_out from './components/Setting/Log_out';

const App = () => {

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header/>
      </div>
      
      <div className='main_container'>
        <div className='menu'>

        </div>
        <div className = 'app-content'>
          <Outlet/>
        </div>
      </div>
    </div>

  );
}

export default App;
