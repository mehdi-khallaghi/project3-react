import React, { Component } from 'react'

export default class Modal2 extends Component {
    render() {
        return (
            <div>
                <div className="cd-popup is-visible" role='alert'>
                    <div className="cd-popup-container">
                        <p>{this.props.message}</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
  