import React from 'react'
import {ITextInput} from "../Interfaces";


function TextInput(props: ITextInput) {
    const {name, onChange} = props

    return <input
        type="text"
        value={name}
        onChange={onChange}
        placeholder="Введите имя"
        className="gender__name"/>
}

export default TextInput
