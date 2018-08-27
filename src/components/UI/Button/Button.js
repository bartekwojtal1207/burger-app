import React from 'react';

import Aux from '../../../hoc/Auxs/Auxs';
import classes from './Button.css';
import PropTypes from "prop-types";
;


const button = (props) => {
    return(
        <Aux>
            <button onClick={props.clicked}
                    className={[classes.Button, classes[props.btnType]].join(' ')}>{props.children}</button>
        </Aux>
    )
};


button.propTypes = {
    btnType: PropTypes.string.isRequired
};

export default button;