import React from "react";
interface GreetingProps{
    enteredName: string;
    message: String;
    greetingDispatcher: React.Dispatch<{type: string, payload: string}>
}

export default function Greeting(props: GreetingProps){
    console.log("Renderuję komponent Greeting");
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.greetingDispatcher({type: "enteredName", payload: e.target.value});
        props.greetingDispatcher({type: "message", payload: e.target.value});
    }
    return (
        <div>
            <input value = {props.enteredName} onChange={onChangeName} /> <br />
            {props.message}
        </div>
    )
}