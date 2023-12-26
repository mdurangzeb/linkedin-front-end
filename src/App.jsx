
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Message from './pages/Message';
import Jobs from './pages/Jobs';
import Networks from './pages/Networks';
import Notifications from './pages/Notifications';

const App = () => {
  return (

    <BrowserRouter>
       <Navbar/>
    <Routes>
       <Route path='/' Component={Home} />
       <Route path='/message' Component={Message} />
       <Route path='/jobs' Component={Jobs} />
       <Route path='/network' Component={Networks} />
       <Route path='/notification' Component={Notifications} />
    </Routes>
    </BrowserRouter>
  )
}

export default App