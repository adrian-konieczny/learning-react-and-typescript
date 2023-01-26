import React, {useCallback, useEffect, useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './GreetingFunctional';
import ListCreator, { ListItem, ListItems } from './ListCreator';


const reducer = (state: any, action: any) => {
  console.log("enteredNameReducer");

  switch(action.type){
    case "enteredName":
      if(state.enteredName === action.payload){
        return state;
      }
      return {...state, enteredName: action.payload}
    case "message":
      if(action.payload!=="")return {...state, message: `Witaj, ${action.payload}`}
      return ({...state, message: action.payload})
    default:
      throw new Error(`Nieprawidłowy typ akcji: ${action.type}`);
  }
}

const initialState = {
  enteredName: "",
  message: ""
}

function App() {
  const [{message, enteredName}, dispatch] = useReducer(reducer, initialState);
  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);

  const setCountCallback = useCallback(() => {
    const inc = count + 1 > startCount ? count + 1 : Number(count+1)+startCount;
    setCount(inc);
  }, [count, startCount]);

  const [listItems, setListItems] = useState<Array<ListItem>>()
  useEffect(()=>{
    const li=[];
    for(let i=0;i < count; i++){
      li.push({id:i});
    }
    setListItems(li);
  }, [count]);

  const onWeclomeBtnClick = () => {
    setCountCallback();
  }
  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting message={message} enteredName={enteredName} greetingDispatcher={dispatch}/>
        <div style={{marginTop: '10px'}}>
          <label>Wpisz liczbę i ją inkrementuj</label>
          <br />
          <input value={count} onChange={onChangeStartCount} style={{width: '1.75rem'}}/>&nbsp;
          <label>{count}</label>
          <br />
          <button onClick={onWeclomeBtnClick}>Inkrementuj liczbe</button> 
        </div>
        <div>
          <ListCreator listItems={listItems} />
        </div>
      </header>
    </div>
  );
}

export default App;
