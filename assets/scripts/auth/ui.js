'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('reached sign up suceess')
  $('#sign-up').css('display', 'none')
  $('#sign-up-error').text('')
}

const signUpFailure = () => {
  console.log('reached sign up failure')
  console.log('user name already in use')
  $('#sign-up-error').text("error: user name taken or passwords don't match")
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
  $('#sign-up-error').text('')
  $('#sign-in-error').text('')
  $('#display_advice').text('take your own advice')
}

const signInFailure = () => {
  console.log('something went wrong')
  $('#sign-in-error').text("error: incorrect password or passwords don't match")
}
//
const changePasswordSuccess = (response) => {
  console.log('password changed')
  $('#change-password-success').text('success! password was changed')
  $('#change-password-error').text('')
  $('.change-password').trigger('reset')
}

const changePasswordFailure = () => {
  console.log('something went wrong, password not changed')
  $('#change-password-error').text('error: password not changed')
  $('#change-password-success').text('')
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
  $('.error-message').text('')
  $('.success-message').text('')
  $('#display_advice').text('take your own advice')
}

const signOutFailure = () => {
  console.log('Something went wrong')
}

const adviceIndexFail = (response) => {
  console.log('something went wrong')
  $('#display_advice').text('No advice to show, add some advice')
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
  $('.add-advice').trigger('reset')
  $('#add-advice-success').text('advice added')
  $('#add-advice-error').text('')
}

const adviceAddDefaultSuccess = (response) => {
  console.log('success')
  console.log(response)
  console.log(response.advices)
  $('#add-default-advice-success').text('advice added')
}

const adviceAddFail = (response) => {
  console.log('something went wrong')
  $('#add-advice-error').text('error: please input advice')
  $('#add-advice-success').text('')
}

const adviceDeleteSuccess = () => {
  console.log('success')
  $('.delete-advice').trigger('reset')
  $('#delete-advice-error').text('')
  $('#delete-advice-success').text('advice deleted')
}
const adviceDeleteFail = () => {
  console.log('something went wrong')
  $('#delete-advice-error').text('please enter valid advice id number')
  $('#delete-advice-success').text('')
}

const adviceEditSuccess = (response) => {
  console.log('success')
  $('.edit_advice').trigger('reset')
  console.log(response)
  console.log(response.advices)
  $('#edit-advice-error').text('')
  $('#edit-advice-success').text('advice edited')
}
const adviceEditFail = (response) => {
  console.log('something went wrong')
  $('#edit-advice-error').text('please enter valid advice id number')
  $('#edit-advice-success').text('')
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
  adviceDeleteFail,
  adviceEditSuccess,
  adviceEditFail,
  adviceAddDefaultSuccess
}
