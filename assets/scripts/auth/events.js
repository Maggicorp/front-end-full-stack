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
}

module.exports = {
  addHandlers
}
