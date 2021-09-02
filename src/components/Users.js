import React from 'react' 
import User from './User'

const Users = ({users, showAddressInformation, showAddress}) => {

    const handleShowAddress = () => {
        showAddressInformation()
    }

    return(
        <div className = 'container'>
            <h1> User Information</h1>
            <button className='showAddress-btn' onClick={handleShowAddress}>Show Address</button>
            {users.map(user => (
                <User key={user.id} user={user} showAddress={showAddress}/>
            ))}
        </div>
    )
}

export default Users