import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayText from './DisplayText';

function App() {
  const  getUserFullName = async (username:string):Promise<string> => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
      if(usersResponse.ok){
        const users = await usersResponse.json();
        const userByName = users.find((user:any) => {
          return user.username.toLowerCase() === username;
        });
        return userByName.name;
      }
      return "";

  }
  return (
    <div className="App">
      <DisplayText getUserFullname = {getUserFullName} />
    </div>
  );
}

export default App;
