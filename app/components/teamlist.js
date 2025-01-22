import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TeamListComponent extends Component {
  @tracked isModalOpen = false;
  @tracked isEdit = false;
  @tracked selectedTeam = null;
  @tracked isDeleteModalOpen = false;

  @action
  openModal(team) {
    this.isModalOpen = true;
    this.isEdit = !!team;
    this.selectedTeam = team;
  }

  @action
  closeModal() {
    this.isModalOpen = false;
    this.selectedTeam = null;
  }

  @action
  openDeleteModal(team) {
    this.isDeleteModalOpen = true;
    this.selectedTeam = team;
  }

  @action
  closeDeleteModal() {
    this.isDeleteModalOpen = false;
    this.selectedTeam = null;
  }

  @action
  async handleFormSubmit(teamData) {
    const url = this.isEdit
      ? `http://localhost:3000/api/teams/${this.selectedTeam.id}`
      : 'http://localhost:3000/api/teams';
    const method = this.isEdit ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teamData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }

    this.closeModal();
  }

  @action
  async handleDelete() {
    const url = `http://localhost:3000/api/teams/${this.selectedTeam.id}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Deleted:', result);

      // Refresh the page after successful deletion
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }

    this.closeDeleteModal();
  }
}
