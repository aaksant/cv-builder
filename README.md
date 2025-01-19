# cv-builder

DEMO: https://cv-builder-kwv6xfetw-aaksants-projects.vercel.app/

This is a CV builder application built using React. It allows users to create and manage their CV (Curriculum Vitae) by entering personal details, education history, and work experience. The application provides a form for inputting data and a live preview of the CV.

The inspiration for the layout comes from ATS resume provided by [kinobi](https://app.kinobi.ai/).

## Features
- Personal Details: Users can enter their full name, phone number, email, LinkedIn profile, portfolio, and a short description.

- Education History: Users can add multiple education entries, including university name, start year, graduation year, degree, and grade.

- Work Experience: Users can add multiple work experience entries, including company name, role, start year, end year, and job description.

- Live Preview: The CV is displayed in real-time as the user fills out the form.

- Edit and Delete: Users can edit or delete existing entries for education and work experience.

- `localStorage`: Data is persisted.

## Libraries used
- `React`: The core library used for building the user interface and managing component state.

- `react-icons`: Used for adding icons to the UI.

- `Immer`: Used for simplifying state management by allowing immutable updates to the state in a more intuitive way.

## Project structure
### `src/components`
- App.jsx: The main component that holds the state for the CV data and renders the Forms and Preview components.

### `src/components/form`
- Forms.jsx: Manages the forms for personal details, education, and work experience. It dynamically renders either SingleEntryForm or MultipleEntriesForm based on the form type.

- `SingleEntryForm.jsx`: Handles the form for personal details (a single entry form).

- `MultipleEntriesForm.jsx`: Handles forms for education and work experience (multiple entries). It allows adding, editing, and deleting entries.

- `Form.jsx`: A reusable form component that renders form fields based on the provided configuration.

- `FormRow.jsx`: A reusable component for rendering individual form rows (labels and input fields).

- `FormControlButton.jsx`: A reusable button component for form actions (e.g., Submit, Cancel).

- `Entries.jsx`: Displays a list of entries (education or work experience) and provides options to edit or delete each entry.

- `Entry.jsx`: Represents a single entry in the list, with edit and delete buttons.

- `NewEntryPrompt.jsx`: Displays a prompt to add a new entry when no entries exist.

### `src/components/preview`
- `Preview.jsx`: Displays the live preview of the CV, including personal details, education, and work experience.

- `Header.jsx`: Displays the personal details section in the CV preview.

- `MainContent.jsx`: Displays the education and work experience sections in the CV preview.

- `Educations.jsx`: Renders the education entries in the CV preview.

- `Education.jsx`: Represents a single education entry in the CV preview.

- `Experiences.jsx`: Renders the work experience entries in the CV preview.

- `Experience.jsx`: Represents a single work experience entry in the CV preview.

## How it works
1. **State management**
    - The `cvData` state in `App.jsx` holds all the CV information, including personal details, education, and work experience.
    - The `setCvData` function is used to update the state, and it is passed down to child components as a prop.
2. **Form handling**
    - The `Forms.jsx` component dynamically renders the appropriate form (`SingleEntryForm.jsx` or `MultipleEntriesForm.jsx`) based on the form type.
    - The `MultipleEntriesForm.jsx` component handles adding, editing, and deleting entries for education and work experience.
    - The `Form.jsx` component is a reusable form that renders fields based on the configuration provided in `src/formsConfig.js.`
3. **Live preview**
    - The `Preview.jsx` component displays the CV in real-time by rendering the `Header.jsx` and `MainContent.jsx` components.
4. **Editing and deleting entries**
    - Users can click the edit button on an entry to populate the form with the existing data.

    - When the form is submitted, the `handleSubmit` function in `MultipleEntriesForm.jsx` updates the entry in the state.

    - Users can delete an entry by clicking the trash icon, which triggers the `handleRemoveEntry` function.

5. **Saving the data**
    - Users data is saved with `localStorage` API in `App.jsx` component. `useEffect` hook is used to save the data every time it changes.

## Future improvements
- Download as PDF.
- Insert a profile picture.
- More responsive design.