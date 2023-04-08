import Main from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header logoSrc='./images/MyLogo.svg' title="PokeDex" />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
