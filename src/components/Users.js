import React, {Fragment} from 'react' 
import UserItem from './UserItem'

const Users = ({users, showAddressInformation, showAddress}) => {

    const handleShowAddress = () => {
        showAddressInformation()
    }

    return(
        <Fragment>
            <h1> User Information</h1>
            <button className='showAddress-btn' onClick={handleShowAddress}>Show Address</button>
            {users.map(user => (
                <UserItem key={user.id} user={user} showAddress={showAddress}/>
            ))}
        </Fragment>
    )
}

export default Users