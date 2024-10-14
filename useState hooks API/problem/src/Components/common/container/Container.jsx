import styles from "./Container.module.css"

function Container({children}) {
  return <div data-testid="common-container" className={styles.container}>
    {children}
  </div>
}

export default Container;
