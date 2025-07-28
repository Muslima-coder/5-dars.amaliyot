import { Route, Routes } from "react-router-dom"
import { Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets } from "./pages"
import { Header, Navbar } from "./modules"
const App = () => {
  return (
    <div className="containers">
    <div className="flex h-[100vh] ">
      <Navbar/>
      <div className="w-[80%] overflow-y-auto h-[100vh] bg-[#F7F8FC]">
        <Header/>
        <Routes>
          <Route path="/" element={<Overview/>}/>
          <Route path="/tickets" element={<Tickets/>}/>
          <Route path="/ideas" element={<Ideas/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/agents" element={<Agents/>}/>
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
        </Routes>
      </div>
    </div>
    </div>
      
    
  )
}

export default App

