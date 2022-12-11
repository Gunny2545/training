import React from 'react'

const NameCard = (props) => {
    return (
    <div style={divStyle}>
        <p>
            Basic React Native {props.title}
        </p>
        <p>
            Duration : 5 days {props.duration}
        </p>
        <p>
            Price for 1 person : 7500{props.price1}
        </p>
        <p>
            Price for 2 person : 6900{props.price2}
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
      fontWeight: 'bold',
      fontFamily: 'courier',
      marginBottom: 15,
  }
  export default NameCard