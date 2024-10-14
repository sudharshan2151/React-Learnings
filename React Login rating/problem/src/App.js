import Login from "./Components/login/Login";

const App = () => {
  
  return (
    <div >
      {/* Either Dashboard or Login component should be visible at a time */}
      <Login/>
    </div>
  );
};

export default App;
