import styles from "./MobileInfo.module.css"

const MobileCard = (props)=>{
    return <div >
      <h1 className={styles.heading}>{props.name}</h1>
      <ul>
        {props.list}
      </ul>
    </div>
}
const MobileInfo = () => {
  const mobOp = ["Android", "Blackberry","iPhone","Windows Phone"].map((e,i)=><li key={i}>{e}</li>)
  const mobMan = ["Samsung","HTC","Micromax","Apple"].map((e,i)=><li key={i}>{e}</li>)


  return <div data-testid="mobile_info" className={styles.container}>
    <MobileCard name={"Mobile Operating System"} list={mobOp}/>
    <MobileCard name={"Mobile Manufacturers"} list={mobMan}/>
  </div>;
};
export default MobileInfo;
