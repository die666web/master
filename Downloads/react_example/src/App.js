import './App.scss';
import Header from './components/Header/Header';
import { Link,Outlet } from 'react-router-dom';
const App = () => {

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header/>
      </div>
      
      <div className='main_container'>
        <div className='menu'></div>
        <div className = 'app-content'>
          <Outlet/>
        </div>
      </div>
    </div>

  );
}

export default App;
