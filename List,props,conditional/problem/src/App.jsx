import MobileInfo from "./Components/mobileInfo/MobileInfo";
import Courses from "./Components/courses/Courses";
import Users from "./Components/users/Users";
import styles from "./App.module.css";
const App = () => {
  return (
    <div>
      <h1 className={styles.heading}>This app contains different components like MobileInfo, Courses, Users</h1>
      {/* Add h1 tag here as per the problem statement */}
      {/* Add components here MobileInfo, Courses, Users here */}
      <MobileInfo/>
      <Courses/>
      <Users/>
    </div>
  );
};

export default App;
