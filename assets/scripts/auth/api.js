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
      Authorization: 'Token token=' + store.user.token},
    data
  })
}

const signOut = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data
  })
}

const showAdvice = () => {
  console.log('at show advice')
  return $.ajax({
    url: config.apiOrigin + '/advices',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}

const addAdvice = (data) => {
  console.log('at show advice')
  console.log(data)
  console.log(data.advice)
  return $.ajax({
    url: config.apiOrigin + '/advices',
    method: 'POST',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data: {
      'advice': {
        'idea': data.advice
      }
    }
  })
}

const addDefaultAdvice = () => {
  const adviceString = 'get lots of sleep'
  console.log(adviceString)
  return $.ajax({
    url: config.apiOrigin + '/advices',
    method: 'POST',
    controller: 'advices',
    headers: {
      Authorization: 'Token token=' + store.user.token},
    data: {
      'advice': {
        'idea': adviceString
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
  addDefaultAdvice
}
