const registerEndpoint = 'http://localhost:4000/user/signup'; // replace with your actual API endpoint

const userData = {
  email: 'welcomebackdevil1',
  password: 'securepassword',
  // add any other required fields
};

fetch(registerEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response.json());
  })
  .then(data => {
    console.log(data);
    // handle the response from the server
  })
  .catch(error => {
    console.error('Fetch error:', error);
    // handle errors
  });