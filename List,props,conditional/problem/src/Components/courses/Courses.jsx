import styles from "./Courses.module.css"

class Course {
  constructor(name, eligibility, duration) {
    this.name = name;
    this.eligibility = eligibility;
    this.duration = duration;
  }
}

const fullTime = [new Course("Full Stack Web Development","18-28 yrs","30 weeks")];
const partTime = [new Course("Full Stack Web Development","18-28 yrs","30 weeks"),new Course("Data Analytics","18-28 yrs","30 weeks")];

const Courses = () => {

  return (<div data-testid="courses" className={styles.wrapper}>
      <h2 className={styles.heading}>Full Time Courses</h2>
      <ol>
      <li>{fullTime[0].name}
            <ul>
              <li>Eligibility : {fullTime[0].eligibility}</li>
              <li>Duration : {fullTime[0].duration}</li>
            </ul>
          </li>
        </ol>
      <h2 className={styles.heading}>Part Time Courses</h2>
      <ol>
      <li>{partTime[0].name}
            <ul>
              <li>Eligibility : {partTime[0].eligibility}</li>
              <li>Duration : {partTime[0].duration}</li>
            </ul>
        </li>
        <li>{partTime[1].name}
            <ul>
              <li>Eligibility : {partTime[1].eligibility}</li>
              <li>Duration : {partTime[1].duration}</li>
            </ul>
          </li>
        </ol>
  </div>);
};

export default Courses;
