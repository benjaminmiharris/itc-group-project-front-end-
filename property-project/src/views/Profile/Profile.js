import React from 'react'
import './Profile.css'
import { Container } from 'react-bootstrap'
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer'


const Profile = () => {
  return (
    <>
        <Container className='profile'>
            <ProfileContainer className='profile-container' />
        </Container>
        
      
    </>
  )
}

export default Profile
