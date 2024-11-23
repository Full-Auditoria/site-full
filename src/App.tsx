import './App.css'
import About from './Components/About';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Menu from './Components/Menu'
import Services from './Components/Services';
import Workus from './Components/Workus';
import Home from './Pages/home';

function App() {
  return (
    <>
      <div className='ContainerMain'>
        <Menu />
        <Banner />
        <Home />
        <About/>
        <Services/>
        <Workus/>
        <Footer/>
        
      </div>
    </>
  )
}

export default App;
