import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Modal.css'

export default class Modal2 extends Component {
    render() {
        return (
            <div>
                <div className="cd-popup is-visible" role='alert'>
                    <div className="cd-popup-container">
                        <p>{this.props.state}</p>
                        <p>{this.props.message}</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
/*-----------------------proptypes-----------------------------------------*/
Modal2.propTypes = {
    // message : propTypes.string,
    message: propTypes.string.isRequired, //اجباری
    state: propTypes.oneOf(['true', 'false'])
}
/*--------------------------defaultprops-----------------------------------------------*/
Modal2.defaultProps = {
    message: 'دسترسی با مشکل مواجه شده صبور باشید'
}