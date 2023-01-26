import React from "react";
interface GreetingProps{
    message: string;
}
export default function Greeting(props: GreetingProps){
    console.log("Renderuje Greetings");
    return (
        <div>
            {props.message}
        </div>
    )
}