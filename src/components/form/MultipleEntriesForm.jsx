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
  const [isEditing, setIsEditing] = useState(false);

  function toggleDropdown() {
    setIsFormShown(!isFormShown);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setCvData(
      produce((draft) => {
        draft[sectionKey].push({
          ...Object.fromEntries(formData),
          id: crypto.randomUUID()
        });
      })
    );

    e.currentTarget.reset();
    setIsEditing(false);
  }

  function handleNewEntry() {
    setIsEditing(true);
  }

  function handleCancel() {
    setCvData(
      produce((draft) => {
        draft[sectionKey] = [...entries];
      })
    );

    setIsEditing(false);
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
          {entries.length > 0 && <Entries entries={entries} />}
          {isEditing ? (
            <Form
              fields={fields}
              handleSubmit={handleSubmit}
              handleCancel={handleCancel}
            />
          ) : (
            <NewEntryPrompt entries={entries} handleNewEntry={handleNewEntry} />
          )}
        </div>
      )}
    </div>
  );
}
