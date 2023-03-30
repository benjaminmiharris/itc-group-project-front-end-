import React, { useEffect } from 'react'
import './ProfileContainer.css'
import { Card } from 'react-bootstrap'
import { Grid } from '../uikit/Grid/Grid'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'


const ProfileContainer = () => {

//     const getUserInfo = async (firstName, lastName, email, phoneNumber) => {
//         const res =  await axios.get('http://localhost:3002/getUserById', {
//             firstName,
//             lastName,
//             email,
//             phoneNumber
//         }).catch(err => console.log(err));
//         const data = await res.data;
//         console.log(data)
//         return data;
//     }
    
// useEffect(() => {
//     getUserInfo()
// })

  return (
    <div className='profile-container'>        
      <Grid className='grid-container'>
        <div className='icon-container'>
            <FontAwesomeIcon icon={faUser} className='profile-icon' />
        </div>
        <Card className='profile-card'>
            <p className='card-title'>Name</p>
            <p className='card-details'>John Doe</p>
        </Card>
        <Card className='profile-card'>
            <p className='card-title'>Email</p>
            <p className='card-details'>sample@email.com</p>
        </Card>
        <Card className='profile-card'>
            <p className='card-title'>Phone Number</p>
            <p className='card-details'>123-456-7890</p>
        </Card>
      </Grid>
    </div>
  )
}

export default ProfileContainer
