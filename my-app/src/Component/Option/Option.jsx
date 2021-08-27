import React from 'react'

export function Option(props) {
    return(
        <option value={props.value}>
            {props.text}
        </option>
    );
}
