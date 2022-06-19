import { Button } from '@chakra-ui/react';
import React from 'react'
import styles from "../style/TrandingNav.module.css";

const TrandingNav = () => {
  return (
    <div className={styles.trandingnav}>
      <Button
        h="20px"
        padding="0px"
        colorScheme="white"
        color="red"
        fontWeight="bold"
        fontSize="11px"
      >
        TRENDING TODAY
      </Button>
      <Button
        h="20px"
        padding="0px"
        colorScheme="white"
        color="gray"
        fontWeight="bold"
        fontSize="11px"
      >
        RUSSIA-UKRINEN CRISIS
      </Button>
      <Button
        h="20px"
        padding="0px"
        colorScheme="white"
        color="gray"
        fontWeight="bold"
        fontSize="11px"
      >
        CORONAVIRUS
      </Button>
      <Button
        h="20px"
        padding="0px"
        colorScheme="white"
        color="gray"
        fontWeight="bold"
        fontSize="11px"
      >
        IPL
      </Button>
    </div>
  );
}

export default TrandingNav