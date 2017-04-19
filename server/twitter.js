const axios = require('axios');
const Buffer = require('buffer').Buffer;
const api = require('./config.js');

const base_url = 'https://api.twitter.com/';
const keys = encodeURIComponent(api.consumer_key)+':'+encodeURIComponent(api.consumer_secret);
const token = Buffer.from(keys).toString('base64');
let authorization = {};

exports.getAuthorization = function(){
  const endpoint = 'oauth2/token';
  const url = base_url + endpoint;
  axios.post(url,
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Basic ' + token
      }
    }
  )
  .then(function (response) {
    authorization = {
      'Authorization': 'Bearer ' + response.data.access_token
    };
  })
  .catch(function (error) {
    console.log(error);
  });
};

exports.getList = function(){
  return new Promise((resolve, reject) => {
    const endpoint = '1.1/lists/statuses.json';
    const parameters = 'slug=fin&owner_screen_name=hsuastegui&count=20&include_rts=0';
    const url = base_url + endpoint + '?' + parameters;
    axios.get(url, {
      headers: authorization
    })
    .then(function(response){
      resolve(response.data);
    })
    .catch(function(error){
      console.log(error);
      reject(error);
    });
  });
};

exports.getResults = function(term){
  return new Promise((resolve, reject) => {
    const endpoint = '1.1/search/tweets.json';
    const parameters = 'q='+encodeURIComponent(term);
    const url = base_url + endpoint + '?' + parameters;
    axios.get(url, {
      headers: authorization
    })
    .then(function(response){
      resolve(response.data);
    })
    .catch(function(error){
      console.log(error);
      reject(error);
    });
  });
};
