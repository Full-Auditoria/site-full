import './App.css'
import Menu from './Components/Menu'
import Banner from './Components/Banner';
import Home from './Pages/home';


function App() {
  return (
    <>
      <div className='ContainerMain'>
        <Menu />
        <Banner />
        <Home />
      </div>
    </>
  )
}

export default App;
