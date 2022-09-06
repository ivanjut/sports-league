import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
          <div className='main'>
            <Main/>
          </div>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
