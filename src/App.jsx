
import { useState } from 'react'
import './App.css'
import Bannar from './Components/Bannar/Bannar'
import Blogs from './Components/Blogs/Blogs'
import Blogs2 from './Components/Blogs2/Blogs2'
import Cook from './Components/Cook/Cook'
import Header from './Components/Header/Header'

function App() {
  const [cook, setCook] = useState([])

  const handleAddToCook = blog =>{
    const newCook = [...cook, blog]
    setCook(newCook);
  }
  return (
    <>   
      <Header></Header>
      <Bannar></Bannar>
      <Blogs></Blogs>
      <div className='flex justify-between mx-12 mt-12 gap-4'>
      <Blogs2 handleAddToCook={handleAddToCook}></Blogs2>
      <Cook cook={cook}></Cook>
      </div>
    </>
  )
}

export default App
