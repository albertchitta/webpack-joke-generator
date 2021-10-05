const showJokeGenerator = () => {
  document.querySelector('#main-container').innerHTML = `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Joke Generator</h5>
        <a href="#" class="btn btn-primary" id="getJokeBtn">GET A JOKE</a>
      </div>
    </div>
  `;
};

export default showJokeGenerator;
