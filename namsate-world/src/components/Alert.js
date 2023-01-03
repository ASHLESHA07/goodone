import React from 'react'

export default function Alert(props) {
    return (
        props.Alert &&<div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            {props.Alert.type} : {props.Alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

        </div>
    )
}
