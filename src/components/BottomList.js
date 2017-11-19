import React from 'react';
import {connect} from 'react-redux';

class BottomList extends React.Component {

  render() {
    let self = this;
    const peopleListItems = this.props.peopleData.map(function(person) {
      
      return (
           <li className="personThumbListItem" key={person.personId} onClick={() => self.props.updateActivePerson(person) }>
              <img src={person.img} className="personThumb" />
           </li>
         )

     });

    return (
   
      <div className="bottom-list-view">
        <ul className="personThumbList">
          {peopleListItems}
        </ul>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    peopleData: state.peopleData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateActivePerson: (newPerson) => dispatch({
      type : 'updateActivePerson',
      payload: {
        updateActivePerson: newPerson
      }
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomList)