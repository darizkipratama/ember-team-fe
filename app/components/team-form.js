import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TeamFormComponent extends Component {
  @tracked teamName = this.args.team?.teamName || '';
  @tracked teamDescription = this.args.team?.teamDescription || '';

  @action
  updateTeamName(event) {
    this.teamName = event.target.value;
  }

  @action
  updateTeamDescription(event) {
    this.teamDescription = event.target.value;
  }

  @action
  submitForm(event) {
    event.preventDefault();
    const teamData = {
      teamName: this.teamName,
      teamDescription: this.teamDescription,
    };
    this.args.onSubmit(teamData);
  }
}
