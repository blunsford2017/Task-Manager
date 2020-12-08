import { setToken } from "./tokenServices";

const BASE_URL = 'http://localhost:3001/api/users';

function signup(user) {
    return fetch(BASE_URL + '/signup' {
        method: 'POST',
        headers: new Headers
            ({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error("Email already taken!");
    })
    // Parameter destructuring!
    .then(({token}) => setToken(token));
}

function getUser() {

}

function login (credentials) {
    return fetch(BASE_URL + '/login' {
        method: 'POST',
        headers: new Headers
            ({'Content-Type': 'application/json'}),
        body: JSON.stringify(credentials)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error("Bad Credentials");
    })
    // Parameter destructuring!
    .then(({token}) => setToken(token));
}

function logout () {

}

export {
    signup,
    getUser,
    login,
    logout,
}   