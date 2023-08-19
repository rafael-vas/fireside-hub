import '../global.css'
import './App.css'

import Header from '../components/Header/Header.jsx'
import Sidebar from '../components/Siderbar/Sidebar.jsx'


const App = () => {

  return (
    <>
      <Header />
      <div className="wrapper">
          <Sidebar />
          <main className="main">
          </main>
      </div>
    </>
  )
}

export default App