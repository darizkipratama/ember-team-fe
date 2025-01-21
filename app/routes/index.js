import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('http://localhost:3000/api/Teams');
    const teams = await response.json();

    return teams;
  }
}
