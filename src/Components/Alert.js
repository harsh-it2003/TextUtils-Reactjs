import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) => {
        let cpyStr = word.toUpperCase();
        return cpyStr[0] + word.slice(1);
    }

    return (
        <div style={{height:'50px'}}>
           {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>}
        </div>
    )
}
