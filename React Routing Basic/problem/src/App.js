import "./App.css";
import { Navbar } from "./Routes/Navbar";
import{ BrowserRouter} from 'react-router-dom'
import { AllRoutes } from "./Routes/AllRoutes";
function App() {
  return <div className="App">
    <BrowserRouter>
        <Navbar/>
        <AllRoutes/>
    </BrowserRouter>
  </div>;
}

export default App;