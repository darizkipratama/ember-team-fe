import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamDetailRoute extends Route {
    async model(params) {
        console.log(params);
        const response = await fetch(`http://localhost:3000/api/Teams/${params.id}/members`);
        const members = await response.json();
        
        return members;
        // return this.store.findRecord('team', params.id);
    }
}
