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
  store.advices = null
  store.currentNum = null
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
  console.log('something went wrong on getting advice index')
  $('#display_advice').text('No advice to show, add some advice')
}

// gets array of all the users' advice and then shows one peices of advice
const adviceIndexSucces = (response) => {
  console.log('advice index repsonse', response)
  $('.error-message').text('')
  $('.success-message').text('')
  store.advices = response.advices
  const num = store.advices.length
  const randNum = Math.floor(Math.random() * num)
  store.currentNum = randNum
  $('#display_advice').text(store.advices[randNum].idea + '! (id: ' + store.advices[randNum].id + ')')
}

let added

const adviceAddSuccess = (response) => {
  console.log('success')
  console.log(response)
  console.log(response.advices)
  $('.add-advice').trigger('reset')
  if (added !== false) {
    $('#add-advice-success').text('poignant advice added')
    added = !added
  } else {
    $('#add-advice-success').text('clever advice added')
    added = !added
  }
  $('#add-advice-error').text('')
}

const adviceAddDefaultSuccess = (response) => {
  console.log('success')
  console.log(response)
  console.log(response.advices)
  if (added === true) {
    $('#add-default-advice-success').text('brilliant advice added')
    added = !added
  } else {
    $('#add-default-advice-success').text('excellent advice added')
    added = !added
  }
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

const adviceDeleteAllSuccess =
(response) => {
  console.log('success on delete all')
  console.log(response)
  $('#delete-all-error').text('')
  $('#delete-all-success').text('all advice was deleted')
  $('#display_advice').text('all advice deleted, add new advice')
}

const adviceDeleteAllFail = (response) => {
  console.log('something went wrong deleting it all ')
  $('#delete-all-error').text('no advice to delete')
  $('#delete-all-success').text('')
}

const takeNoAdviceSuccess = (response) => {
  console.log(response)
  console.log('success on take no advice')
  $('#take-advice-error').text('')
  $('#take-advice-success').text('response successfully recorded')
}
const takeNoAdviceFail = (response) => {
  console.log(response)
  console.log('fail on take no advice')
  $('#take-advice-error').text('You must get advice before you can take it')
  $('#take-advice-success').text('')
}

const takeYesAdviceSuccess = (response) => {
  console.log(response)
  console.log('success on take Yes advice')
  $('#take-advice-error').text('')
  $('#take-advice-success').text('response successfully recorded')
}
const takeYesAdviceFail = (response) => {
  console.log(response)
  console.log('fail on take yes advice')
  $('#take-advice-error').text('You must get advice before you can take it')
  $('#take-advice-success').text('')
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
  adviceAddDefaultSuccess,
  adviceDeleteAllSuccess,
  adviceDeleteAllFail,
  takeNoAdviceFail,
  takeNoAdviceSuccess,
  takeYesAdviceSuccess,
  takeYesAdviceFail
}
