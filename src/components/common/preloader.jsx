import React from 'react';
import preloader from '../../assets/images/preloader.svg';
import p from './preloader.module.css';

let Preloader = () => {
    return (
        <div className={p.preloader}>
            <img src={preloader} alt='preloader' />
        </div>
    )
}

export default Preloader;