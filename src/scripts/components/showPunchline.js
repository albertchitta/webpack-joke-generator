const showPunchline = (jokeObj) => {
  document.querySelector('#main-container').innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Joke Generator</h5>
        <p class="card-text">${jokeObj.setup}</p>
        <p class="card-text">${jokeObj.punchline}</p>
        <a href="#" class="btn btn-primary" id="getJokeBtn">GET A NEW JOKE</a>
      </div>
    </div>
  `;
};

export default showPunchline;
