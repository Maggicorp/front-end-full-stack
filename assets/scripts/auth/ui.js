'use strict'

const store = require('../store.js')

// const winsArray = require('../board/events.js')

const signUpSuccess = (data) => {
  console.log('reached sign up suceess')
  // $('.instruction-box').text('Great Job! Now sign in!')
  $('#sign-up').css('display', 'none')
}

const signUpFailure = () => {
  console.log('reached sign up failure')
  console.log('user name already in use')
  // $('.instruction-box').text('Something went wrong, try again')
}

const signInSuccess = (response) => {
  console.log('sign in successful')
  store.user = response.user
  $('.sign-out').css('display', 'block')
  $('.change-password').css('display', 'block')
  $('#sign-in').css('display', 'none')
  $('#sign-up').css('display', 'none')
}

const signInFailure = () => {
  console.log('something went wrong')
  // $('.instruction-box').text('Something went wrong, try again')
}
//
const changePasswordSuccess = (response) => {
  console.log('password changed')
}

const changePasswordFailure = () => {
console.log('something went wrong, password not changed')
}

// const signOutSuccess = () => {
//   $('.instruction-box').text('Goodbye')
//   store.user = null
//   store.games = null
//   $('.game_section').css('display', 'none')
//   $('.sign-out').css('display', 'none')
//   $('.create-game').css('display', 'none')
//   $('.change-password').css('display', 'none')
//   $('.display-all-games').css('display', 'none')
//   $('.display-one-game').css('display', 'none')
//   $('.get-all-games').css('display', 'none')
//   $('.get-one-game').css('display', 'none')
//   $('#sign-in').css('display', 'block')
//   $('#sign-up').css('display', 'block')
//   for (let i = 0; i < winsArray.length; i++) {
//     winsArray[i] = ''
//   }
//   $('.clear-input').trigger('reset')
// }
//
// const signOutFailure = () => {
//   $('.instruction-box').text('Something went wrong, try again')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure
  // signOutSuccess,
  // signOutFailure
}
