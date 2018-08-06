import React from 'react';
import Aux from '../../../hoc/Auxs';

import classes from './Modal.css';

const modal = (props) => {
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
};


export default modal;