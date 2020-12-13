

// const BASE_URL = 'http://localhost:3001/api/users';

// function task(user) {
//     return fetch(BASE_URL + '/dashboard', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'Application/json'
//         },
//         body: JSON.stringify(user)
//     }).then(response => {
//         if(response.ok) return response.json();
//         throw new Error('Email already taken');
//     }).then(({ token }) => setToken(token));
// }

// export{
//     task,
// }