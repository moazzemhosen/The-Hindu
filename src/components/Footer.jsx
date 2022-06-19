import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {  ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import styles from "../style/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bgcolor}>
      <div className={styles.griddiv}>
        <div>
          <ul className={styles.socialarea}>
            <li>
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
                width="25px"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
                width="25px"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
                width="25px"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
                width="25px"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png"
                width="25px"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className={styles.image}>
          <img
            src="https://www.thehindu.com/theme/images/th-online/logo.png"
            alt=""
          />
        </div>
        <div className={styles.inputarea}>
          <input type="text" placeholder="Search here" />
          <button>Search</button>
        </div>
      </div>
      <div>
        <div className={styles.routenavdiv}>
          <Button
            colorScheme="white"
            color="black"
            fontWeight="bold"
            fontSize="10px"
          >
            HOME
          </Button>

          {/* NEWS */}

          <Menu>
            <MenuButton
              padding="0px"
              colorScheme="white"
              color="black"
              fontWeight="bold"
              fontSize="10px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              NEWS
            </MenuButton>
            <MenuList>
              <MenuItem>INDIA</MenuItem>
              <MenuItem>WORLD</MenuItem>
              <MenuItem>STATE</MenuItem>
              <MenuItem>CITIES</MenuItem>
            </MenuList>
          </Menu>

          {/* OPINION */}
          <Menu>
            <MenuButton
              padding="0px"
              colorScheme="white"
              color="black"
              fontWeight="bold"
              fontSize="10px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              OPINION
            </MenuButton>
            <MenuList>
              <MenuItem>CARTOON</MenuItem>
              <MenuItem>COLUMNS</MenuItem>
              <MenuItem>EDITORIAL</MenuItem>
              <MenuItem>INTERVIEW</MenuItem>
              <MenuItem>LEAD</MenuItem>
              <MenuItem>READER'S EDITORIAL</MenuItem>
              <MenuItem>COMMENT</MenuItem>
              <MenuItem>OPEN PAGE</MenuItem>
              <MenuItem>LETTERS</MenuItem>
            </MenuList>
          </Menu>
          {/* BUSINESS */}
          <Menu>
            <MenuButton
              padding="0px"
              colorScheme="white"
              color="black"
              fontWeight="bold"
              fontSize="10px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              BUSINESS
            </MenuButton>
            <MenuList>
              <MenuItem>AGRI-BUSINESS</MenuItem>
              <MenuItem>INDUSTARY</MenuItem>
              <MenuItem>ECHONOMY</MenuItem>
              <MenuItem>MARKETS</MenuItem>
              <MenuItem>BUDGET 2022</MenuItem>
              <MenuItem>STOCK QUOTES</MenuItem>
            </MenuList>
          </Menu>

          {/* SPORTS */}
          <Menu>
            <MenuButton
              padding="0px"
              colorScheme="white"
              color="black"
              fontWeight="bold"
              fontSize="10px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              SPORTS
            </MenuButton>
            <MenuList>
              <MenuItem>CRICKET</MenuItem>
              <MenuItem>FOOTBALL</MenuItem>
              <MenuItem>HOCKEY</MenuItem>
              <MenuItem>TENNIS</MenuItem>
              <MenuItem>ATHLETICS</MenuItem>
              <MenuItem>MOTORSPORTS</MenuItem>
              <MenuItem>RACES</MenuItem>
              <MenuItem>OTHER SPORTS</MenuItem>
            </MenuList>
          </Menu>

          {/* ENTERTAINMENT */}

          <Menu>
            <MenuButton
              padding="0px"
              colorScheme="white"
              color="black"
              fontWeight="bold"
              fontSize="10px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              ENTERTAINMENT
            </MenuButton>
            <MenuList>
              <MenuItem>ART</MenuItem>
              <MenuItem>DANCE</MenuItem>
              <MenuItem>MOVIES</MenuItem>
              <MenuItem>MUSIC</MenuItem>
              <MenuItem>REVIEWS</MenuItem>
              <MenuItem>THETERE</MenuItem>
            </MenuList>
          </Menu>
          <Button
            padding="0px"
            colorScheme="white"
            color="black"
            fontWeight="bold"
            fontSize="10px"
          >
            CROSSWORD+
          </Button>

          <Button
            padding="0px"
            colorScheme="white"
            color="black"
            fontWeight="bold"
            fontSize="10px"
          >
            SCIENCE
          </Button>
        </div>
        <div className={styles.footerdetails}>
          <p>About Us</p>
          <p>Terms and Use</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          <p>Archive</p>
          <p>Print Subscription</p>
          <p>ePaper</p>
          <p>Digital Subscription</p>
          <p>Rss Feeds</p>
          <p>Sitemap</p>
        </div>
        <div className={styles.footerdetails2}>
          <p>The Hindu</p>
          <p>இந்து தமிழ் திசை</p>
          <p>Business Line</p>
          <p>BL on Campus</p>
          <p>Sportstar</p>
          <p>Frontline</p>
          <p>The Hindu Centre</p>
          <p>RoofandFloor</p>
          <p>STEP</p>
          <p>Young World Club</p>
          <p>Publications</p>
          <p>eBooks</p>
          <p>Images</p>
          <p>Classifieds</p>
        </div>
        <div className={styles.copyright}>
          CONTACT US
          <p>Copyright© 2022, THG PUBLISHING PVT LTD.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
