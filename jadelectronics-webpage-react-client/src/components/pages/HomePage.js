//external imports
import React from 'react';

class HomePage extends React.Component {

    constructor(){
        super();
        this.state = {
            users: []
        };

    }

    componentDidMount() {
        let users = this.state.users;
        fetch('/users')
            .then((resp) => resp.json())
            .then((data) => {
                data.rows.forEach(function(doc) {
                    users.push(doc.doc);
                });
                this.setState({users})
                console.log(users)
            });
    }

  render() {
      return (
        <div className="container-fluid">
           <h1>This is the home page</h1>
            {this.state.users.map(user =>
                <div key={user._id}>{user.username}</div>
            )}
        </div>
    );
  }

}
export default HomePage;