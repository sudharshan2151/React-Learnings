// This users list will be included in boilerplate;
import styles from "./Users.module.css";
import UserCard from "./UserCard";

const e = [
  {
    id: 1,
    name: "Chrisse",
    address: "4018 Sachs Trail",
    avatar: "https://placehold.co/200",
    posts: 1841,
    followers: 66868,
    isMarried: true,
  },
  {
    id: 2,
    name: "Chandler",
    address: "15 Yemem road, Yemen",
    avatar: "https://placehold.co/200",
    posts: 1433,
    followers: 20000,
    isMarried: false,
  },
];

const Users = () => {
  return (
    <div data-testid="users" className={styles.container}>
      {/* Add h3 here as per the problem statement*/}
      <h3 className={styles.heading}>Users List</h3>
      
      <UserCard avatar={e[0].avatar} name={e[0].name} address={e[0].address} posts={e[0].posts} followers={e[0].followers} isMarried={e[0].isMarried} />
      <UserCard avatar={e[1].avatar} name={e[1].name} address={e[1].address} posts={e[1].posts} followers={e[1].followers} isMarried={e[1].isMarried} />
      {/* show users details here with the help of UserCard component here */}
    </div>
  );
};

export default Users;
