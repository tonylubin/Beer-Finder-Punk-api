import React from "react";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";
import styles from "./Card.module.scss";

const Card = ({ beersSearched }) => {

  const toggleRotationClass = (e) => e.currentTarget.classList.toggle(styles.cardDisplayRotate);

  const getBeerCard = (props) => {
    const {
      id,
      image_url,
      name,
      abv,
      tagline,
      ph,
      first_brewed,
      description,
      ibu,
      food_pairing,
    } = props;

    return (
      <article className={styles.cardDisplay} key={id} onClick={toggleRotationClass}>
        <div className={styles.cardDisplay__front}>
          <CardFront
            name={name}
            abv={abv}
            tagline={tagline}
            image={image_url}
          />
        </div>
        <div className={styles.cardDisplay__back}>
          <CardBack
            food_pairing={food_pairing}
            ibu={ibu}
            ph={ph}
            description={description}
            first_brewed={first_brewed}
          />
        </div>
      </article>
    );
  };

  return <>{beersSearched.map(getBeerCard)}</>;
};

export default Card;
