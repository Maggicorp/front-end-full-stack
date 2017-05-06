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
  $('.add-advice').css('display', 'block')
  $('.add-default-advice').css('display', 'block')
  $('.delete-all').css('display', 'block')
  $('.delete-advice').css('display', 'block')
  $('.edit_advice').css('display', 'block')
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
  $('.alter_advice').css('display', 'none')
  $('.change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('.get_advice').css('display', 'none')
  $('.add-advice').css('display', 'none')
  $('.add-default-advice').css('display', 'none')
  $('.delete-all').css('display', 'none')
  $('.delete-advice').css('display', 'none')
  $('.edit_advice').css('display', 'none')
  $('.clear-input').trigger('reset')
}

const signOutFailure = () => {
  console.log('Something went wrong')
}

const adviceIndexFail = (response) => {
  console.log('something went wrong')
}

const adviceIndexSucces = (response) => {
  // console.log('success')
  console.log('advice index repsonse', response)
  store.advices = response.advices
  // console.log(response.advices[0].idea)
  // console.lgog(store.advices[0].idea)
  // console.log(store.advices.length)
  const num = store.advices.length
  const randNum = Math.floor(Math.random() * num)
  // console.log(randNum)
  // console.log(response.advices[randNum].idea)
  $('#display_advice').text('Hello, ' + response.advices[randNum].idea + ' ! (id: ' + response.advices[randNum].id + ')')
}

const adviceAddSuccess = (response) => {
  console.log('success')
  console.log(response)
  console.log(response.advices)
}
const adviceAddFail = (response) => {
  console.log('something went wrong')
}

const adviceDeleteSuccess = () => {
  console.log('success')
}
const adviceDeleteFail = () => {
  console.log('something went wrong')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  adviceIndexSucces,
  adviceIndexFail,
  adviceAddSuccess,
  adviceAddFail,
  adviceDeleteSuccess,
  adviceDeleteFail
}
