import styles from "./User.module.css";
const UserCard = (props) => {
  return (
  <div data-testid="user-card" className={styles.container}>
    <div>
      <img src={props.avatar} alt="" />
    </div>
    <div>
         <div >
            <h2 data-testid="user_name" >{props.name}</h2>
            <p data-testid="user_address">{props.address}</p>
         </div>
         <div className={styles.container}>
           <div>
              <h3 >Posts</h3>
              <p data-testid="user_posts">{props.posts}</p></div>
            <div>
              <h3>followers</h3>
              <p data-testid="user_followers">{props.followers}</p>
            </div>
            <div>
              <h3>Married</h3>
              <p data-testid="is-married">{props.isMarried?"Yes":"No"}</p>
            </div>
         </div>
    </div>
    <div>
        <button onClick={()=>alert(`You are now following ${props.name}`)}>Follow</button>
    </div>
  </div>
  );
};

export default UserCard;
