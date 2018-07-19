import React, { Component } from 'react';
import Aux from '../../hoc/Auxs';
import classes from './Layout.css';


const layout = (props) => {
    return (
        <Aux>
            <div>
                toollbar, sidebar, backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
};


export default layout;