
import './App.css'
import Bannar from './Components/Bannar/Bannar'
import Blogs from './Components/Blogs/Blogs'
import Blogs2 from './Components/Blogs2/Blogs2'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'

function App() {
  return (
    <>   
      <Header></Header>
      <Bannar></Bannar>
      <Blogs></Blogs>
      <div className='flex justify-between mx-12 mt-12 gap-4'>
      <Blogs2></Blogs2>
      <Cook></Cook>
      </div>
    </>
  )
}

export default App
