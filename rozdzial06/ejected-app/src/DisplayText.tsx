import React, {FC, useState} from "react";
import UserTodos from "./UserTodos"
type DisplayTextProps = {
    getUserFullname: (username: string) => Promise<string>;
}

const DisplayText :FC<DisplayTextProps> = ({getUserFullname}) => {
    const [txt,setTxt] = useState("");
    const [msg, setMsg] = useState("");
    const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>();
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTxt(e.target.value);
    }
    const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setMsg(`Witaj na zajęciach z Reactowania, ${await getUserFullname(txt)}`);
        setTodoControl(<UserTodos username={txt} />);
    }
    
    return (
        <form >
            <div>
                <label >
                   Jak masz na imię? 
                </label>
            </div>
            <div>
                <input data-testid="user-input" value = {txt} onChange = {onChange}/>
            </div>
            <div>
                <button data-testid="input-submit" onClick={onClickShowMsg}>Wyświetl komunikat</button>
            </div>
            <div>
                <label data-testid="final-msg">{msg}</label>
            </div>
            <div>
                <ul style = {{marginTop: '1rem', listStyleType: 'none'}}>
                    {todoControl}
                </ul>
            </div>
        </form>
    )
}
export default DisplayText;