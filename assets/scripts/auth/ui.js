'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('reached sign up suceess')
  $('#sign-up').css('display', 'none')
}

const signUpFailure = () => {
  console.log('reached sign up failure')
  console.log('user name already in use')
}

const signInSuccess = (response) => {
  console.log('sign in successful')
  store.user = response.user
  $('.sign-out').css('display', 'block')
  $('.change-password').css('display', 'block')
  $('.get_advice').css('display', 'block')
  $('.alter_advice').css('display', 'block')
  $('#sign-in').css('display', 'none')
  $('#sign-up').css('display', 'none')
}

const signInFailure = () => {
  console.log('something went wrong')
}
//
const changePasswordSuccess = (response) => {
  console.log('password changed')
}

const changePasswordFailure = () => {
  console.log('something went wrong, password not changed')
}

const signOutSuccess = () => {
  console.log('sign out successful')
  store.user = null
  // store.games = null
  $('#sign-in').css('display', 'block')
  $('#sign-up').css('display', 'block')
  $('.get_advice').css('display', 'none')
  $('.alter_advice').cssgit('display', 'none')
  $('.change-password').css('display', 'none')
  $('#sign-up').css('display', 'none')
  $('.clear-input').trigger('reset')
}

const signOutFailure = () => {
  console.log('Something went wrong')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
