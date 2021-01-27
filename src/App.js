import React from 'react';

// 関数コンポーネント
const App = () => {
  const profiles = [
    { name: "Takemichi", age: 20},
    { name: "Zirou", age: 30},
    { name: "NoName" }
  ]
  return  (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.defaultProps = {
  age: 1
}

export default App;
