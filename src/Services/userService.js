import { setToken } from "./tokenServices";

const BASE_URL = 'http://localhost:3001/api/users';

function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Email already taken');
    }).then(({ token }) => setToken(token));
}

function getUser() {

}

function login (credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('Bad Creditals');
    }).then(({ token }) => setToken(token));
}

function logout () {

}

export {
    signup,
    getUser,
    login,
    logout,
}   