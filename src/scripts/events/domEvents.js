import showJoke from '../components/showJoke';
import getJoke from '../helpers/jokeData';
import showPunchline from '../components/showPunchline';

let joke = {};

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR GETTING A JOKE
    if (e.target.id === ('getJokeBtn')) {
      getJoke().then((jokeObj) => {
        joke = {
          setup: jokeObj.setup,
          punchline: jokeObj.delivery
        };

        showJoke(joke);
      });
    }

    // CLICK EVENT FOR GETTING A PUNCHLINE
    if (e.target.id === ('getPunchlineBtn')) {
      showPunchline(joke);
    }
  });
};

export default domEvents;
