function setToken (token) {
    if (token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
}

function getUserToken () {

}

function getToken () {

}

function removeToken () {
    localStorage.removeItem('token');
}

export {
    setToken,
    getUserToken,
    getToken,
    removeToken,
}