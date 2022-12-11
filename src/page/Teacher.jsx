import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import Cardteacher from './Cardteacher';
const Teacher = () => {
  return (
    <MainLayout>
    <div style={divStyle}>
    <h1>คณาจารย์ผู้สอน</h1>
    <Cardteacher/>
    </div>
    </MainLayout>
    
  )
}
const divStyle={
  borderRadius: 5,
  padding: 5,
  marginLeft: '10%',
  marginRight: '10%',
  marginBottom: 15,
}
export default Teacher;