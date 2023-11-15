import React from 'react';
import styles from './SearchBox.module.scss';
import SearchIcon from '../Icons/SearchIcon';

function SearchBox({ setSearchItem }) {

    const getSearchItem = (e) => {
        setSearchItem(e.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <SearchIcon classname={styles.icon}/>
            <input className={styles.inputBox} onInput={getSearchItem} type="text" placeholder='Search...'>
            </input>
        </div>
    );
}

export default SearchBox; 
