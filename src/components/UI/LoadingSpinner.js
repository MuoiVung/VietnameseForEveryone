import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <main className={classes.container}>
            <div className={classes.spinner} ></div>
        </main>
    );
};

export default LoadingSpinner;