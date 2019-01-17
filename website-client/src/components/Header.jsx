import React from 'react';

export default function Header(props) {

  return (
    <div className="App">
      <div className="parallax img-1">
        <h1 className="name">{props.info.name}</h1>
      </div>
    </div>
  )

}