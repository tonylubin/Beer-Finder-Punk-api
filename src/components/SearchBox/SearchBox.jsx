import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBox.module.scss';

const SearchBox = ({ setSearchItem }) => {
    
    const getSearchItem = (e) => {
        setSearchItem(e.target.value);
    }

    return (
        <div className={styles.wrapper}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon}/>
            <input className={styles.inputBox} onInput={getSearchItem} type="text" placeholder='Search...'>
            </input>
        </div>
    )
}

export default SearchBox; 
