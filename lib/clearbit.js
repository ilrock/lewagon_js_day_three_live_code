const authorization = "###YOUR TOKEN GOES HERE###";
const url = 'https://person.clearbit.com/v2/combined/find?email='
// save the user input in a variable

const userInput = document.querySelector('#clearbitEmail')
const formInput = document.querySelector('#clearbitForm')
// add submit listener to the form
formInput.addEventListener('submit', (event) => {
  fetch(`${url}${userInput.value}`,{
    headers: {
      Authorization: authorization
    }
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    setUserInfo(data.person)
  })
})
// fetch submitted data from api (url with variable)
// display data in different categories (name, email, bio, location)



const setUserInfo = (json) => {
  const userName = document.querySelector('#userName');
  const userEmail = document.querySelector('#userEmail');
  const userBio = document.querySelector('#userBio');
  const userLocation = document.querySelector('#userLocation');

  userName.innerText = json.name.fullName;
  userEmail.innerText = json.email;
  userBio.innerText = json.bio;
  userLocation.innerText = json.location;
};
