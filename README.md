# Ember Team Management System

This is an Ember.js application for managing teams and their members. The application allows you to create, update, and delete teams and members.

## Setup Instructions

### Prerequisites

- Node.js (v12.x, v14.x, or >= v16.x)
- npm (v6.x or v7.x)
- Ember CLI

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/ember-team-management.git
   cd ember-team-management
   ```
2. Install dependencies
   ```sh
   npm install
   ```

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Usage Details
## Managing Teams
Add Team: Click the "Add Team" button to open a modal where you can enter the team name and description. Click "Create" to add the team.
Edit Team: Click the edit icon next to a team to open a modal where you can update the team name and description. Click "Update" to save the changes.
Delete Team: Click the trash icon next to a team to open a confirmation dialog. Click "Delete" to remove the team.
## Managing Members
Add Member: Click the "Add Member" button to open a modal where you can enter the member name and role. Click "Create" to add the member.
Edit Member: Click the edit icon next to a member to open a modal where you can update the member name and role. Click "Update" to save the changes.
Delete Member: Click the trash icon next to a member to open a confirmation dialog. Click "Delete" to remove the member.

### Approach
## Component Structure
The application is built using Ember.js components. The main components are:
1. Teamlist: Manages the list of teams and handles CRUD operations for teams.
2. Memberlist: Manages the list of members and handles CRUD operations for members.
3. TeamForm: A reusable form component for creating and updating teams.
4. MemberForm: A reusable form component for creating and updating members.

## Data Fetching
Data is fetched from a backend API using the Fetch API. The loadMembers and loadTeams actions are used to fetch data when the components are rendered. The did-insert modifier is used to call these actions when the components are inserted into the DOM.

### State Management
State is managed using Ember's tracked properties. The @tracked decorator is used to mark properties that should trigger reactivity when they change. This ensures that the components re-render when the state is updated.

### Testing
Tests are written using the ember-qunit testing framework. Integration tests are used to verify the functionality of the components, including rendering, opening and closing modals, updating fields, and submitting forms.

