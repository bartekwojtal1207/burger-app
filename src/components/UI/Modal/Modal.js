import React, { Component } from 'react';
import Aux from '../../../hoc/Auxs/Auxs';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';

class Modal extends Component {
    shoulComponentUpdate(nextProps, nextState) {
       return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {

    }

    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;