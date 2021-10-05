const showJoke = (jokeObj) => {
  document.querySelector('#main-container').innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Joke Generator</h5>
        <p class="card-text">${jokeObj.setup}</p>
        <a href="#" class="btn btn-primary" id="getPunchlineBtn">GET PUNCHLINE</a>
      </div>
    </div>
  `;
};

export default showJoke;
