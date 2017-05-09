'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#sign-up').css('display', 'none')
  $('#sign-up-error').text('')
}

const signUpFailure = () => {
  $('#sign-up-error').text("error: user name taken or passwords don't match")
}

const signInSuccess = (response) => {
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
  $('#display_advice').text('Advice library advice displays here')
  $('#get-take-advice-data').css('display', 'block')
  $('#display-take-advice-data').text('get your advice stats')
  store.advices = null
  store.currentNum = -1
  $('#get-example-advice').css('display', 'block')
}

const signInFailure = () => {
  $('#sign-in-error').text("error: incorrect password or passwords don't match")
}

const changePasswordSuccess = (response) => {
  $('#change-password-success').text('success! password was changed')
  $('#change-password-error').text('')
  $('.change-password').trigger('reset')
}

const changePasswordFailure = () => {
  $('#change-password-error').text('error: password not changed')
  $('#change-password-success').text('')
}

const signOutSuccess = () => {
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
  $('#get-take-advice-data').css('display', 'none')
  $('#get-example-advice').css('display', 'none')
}

const signOutFailure = () => {
  $('#sign-out-error').text('something went wrong')
}

const adviceIndexFail = (response) => {
  $('#display_advice').text('No advice to show, add some advice')
  store.currentNum = -1
}

// gets array of all the users' advice and then shows one pieces of advice
const adviceIndexSucces = (response) => {
  store.advices = response.advices
  const num = store.advices.length
  const randNum = Math.floor(Math.random() * num)
  store.currentNum = randNum
  $('#display_advice').text(store.advices[randNum].idea)
}

// creates variable to make display alternating success messages.
let added

const adviceAddSuccess = (response) => {
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
  if (added === true) {
    $('#add-default-advice-success').text('brilliant advice added')
    added = !added
  } else {
    $('#add-default-advice-success').text('excellent advice added')
    added = !added
  }
}

const adviceAddFail = (response) => {
  $('#add-advice-error').text('error: please input advice')
  $('#add-advice-success').text('')
}

const adviceDeleteSuccess = (response) => {
  $('.delete-advice').trigger('reset')
  $('#delete-advice-error').text('')
  $('#delete-advice-success').text('advice deleted')
  store.currentNum = -1
}
const adviceDeleteFail = (response) => {
  $('#delete-advice-error').text('please display advice to delelete')
  $('#delete-advice-success').text('')
  store.currentNum = -1
}

const adviceEditSuccess = (response) => {
  $('.edit_advice').trigger('reset')
  $('#edit-advice-error').text('')
  $('#edit-advice-success').text('advice edited')
}
const adviceEditFail = (response) => {
  $('#edit-advice-error').text('error, please make sure advice is selected and input is valid')
  $('#edit-advice-success').text('')
}

const adviceDeleteAllSuccess =
(response) => {
  $('#delete-all-error').text('')
  $('#delete-all-success').text('all advice was deleted')
  $('#display_advice').text('all advice deleted, add new advice')
}

const adviceDeleteAllFail = (response) => {
  $('#delete-all-error').text('no advice to delete')
  $('#delete-all-success').text('')
}

const takeNoAdviceSuccess = (response) => {
  $('#take-advice-error').text('')
  $('#take-advice-success').text('response successfully recorded')
}
const takeNoAdviceFail = (response) => {
  $('#take-advice-error').text('You must get advice before you can take it')
  $('#take-advice-success').text('')
}

const takeYesAdviceSuccess = (response) => {
  $('#take-advice-error').text('')
  $('#take-advice-success').text('response successfully recorded')
}
const takeYesAdviceFail = (response) => {
  $('#take-advice-error').text('You must get advice before you can take it')
  $('#take-advice-success').text('')
}

const takeAdviceDataSucces = (response) => {
  const YesNoArray = []
  const takeAdvicesArray = response.take_advices
  for (let i = 0; i < takeAdvicesArray.length; i++) {
    YesNoArray.push(takeAdvicesArray[i].yes_or_no)
  }
  const totalYes = YesNoArray.reduce((prev, curr) => prev + curr)
  const percent = (100 * totalYes / takeAdvicesArray.length).toFixed(2)
  let howItGoes = 'fine'
  if (percent >= 90) {
    howItGoes = 'amazing! Keep up the good work!'
  } else if (percent >= 75) {
    howItGoes = 'a really good job! Add one more piece of advice that you are excited to start following'
  } else if (percent > 50) {
    howItGoes = 'not so hot.  Recommit to your advice! Push yourself!'
  } else if (percent > 25) {
    howItGoes = 'an unimpressive job.  Write advice that you can take. Modify advice to fit your needs.'
  } else {
    howItGoes = 'poorly.  Are you even trying? I suspect you are not.'
  }
  $('#display-take-advice-data').text('You responded to your advice ' + takeAdvicesArray.length + ' times. \t\n\nYou took your own advice ' + totalYes + ' times, or ' + percent + '% of the time. \n\n You are doing ' + howItGoes)
}

const takeAdviceDataFail = (response) => {
  $('#display-take-advice-data').text('Nothing to display. You must have advice and respond yes or no to it to view advice tracker data')
}

const exampleFail = (response) => {
  $('#get-example-advice-error').text('Error, no advice examples at this time.')
}

const exampleSuccess = (data) => {
  $.getJSON('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=', function (a) {
    $('#display-example-advice').html(a[0].content + '<p>— ' + a[0].title + '</p>')
  })
  // const adviceObj = JSON.parse(data)
  // $('#display-example-advice').text(adviceObj.slip.advice)
  // $('#get-eample-advice-error').text('')
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
  takeYesAdviceFail,
  takeAdviceDataFail,
  takeAdviceDataSucces,
  exampleFail,
  exampleSuccess
}
