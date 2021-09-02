import React from 'react'

const Address = ({user}) => {
    return (
        <div className='address'>
            <h2>Address: </h2>
            <p> Street: {user.address.street}</p>
            <p> City: {user.address.city}</p>
        </div>
    )
}

export default Address