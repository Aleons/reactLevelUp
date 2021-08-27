import React from 'react'
import { Option } from '../Option/Option'

export function Select(props) {
    const optionsData = props.optionsData.map((option) =>
        <Option value ={option.value} text = {option.text}/>
    );
    return(
        <select>
            {optionsData}
        </select>
    )
}