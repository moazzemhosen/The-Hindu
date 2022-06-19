import {
  HamburgerIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import {
  Button,
  IconButton,  Menu, MenuButton, MenuItem, MenuList
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React from 'react'
import { Link} from "react-router-dom";

import styles from '../style/RouteNav.module.css'
import { logoutAPI } from "../Redux/auth/auth.actions";


const RouteNav = () => {
   const dispatch = useDispatch();
   const { isAuth } = useSelector((state) => state.auth);

   const handleLoginClick = () => {
     dispatch(logoutAPI());
   };
  return (
    <div className={styles.nav}>
      <div className={styles.routenavdiv}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>New Tab</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuItem>Open Closed Tab</MenuItem>
            <MenuItem>Open File...</MenuItem>
          </MenuList>
        </Menu>

        <Button
          colorScheme="white"
          color="black"
          fontWeight="bold"
          fontSize="10px"
        >
          <Link to="/today">TODAY'S PAPER</Link>
        </Button>

        {/* NEWS */}

        <Menu>
          <Link to="/news">
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
          </Link>
          <MenuList>
            <MenuItem>
              <Link to="/india">INDIA</Link>
            </MenuItem>
            <MenuItem>WORLD</MenuItem>
            <MenuItem>STATE</MenuItem>
            <MenuItem>CITIES</MenuItem>
          </MenuList>
        </Menu>

        {/* OPINION */}
        <Menu>
          <Link to="/opinion">
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
          </Link>
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
          <Link to="/business">
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
          </Link>
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
          <Link to="/sports">
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
          </Link>
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
          <Link to="/entertainment">
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
          </Link>
          <MenuList>
            <MenuItem>ART</MenuItem>
            <MenuItem>DANCE</MenuItem>
            <MenuItem>MOVIES</MenuItem>
            <MenuItem>MUSIC</MenuItem>
            <MenuItem>REVIEWS</MenuItem>
            <MenuItem>THETERE</MenuItem>
          </MenuList>
        </Menu>
        <Link to="/crossword">
          <Button
            padding="0px"
            colorScheme="white"
            color="black"
            fontWeight="bold"
            fontSize="10px"
          >
            CROSSWORD+
          </Button>
        </Link>
        <Link to="/science">
          <Button
            padding="0px"
            colorScheme="white"
            color="black"
            fontWeight="bold"
            fontSize="10px"
          >
            SCIENCE
          </Button>
        </Link>
      </div>
      <div className={styles.navright}>
        <Button
          colorScheme="blue"
          color="white"
          fontWeight="bold"
          fontSize="10px"
        >
          GET TRIAL
        </Button>

        <Button
          colorScheme="yellow"
          color="white"
          fontWeight="bold"
          fontSize="10px"
        >
          SUBSCRIBE NOW
        </Button>
        <Link to="/login">
          <Button
            colorScheme="white"
            color="blue"
            fontWeight="bold"
            fontSize="10px"
            variant="outline"
            onClick={handleLoginClick}
          >
            {isAuth ? "LOGOUT" : "LOGIN"}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default RouteNav