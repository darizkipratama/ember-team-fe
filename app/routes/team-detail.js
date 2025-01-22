import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamDetailRoute extends Route {
  async model(params) {
    try {
      const response = await fetch(`http://localhost:3000/api/Teams/${params.id}/members`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const members = await response.json();
      return members;
    } catch (error) {
      console.error('Error fetching team details:', error);
      throw error;
    }
  }
}
