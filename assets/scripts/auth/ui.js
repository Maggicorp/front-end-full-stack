'use strict'

const store = require('../store.js')

// const winsArray = require('../board/events.js')

const signUpSuccess = (data) => {
  console.log('reached sign up suceess')
  $('.instruction-box').text('Great Job! Now sign in!')
  $('#sign-up').css('display', 'none')
}

const signUpFailure = () => {
  console.log('reached sign up failure')
  $('.instruction-box').text('Something went wrong, try again')
}
//
// const signInSuccess = (response) => {
//   $('.instruction-box').text('You did it! Now you can play! You must click create game to start a new game. ')
//   store.user = response.user
//   $('#display-all-games').text('')
//   $('#display-one-game').text('')
//   $('.sign-out').css('display', 'block')
//   $('.create-game').css('display', 'block')
//   $('.change-password').css('display', 'block')
//   $('.display-all-games').css('display', 'block')
//   $('.display-one-game').css('display', 'block')
//   $('.get-all-games').css('display', 'block')
//   $('.get-one-game').css('display', 'block')
//   $('#sign-in').css('display', 'none')
//   $('#sign-up').css('display', 'none')
// }
//
// const signInFailure = () => {
//   $('.instruction-box').text('Something went wrong, try again')
// }
//
// const changePasswordSuccess = (response) => {
//   $('.instruction-box').text('password successfully changed')
// }
//
// const changePasswordFailure = () => {
//   $('.instruction-box').text('Something went wrong, try again')
// }

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
  signUpFailure
  // signInFailure,
  // signInSuccess,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
