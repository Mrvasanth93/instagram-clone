import styles from "./search.module.css";
import Search from "@mui/icons-material/Search";

const search = ({ setResNav, setShowSearch }) => {
  const handleClick = () => {
    setResNav((prev) => !prev);
    setShowSearch((prev) => !prev);
  };
  return (
    <div className={`${styles.search}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.cancel}`}>
          <h1 className={`${styles.title}`}>Search</h1>
          <span onClick={handleClick} className={`${styles.cancel__x}`}>
            x
          </span>
        </div>

        <div className={`${styles.inputField}`}>
          <Search fontSize="large" className={`${styles.icon}`} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <span className={`${styles.recent}`}>Recent</span>
      <span className={`${styles.searches}`}>No recent searches</span>
    </div>
  );
};

export default search;
