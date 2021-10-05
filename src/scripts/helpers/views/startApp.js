import domBuilder from '../../components/domBuilder';
import showJokeGenerator from '../../components/showJokeGenerator';
import domEvents from '../../events/domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  showJokeGenerator();
};

export default startApp;
