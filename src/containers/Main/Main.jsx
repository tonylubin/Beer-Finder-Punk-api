import React from "react";
import Card from "../../components/Card/Card";
import styles from "./Main.module.scss";

const Main = ({ beersSearched }) => {
  return (
    <main className={styles.mainContainer}>
      <Card beersSearched={beersSearched} />
      {beersSearched.length === 0 && <p className={styles.notFound}>Sorry, no beers were found</p>}
    </main>
  );
};

export default Main;
