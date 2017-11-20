import React from 'react';
import {connect} from 'react-redux';

class UserCard extends React.Component {

  render() {
    const user = this.props.user || {};

    return (
      <div className="user-card">
        

        <div className="user-card-img-wrapper">
          <img src={user.img} className="person-thumb-lg" />
        </div>
        <h5>
          {user.fullName}
        </h5>
        <p className="user-card-bio">
          {user.bio}
        </p>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCard)