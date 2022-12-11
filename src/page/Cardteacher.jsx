import React from 'react'

const NameCard = (props) => {
    return (
    <div style={divStyle}>
        <p>
            Name : John Snow {props.name}
        </p>
        <p>
            Email : jsnow@nvctrainingcenter.com {props.email}
        </p>
        <p>
            Speciallist : Mobile Application{props.specialist}
        </p>
    </div>
    )
  }
  const divStyle={
      border: '1px solid black',
      borderRadius: 5,
      padding: 20,
      marginLeft: '20%',
      marginRight: '20%',
      marginBottom: 15,
  }
  export default NameCard