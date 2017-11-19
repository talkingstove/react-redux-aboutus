import { createStore } from 'redux';

function reducer(state, action) {

  if (!action) {
    return state;
  }
  
  switch (action.type) {
    case 'updateActivePersonId':

      return Object.assign({}, state, {
        activePersonId: action.payload.activePersonId
      })
      
    default:
      return state;
  }

}

//in a real app people data would be sourced from an endpoint
const defaultState = {
  peopleData: [
    {
      personId: 1,
      fullName: 'Flemish Giant',
      img: '/img/users/1.jpg',
      bio: 'Hopping is enjoyable!'
    },
    {
      personId: 2,
      fullName: 'Roger Rabbit',
      img: '/img/users/2.jpg',
      bio: 'Expert carrot analyst'
    },
    {
      personId: 3,
      fullName: 'Josephine Lapin',
      img: '/img/users/3.jpg',
      bio: 'Timothy hay expert'
    },
    {
      personId: 4,
      fullName: 'Coder Rabbit',
      img: '/img/users/4.jpg',
      bio: 'Coding and hopping'
    },
    {
      personId: 5,
      fullName: 'HR Rabbit',
      img: '/img/users/5.jpg',
      bio: 'Ask about our maternity policy'
    },
    {
      personId: 6,
      fullName: 'Marketing Rabbit',
      img: '/img/users/6.jpg',
      bio: 'Let\'s network!'
    },
    {
      personId: 7,
      fullName: 'John Rabbit',
      img: '/img/users/7.jpg',
      bio: 'I\'m listening'
    },
    {
      personId: 8,
      fullName: 'Janet Rabbit',
      img: '/img/users/8.jpg',
      bio: 'Grapes are tasty!'
    },
    {
      personId: 9,
      fullName: 'Maria Rabbit',
      img: '/img/users/9.jpg',
      bio: 'I am not a fan of owls'
    },
    {
      personId: 10,
      fullName: 'Freddie Rabbit',
      img: '/img/users/10.jpg',
      bio: 'I enjoy hiking and badminton'
    },
    {
      personId: 11,
      fullName: 'Melissa Rabbit',
      img: '/img/users/11.jpg',
      bio: 'Baby carrots are the best'
    },
    {
      personId: 12,
      fullName: 'Reggie Rabbit',
      img: '/img/users/12.jpg',
      bio: 'Adopt don\'t shop!'
    },
    {
      personId: 13,
      fullName: 'Anthony Rabbit',
      img: '/img/users/13.jpg',
      bio: 'I am a serious business rabbit'
    },
    {
      personId: 14,
      fullName: 'Paige Rabbit',
      img: '/img/users/14.jpg',
      bio: 'On the weekends I like to hop'
    },
    {
      personId: 15,
      fullName: 'Athena Rabbit',
      img: '/img/users/15.jpg',
      bio: 'Digging holes has always been a passion of mine'
    }
  ],
  activePersonId: null
};

export const appStore = createStore(reducer, defaultState);



