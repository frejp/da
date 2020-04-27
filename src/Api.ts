import { API_ENDPOINT } from './config';

type CurrentToken = string;

let currentAuthToken: CurrentToken = '';
export function setToken(token: string) {
  currentAuthToken = token;
}

const loginFailedObject = {
  isLoggedIn: false,
  token: null,
  errorDescription: ''
}

const loginSuccessObject = {
  isLoggedIn: true,
  token: ''
}

export const login = (username: string,password: string) => {
  return fetch(`${API_ENDPOINT}/login`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username, password}),
  })
    .then(response => Promise.all([response.ok, response.json()]))
    .then(([responseOk, body]) => {
      if (responseOk) {
        loginSuccessObject.token = body.token;
        return loginSuccessObject;
      }
      throw new Error(body.message);
      
    })
    .catch(error => {
      loginFailedObject.errorDescription = error.message
      return loginFailedObject;
    });
};


export const getProperties = () => {
  return fetch(`${API_ENDPOINT}/properties`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${currentAuthToken}`
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export const loginMock = (username:string, password:string) => {
  if (username === 'username' && password === 'password') {
    return loginSuccessObject;
  }
  return loginFailedObject;
};

export type LoginSuccessObjectType =  typeof loginSuccessObject;
export type LoginFailedObjectType =  typeof loginFailedObject;

export const fetchMockLogin = async (username:string, password:string): Promise<LoginSuccessObjectType|LoginFailedObjectType> => {
  return new Promise<LoginSuccessObjectType|LoginFailedObjectType>((resolve, reject) => {
    setTimeout(function() {
      resolve(loginMock(username, password));
    }, 500);
  })
};