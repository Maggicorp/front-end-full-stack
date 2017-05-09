'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
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
  return $.ajax({
    url: config.apiOrigin + '/advices',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addAdvice = (data) => {
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

const defaultAdviceArray = ['Take a nap', 'Drink more coffee', 'No candy at the video store', 'Buy a new plant', 'Drink less coffee', 'Call your mom', 'Call your dad', 'Eat some candy', 'Go for a walk', 'Do some push ups', 'Drink some water', 'Do not spend more than you earn', 'Text a friend', 'Clean your room', 'Pet a dog', 'Turn off your phone', 'Wiggle your toes', 'Listen to music you like', 'Read a book']

const addDefaultAdvice = () => {
  const arrayLength = defaultAdviceArray.length
  const randNum = Math.floor(Math.random() * arrayLength)
  const adviceString = defaultAdviceArray[randNum]
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

const deleteAdvice = () => {
  return $.ajax({
    url: config.apiOrigin + '/advices/' + store.advices[store.currentNum].id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const editAdvice = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/advices/' + store.advices[store.currentNum].id,
    method: 'PATCH',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteAllAdvice = (num) => {
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

const showTakeAdviceData = () => {
  return $.ajax({
    url: config.apiOrigin + '/take_advices',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showExampleAdvice = () => {
  return $.ajax({
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    method: 'GET',
    header: 'Access-Control-Allow-Origin: https://quotesondesign.com'})
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
  takeYesAdvice,
  showTakeAdviceData,
  showExampleAdvice
}
