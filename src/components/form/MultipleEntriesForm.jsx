import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import { produce } from 'immer';
import NewEntryPrompt from './NewEntryPrompt';
import Form from './Form';
import Entries from './Entries';
import '../../styles/Form.css';

export default function MultipleEntriesForm({
  entries,
  setCvData,
  title,
  fields,
  sectionKey
}) {
  const [isFormShown, setIsFormShown] = useState(false);
  const [isAddingNewEntry, setIsAddingNewEntry] = useState(false);
  const [editedEntryId, setEditedEntryId] = useState(null);

  function toggleDropdown() {
    setIsFormShown(!isFormShown);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setCvData(
      produce((draft) => {
        if (editedEntryId) {
          const entryIndex = draft[sectionKey].findIndex(
            (entry) => entry.id === editedEntryId
          );
          
          draft[sectionKey][entryIndex] = {
            ...Object.fromEntries(formData),
            id: editedEntryId
          };
        } else {
          draft[sectionKey].push({
            ...Object.fromEntries(formData),
            id: crypto.randomUUID()
          });
        }
      })
    );

    e.currentTarget.reset();
    setIsAddingNewEntry(false);
    setEditedEntryId(null);
  }

  function handleNewEntry() {
    setIsAddingNewEntry(true);
    setEditedEntryId(null);
  }

  function handleCancel() {
    setCvData(
      produce((draft) => {
        draft[sectionKey] = [...entries];
      })
    );

    setIsAddingNewEntry(false);
    setEditedEntryId(null);
  }

  function handleRemoveEntry(id) {
    setCvData(
      produce((draft) => {
        draft[sectionKey] = draft[sectionKey].filter(
          (entry) => entry.id !== id
        );
      })
    );
  }

  function handleEditEntry(id) {
    const entryToEdit = entries.find((entry) => entry.id === id);
    
    if (entryToEdit) {
      setIsAddingNewEntry(true);
      setEditedEntryId(id);
    }
  }

  return (
    <div className={`form ${isFormShown ? 'active' : ''}`}>
      <div className="form__header" onClick={toggleDropdown}>
        <h2>{title}</h2>
        <button
          type="button"
          className="btn form__dropdown-button"
          onClick={toggleDropdown}
        >
          <SlArrowDown className="icon" />
        </button>
      </div>
      {isFormShown && (
        <div className="form-content">
          {entries.length > 0 && (
            <Entries
              entries={entries}
              handleRemoveEntry={handleRemoveEntry}
              handleEditEntry={handleEditEntry}
            />
          )}
          {isAddingNewEntry ? (
            <Form
              fields={fields}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
              initialData={
                editedEntryId
                  ? entries.find((entry) => entry.id === editedEntryId)
                  : null
              }
            />
          ) : (
            <NewEntryPrompt entries={entries} handleNewEntry={handleNewEntry} />
          )}
        </div>
      )}
    </div>
  );
}
