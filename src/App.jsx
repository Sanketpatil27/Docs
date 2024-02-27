import './App.css'
import './index.css'
import Background from './components/background'
import Foreground from './components/foreground'


 
function App() {

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />      {/* cards are under this  */}
    </div>
  )
}

export default App
