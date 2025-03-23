import styles from "./Notifications.module.css";
import post from "../../constants/posts";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";

const Notifications = ({ setResNav, setShowNotifications }) => {
  const handleClick = () => {
    setResNav((prev) => !prev);
    setShowNotifications((prev) => !prev);
  };

  return (
    <div className={`${styles.notifications}`}>
      <div className={`${styles.header}`}>
        <h1 className={`${styles.title}`}>Notifications</h1>
        <span onClick={handleClick} className={`${styles.cancel__x}`}>
          x
        </span>
      </div>

      <div className={`${styles.container}`}>
        <h1 className={`${styles.date}`}>Today</h1>
        {post.map((item, index) => {
          if (index > 3) {
            return (
              <>
                <div className={`${styles.week}`} key={index}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.postImage}
                    sx={{ width: 48, height: 48 }}
                  />
                  <div className={`${styles.profile__Details}`}>
                    <span className={`${styles.user}`}>{item.user}</span>
                    <span className={`${styles.timeline}`}>
                      1 Following them.
                      <span className={`${styles.timestamp}`}>
                        {item.timestamp}
                      </span>
                    </span>
                  </div>
                  <div>
                    <Button variant="contained" className={`${styles.button}`}>
                      Follow
                    </Button>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
      <div className={`${styles.container}`}>
        <h1 className={`${styles.date}`}>This week</h1>
        {post.map((item, index) => {
          if (index <= 3) {
            return (
              <>
                <div className={`${styles.week}`} key={index}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.postImage}
                    sx={{ width: 48, height: 48 }}
                  />
                  <div className={`${styles.profile__Details}`}>
                    <span className={`${styles.user}`}>{item.user}</span>
                    <span className={`${styles.timeline}`}>
                      1 Following them.
                      <span className={`${styles.timestamp}`}>
                        {item.timestamp}
                      </span>
                    </span>
                  </div>
                  <div>
                    <Button variant="contained" className={`${styles.button}`}>
                      Follow
                    </Button>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Notifications;
