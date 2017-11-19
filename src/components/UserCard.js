import React from 'react';
import {connect} from 'react-redux';

class UserCard extends React.Component {

  render() {
    const user = this.props.user || {};

    return (
      <div className="user-card">
        {user.personId}
        <img src={user.img} className="person-thumb-lg" />
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