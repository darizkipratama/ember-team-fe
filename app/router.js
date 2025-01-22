import EmberRouter from '@ember/routing/router';
import config from 'ember-team-fe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('team-detail', { path: '/team-detail/:id' });
});
