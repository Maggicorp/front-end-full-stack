'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
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
  const data = getFormFields(this)
  api.showAdvice(data)
    .then(ui.adviceIndexSucces)
    .catch(ui.adviceIndexFail)
}

const onAddAdvice = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.addAdvice(data)
    .then(ui.adviceAddSuccess)
    .catch(ui.adviceAddFail)
}

const onAddDefaultAdvice = function () {
  event.preventDefault()
  api.addDefaultAdvice()
    .then(ui.adviceAddDefaultSuccess)
    .catch(ui.adviceAddFail)
}

const onDeleteAdvice = function () {
  event.preventDefault()
  if (store.currentNum >= 0 && store.advices[store.currentNum] !== undefined) {
    api.deleteAdvice()
      .then(ui.adviceDeleteSuccess)
      .then(() => {
        api.showAdvice()
          .then(ui.adviceIndexSucces)
          .catch(ui.adviceIndexFail)
      })
      .catch(ui.adviceDeleteFail)
  } else {
    $('#delete-advice-error').text('error, please display advice to delete')
    $('#delete-advice-success').text('')
  }
}

const onEditAdvice = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const newAdvice = data.advice.idea
  if (store.currentNum >= 0 && store.advices[store.currentNum] !== undefined) {
    api.editAdvice(data)
      .then(ui.adviceEditSuccess)
      .then((data) => {
        $('#display_advice').text(newAdvice)
      })
      .catch(ui.adviceEditFail)
  } else {
    $('#edit-advice-error').text('error, please make sure advice is selected and input is valid')
    $('#edit-advice-success').text('')
  }
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
  if (store.currentNum >= 0 && store.advices[store.currentNum] !== undefined) {
    api.takeNoAdvice()
      .then(ui.takeNoAdviceSuccess)
      .then(() => {
        api.showAdvice()
          .then(ui.adviceIndexSucces)
          .catch(ui.adviceIndexFail)
      })
      .catch(ui.takeNoAdviceFail)
  } else {
    $('#take-advice-error').text('You must get advice before you can take it')
  }
}

const onTakeAdviceYes = function () {
  event.preventDefault()
  if (store.currentNum >= 0 && store.advices[store.currentNum] !== undefined) {
    api.takeYesAdvice()
      .then(ui.takeYesAdviceSuccess)
      .then(() => {
        api.showAdvice()
          .then(ui.adviceIndexSucces)
          .catch(ui.adviceIndexFail)
      })
      .catch(ui.takeYesAdviceFail)
  } else {
    $('#take-advice-error').text('You must get advice before you can take it')
  }
}

const onTakeAdviceData = function () {
  event.preventDefault()
  api.showTakeAdviceData()
    .then(ui.takeAdviceDataSucces)
    .catch(ui.takeAdviceDataFail)
}

const onGetExampleAdvice = function () {
  event.preventDefault()
  api.showExampleAdvice()
    .then(ui.exampleSuccess)
    .catch(ui.exampleFail)
}

const onRandomUserName = function () {
  event.preventDefault()
  api.getRandomUserName()
    .then(ui.userNameSuccess)
    .catch(ui.userNameFail)
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
  $('#get-example-advice').on('submit', onGetExampleAdvice)
  $('.random-user-name-api').on('submit', onRandomUserName)
}

module.exports = {
  addHandlers
}
