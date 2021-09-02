import React from 'react';
import Users from './components/Users'
import Loading from './components/Loading'
import axios from 'axios'
import './App.css';

class App extends React.Component {

  state = {
    loading: false,
    users: [],
    showAddress: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios('https://jsonplaceholder.typicode.com/users')
    this.setState({loading: false, users: res.data})
  }

  render() {
    const {loading, users, showAddress} = this.state

    const showAddressInformation = () => {
        if (showAddress) {
          this.setState({showAddress: false})
        } else {
          this.setState({showAddress: true})
        }
      }

      if (loading) {
        return <Loading />
      }


  return (
    <div className="App">
      <Users users={users} showAddressInformation={showAddressInformation} showAddress={showAddress} />
 
    </div>
  );
}

}

export default App;


