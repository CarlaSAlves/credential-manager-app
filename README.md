# CredentialManegerApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli

___________________________________________________

# Credential Manager in Angular

A simple application to store and manage access credentials (username/password).

## User Stories Backlog

### US1: Home Screen
**As a** user,  
**I want** to see a home screen with a brief description of the application and a button to access my credentials,  
**So that** I can easily navigate to the main functionality of the application.

**Acceptance Criteria:**
- Display a title "Credential Manager"
- Show a brief description of the application
- Present a "View Credentials" button that redirects to the credentials list

### US2: View Credentials List
**As a** user,  
**I want** to see a list of my saved credentials,  
**So that** I can quickly check the access information I've stored.

**Acceptance Criteria:**
- Display a table with columns for Service, Username, and Password
- Show a message when there are no saved credentials
- Include a button to return to the home screen

### US3: Add New Credential
**As a** user,  
**I want** to be able to add a new credential,  
**So that** I can store access information for a new service.

**Acceptance Criteria:**
- Form with fields for Service, Username, and Password
- Basic validation to ensure all fields are filled
- Button to submit the form
- Visual feedback after successfully adding

### US4: Remove Credential
**As a** user,  
**I want** to be able to remove an existing credential,  
**So that** I can delete access information that is no longer needed.

**Acceptance Criteria:**
- "Remove" button for each credential in the list
- Immediate update of the list after removal

## Implementation Plan

### Phase 1: Initial Setup
- Set up the Angular project
- Create the base component structure
- Configure basic routing

### Phase 2: Home Screen Implementation (US1)
- Create the Home component
- Implement the basic layout
- Add the navigation button

### Phase 3: Data Model and Service
- Define the data model for Credential
- Implement the service for credential management with localStorage
- Create methods to get, add, and remove credentials

### Phase 4: Credentials List (US2)
- Create the credentials list component
- Implement the table view
- Add navigation back to the home screen

### Phase 5: Add Credentials (US3)
- Implement the form to add credentials
- Add basic validation
- Integrate with the credentials service

### Phase 6: Remove Credentials (US4)
- Add functionality to remove credentials
- Update the list after removal

### Phase 7: Refinements
- Improve visual styling
- Add user feedback (success/error messages)
- Test and fix bugs
