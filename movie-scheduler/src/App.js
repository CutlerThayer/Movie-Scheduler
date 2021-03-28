import Header from './Components/Header'
import Navbar from './Components/Navbar'

function App() {
  const name = 'Cutler'

  return (
    <div className="Container">
      <Header title='Movie Scheduler App'/>
      <Navbar />
    </div>
  );
}

export default App;
