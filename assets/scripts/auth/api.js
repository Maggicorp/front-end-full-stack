'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  console.log('reached api sign up')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAdvice = () => {
  console.log('at show advice')
  return $.ajax({
    url: config.apiOrigin + '/advices',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addAdvice = (data) => {
  console.log('at show advice')
  console.log('add advice data', data)
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/advices',
    method: 'POST',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const defaultAdviceArray = ['Take a nap', 'Drink more coffee', 'Drink less coffee', 'Call your mom', 'Call your dad', 'Eat some candy', 'Go for a walk', 'Do some push ups', 'Drink some water', 'Do not spend more than you earn', 'Text a friend', 'Clean your room', 'Pet a dog', 'Turn off your phone', 'Wiggle your toes', 'Listen to music you like', 'Read a book']

const addDefaultAdvice = () => {
  const arrayLength = defaultAdviceArray.length
  const randNum = Math.floor(Math.random() * arrayLength)
  const adviceString = defaultAdviceArray[randNum]
  console.log(adviceString)
  return $.ajax({
    url: config.apiOrigin + '/advices',
    method: 'POST',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'advice': {
        'idea': adviceString
      }
    }
  })
}

const deleteAdvice = (response) => {
  console.log('at delete advice')
  console.log('passed data is', response, 'data.advice.id is ', response.advice.id)
  return $.ajax({
    url: config.apiOrigin + '/advices/' + response.advice.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const editAdvice = (data) => {
  console.log('edit advice data', data)
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/advices/' + data.advice.id,
    method: 'PATCH',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteAllAdvice = (num) => {
  console.log('at delete advice')
  console.log(num)
  // console.log(store.advices[0].id)
  // for (let i = 0; i < store.advices.length; i++) {
  return $.ajax({
    url: config.apiOrigin + '/advices/' + num,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const takeNoAdvice = () => {
  console.log('take no advice api')
  // console.log(store.advices[store.currentNum].id)
  return $.ajax({
    url: config.apiOrigin + '/take_advices',
    method: 'POST',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'take_advice': {
        'yes_or_no': 0,
        'advice_id': store.advices[store.currentNum].id
      }
    }
  })
}

const takeYesAdvice = () => {
  console.log('take yes advice api')
  // console.log(store.advices[store.currentNum].id)
  return $.ajax({
    url: config.apiOrigin + '/take_advices',
    method: 'POST',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'take_advice': {
        'yes_or_no': 1,
        'advice_id': store.advices[store.currentNum].id
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  showAdvice,
  addAdvice,
  addDefaultAdvice,
  deleteAdvice,
  editAdvice,
  deleteAllAdvice,
  takeNoAdvice,
  takeYesAdvice
}
