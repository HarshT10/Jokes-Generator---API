const btn = document.getElementById("jokeBtn");
const value = document.getElementById("joke");

const asyncFunction = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    console.log(response)
    const joke = await response.json();
    return joke;
}

btn.addEventListener('click', () => {
    asyncFunction().then(joke => value.textContent = joke.value);

})