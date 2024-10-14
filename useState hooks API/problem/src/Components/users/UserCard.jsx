import Button from "../common/button/Button";
import styles from "./useCard.module.css"

function UserCard(props) {
  return <div data-testid="user-card" className={styles.container}>
    <div>
      <img src={props.avatar} alt="" />
    </div>
    <div>
        <h2 data-testid="user_name">{props.name}</h2>
        <p data-testid="user_address">{props.address}</p>
        <div className={styles.miniContainer}>
          <div>
            <h3>Posts</h3>
            <p data-testid="user_posts">{props.posts}</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p data-testid="user_followers">{props.followers}</p>
          </div>
            <div>
              <h3>Married</h3>
              <p data-testid="is-married" style={{color:props.isMarried?"blue":"red"}}>{props.isMarried?"Yes":"No"}</p>
            </div>
        </div>
    </div>
    <div className={styles.button}>
      <Button name="Follow" onClick={()=>alert(`You are now following ${props.name}`)} disable={false}/>
    </div>
  </div>;
}

export default UserCard;
