import React from 'react';
import styles from './CardBack.module.scss';

const CardBack = (props) => {

    const {description, first_brewed, ph, food_pairing, ibu} = props;

    return (
        <div className={styles.cardBack}>
            <h3>Description</h3>
            <p  className={styles.foodPairing}>{description}</p>
            <h3>Pairs well with</h3>
            <ul className={styles.foodList}>
                {food_pairing.map((meal, i) => (
                    <li key={i}>{meal}</li>
                ))}
            </ul>
            <h3>First brewed in</h3>
            <p>{first_brewed}</p>
            <p><span className={styles.info}>pH:</span> {ph} <span className={styles.info}>IBU:</span> {ibu}</p>  
        </div>
    )
}

export default CardBack
