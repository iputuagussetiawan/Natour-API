/* eslint-disable*/
import '@babel/polyfill';
import { login } from './login';

console.log('test')

// DOM ELEMENTS

const loginForm = document.querySelector('.form--login');

if (loginForm)
document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
  login(email,password)
});
