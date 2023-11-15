import React from "react";
import CardFront from "../CardFront/CardFront";
import CardBack from "../CardBack/CardBack";
import styles from "./Card.module.scss";

const Card = React.forwardRef(({ beer }, ref) => {

  const {
    id,
    image_url,
    name,
    abv,
    tagline,
    first_brewed,
    description,
    ebc,
    food_pairing,
  } = beer;

  const toggleRotationClass = (e) =>
    e.currentTarget.classList.toggle(styles.cardDisplayRotate);

  const cardContent = (
    <>
      <div className={styles.cardDisplay__front}>
        <CardFront name={name} abv={abv} tagline={tagline} image={image_url} />
      </div>
      <div className={styles.cardDisplay__back}>
        <CardBack
          food_pairing={food_pairing}
          ebc={ebc}
          description={description}
          first_brewed={first_brewed}
        />
      </div>
    </>
  );

  return (
    <>
      {ref ? (
        <article
          className={styles.cardDisplay}
          key={id}
          onClick={toggleRotationClass}
          ref={ref}
        >
          {cardContent}  
        </article>
      ) : (
        <article
          className={styles.cardDisplay}
          key={id}
          onClick={toggleRotationClass}        
        >
          {cardContent}
        </article>
      )}
    </>
  );
});

export default Card;
