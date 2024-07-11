const fetch = require('node-fetch');

async function getToyotaCars() {
    try {
        const response = await fetch('https://63efea4c4d5eb64db0d31d0a.mockapi.io/toyora-cars');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getToyotaCars();