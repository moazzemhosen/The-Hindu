import { Search2Icon } from '@chakra-ui/icons';
import React from 'react'
import styles from "../style/styles.module.css";

const Social = () => {
  return (
    <div className={styles.flexdiv}>
      <div className={styles.socialicon}>
        <ul className={styles.socialarea}>
          <li>
            <img
              src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-facebook-logo.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-512.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888853.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://www.clipartmax.com/png/middle/137-1375168_instagram-logo-free-social-media-icons-flaticon-instagram-logo-png.png"
              width="25px"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"
              width="25px"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div className={styles.searchbar}>
        <form className={styles.form}>
          <input type="text" />
          <button>
            <Search2Icon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Social