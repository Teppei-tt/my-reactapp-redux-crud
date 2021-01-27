import React from 'react';
import PropTypes from 'prop-types';
// 関数コンポーネント
const App = () => {
  const profiles = [
    { name: "Takemichi", age: 20},
    { name: "Zirou", age: 30},
    { name: "NoName", age: 4 }
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

User.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
