'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  console.log('sign up clicked')
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(() => {
      api.signIn(data)
        .then(ui.signInSuccess)
        .catch(ui.signInFailure)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onIndexAdvice = function (event) {
  event.preventDefault()
  $('.error-message').text('')
  $('.success-message').text('')
  console.log('clicked button')
  const data = getFormFields(this)
  console.log(data)
  api.showAdvice(data)
    .then(ui.adviceIndexSucces)
    .catch(ui.adviceIndexFail)
}

const onAddAdvice = function (event) {
  event.preventDefault()
  console.log('clicked button')
  const data = getFormFields(this)
  console.log('this after get form fields', data)
  api.addAdvice(data)
    .then(ui.adviceAddSuccess)
    .catch(ui.adviceAddFail)
}

const onAddDefaultAdvice = function () {
  event.preventDefault()
  console.log('clicked button')
  api.addDefaultAdvice()
    .then(ui.adviceAddDefaultSuccess)
    .catch(ui.adviceAddFail)
}

const onDeleteAdvice = function (event) {
  event.preventDefault()
  console.log('clicked button')
  const data = getFormFields(this)
  console.log('this after get form fields', data)
  api.deleteAdvice(data)
    .then(ui.adviceDeleteSuccess)
    .catch(ui.adviceDeleteFail)
}

const onEditAdvice = function (event) {
  event.preventDefault()
  console.log('clicked button')
  const data = getFormFields(this)
  console.log('this after get form fields', data)
  api.editAdvice(data)
    .then(ui.adviceEditSuccess)
    .catch(ui.adviceEditFail)
}

const onDeleteAllAdvice = function () {
  event.preventDefault()
  api.showAdvice()
    .then(ui.adviceIndexSucces)
    .then(() => {
      for (let i = 0; i < store.advices.length; i++) {
        api.deleteAllAdvice(store.advices[i].id)
          .then(ui.adviceDeleteAllSuccess)
          .catch(ui.adviceDeleteAllFail)
      }
    })
    .catch(ui.adviceDeleteAllFail)
}

const onTakeAdviceNo = function () {
  event.preventDefault()
  console.log('cliked do not take advice')
  console.log('advice id num is', store.currentNum)
  if (store.currentNum >= 0 && store.advices[store.currentNum] !== undefined) {
    console.log('advice is ', store.advices[store.currentNum])
    api.takeNoAdvice()
      .then(ui.takeNoAdviceSuccess)
      .then(() => {
        api.showAdvice()
          .then(ui.adviceIndexSucces)
          .catch(ui.adviceIndexFail)
      })
      .catch(ui.takeNoAdviceFail)
  } else {
    console.log('must you must select advice to take it')
    $('#take-advice-error').text('You must get advice before you can take it')
  }
}

const onTakeAdviceYes = function () {
  event.preventDefault()
  console.log('cliked yes take advice')
  console.log(store.currentNum)
  if (store.currentNum >= 0 && store.advices[store.currentNum] !== undefined) {
    console.log('advice is ', store.advices[store.currentNum])
    api.takeYesAdvice()
      .then(ui.takeYesAdviceSuccess)
      .then(() => {
        api.showAdvice()
          .then(ui.adviceIndexSucces)
          .catch(ui.adviceIndexFail)
      })
      .catch(ui.takeYesAdviceFail)
  } else {
    console.log('must you must select advice to take it')
    $('#take-advice-error').text('You must get advice before you can take it')
  }
}

const onTakeAdviceData = function () {
  event.preventDefault()
  console.log('clicked button on take advice data')
  api.showTakeAdviceData()
    .then(ui.takeAdviceDataSucces)
    .catch(ui.takeAdviceDataFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('.index-advice').on('submit', onIndexAdvice)
  $('.add-advice').on('submit', onAddAdvice)
  $('.add-default-advice').on('submit', onAddDefaultAdvice)
  $('.delete-advice').on('submit', onDeleteAdvice)
  $('.edit_advice').on('submit', onEditAdvice)
  $('.delete-all').on('submit', onDeleteAllAdvice)
  $('#take_advice_no').on('click', onTakeAdviceNo)
  $('#take_advice_yes').on('click', onTakeAdviceYes)
  $('.take-advice-data').on('submit', onTakeAdviceData)
}

module.exports = {
  addHandlers
}
