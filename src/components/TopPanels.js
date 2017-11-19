import React from 'react';
import {connect} from 'react-redux';
import UserCard from './UserCard'

class TopPanels extends React.Component {

  render() {
    const topPanelsClasses = "top-panels-view " + (this.props.activePerson1 ? "has-active-person" : "no-active-person");

    return (
      <div className={topPanelsClasses}>
        <ul className="top-panels-list">
          <li className="top-panels-list-item">
            <UserCard user={this.props.activePerson1} />
          </li>
          <li className="top-panels-list-item">
            <UserCard user={this.props.activePerson2} />
          </li>
          <li className="top-panels-list-item">
            <UserCard user={this.props.activePerson3} />
          </li>
        </ul>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activePerson1: state.activePerson1,
    activePerson2: state.activePerson2,
    activePerson3: state.activePerson3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPanels)