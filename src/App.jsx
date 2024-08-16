import { useState } from 'react'
import './App.css'
import Allwidget from './Components/All widgets/Allwidget'
// import Dashboard from './Components/Dashboard'
import Dashboards from './Components/Dashboard/Dashboards'

function App() {


  const [allWidget , setAllWidget] = useState(false);
  

  return (
    <>
      {/* <Dashboard /> */}
      <Dashboards setAllWidget={setAllWidget}/>
      
     { allWidget && <Allwidget setAllWidget={setAllWidget}/> } 
    </>
  )
}

export default App
