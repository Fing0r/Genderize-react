import Button from "./Button"
import TextInput from "./TextInput"
import SpanMessage from "./SpanMessage"
import React, {ChangeEvent, useState} from 'react'
import API from '../api/API'

const URL = (name: string) => `${API.GENDERIZE}?name=${name.trim()}`

function Genderize() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
        setMessage("")
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (name.length < 3) {
            setMessage("Введите больше 2 символов");
            return;
        }

        try {
            await requestForGender();
        } catch (error) {
            console.log(error)
        }
    }

    async function requestForGender() {
        const response = await fetch(URL(name));
        const {gender}: {gender: string} = await response.json();
        const message = gender ? `Ваш гендер ${gender}` : `Имя ${name} некорректно`
        setGender(gender);
        setMessage(message);
        setName("");
    }


    return (
        <form className="gender" onSubmit={handleSubmit}>
            <fieldset className="gender__fieldset">
                <legend>Узнайте свой гендер</legend>
                <TextInput
                    name={name}
                    onChange={handleChange}
                />
                <Button/>
                <SpanMessage
                    gender={gender}
                    message={message}
                />
            </fieldset>
        </form>
    )
}


export default Genderize
