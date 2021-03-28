import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Result from './Components/Result'

function App() {
  const name = 'Cutler'

  return (
    <div className="container">
      <Header />
      <Navbar />
      <Result />
    </div>
  );
}

export default App;
