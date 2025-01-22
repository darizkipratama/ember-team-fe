import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import { didInsertElement } from '@ember/render-modifiers';

export default class MemberlistComponent extends Component {
  @tracked lists = [];
  @tracked isModalOpen = false;
  @tracked isEdit = false;
  @tracked selectedMember = { memberName: '', memberRole: '' };
  @tracked teamId = this.args.teamId;


  @action
  async loadMembers() {
    try {
      const response = await fetch(`http://localhost:3000/api/teams/${this.teamId}/members`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const members = await response.json();
      this.lists = members;
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  }

  @action
  openModal(member = null) {
    this.isModalOpen = true;
    this.isEdit = !!member;
    this.selectedMember = member || { memberName: '', memberRole: '' };
  }

  @action
  closeModal() {
    this.isModalOpen = false;
    this.selectedMember = { memberName: '', memberRole: '' };
  }

  @action
  updateMemberName(event) {
    this.selectedMember.memberName = event.target.value;
  }

  @action
  updateMemberRole(event) {
    this.selectedMember.memberRole = event.target.value;
  }

  @action
  async handleFormSubmit(event) {
    event.preventDefault();
    const memberData = {
      ...this.selectedMember,
      teamId: this.teamId
    };
    const url = this.isEdit ? `http://localhost:3000/api/members/${this.selectedMember.id}` : 'http://localhost:3000/api/members';
    const method = this.isEdit ? 'PUT' : 'POST';
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(memberData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);

      if (this.isEdit) {
        this.lists = this.lists.map(member => member.id === this.selectedMember.id ? result : member);
      } else {
        this.lists = [...this.lists, result];
      }

      this.closeModal();

    } catch (error) {
      console.error('Error:', error);
    }
  }

  @action
  async handleDelete(member) {
    const url = `http://localhost:3000/api/members/${member.id}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Deleted:', member);

      // Remove the deleted member from the lists
      this.lists = this.lists.filter(m => m.id !== member.id);

    } catch (error) {
      console.error('Error:', error);
    }
  }
}