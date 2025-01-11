import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import FormRow from './FormRow';
import FormControlButton from './FormControlButton';
import NoEntriesPrompt from './NoEntriesPrompt';
import '../../styles/Form.css';

export default function MultipleEntriesForm({ title, fields }) {
  const [isFormShown, setIsFormShown] = useState(false);
  const [entries, setEntries] = useState([]);

  function toggleDropdown() {
    setIsFormShown(!isFormShown);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    const newEntry = new FormData(e.currentTarget);

    setEntries([
      // Remove the temporal object
      ...entries.slice(1),
      {
        id: crypto.randomUUID(),
        ...Object.fromEntries([...newEntry.entries()])
      }
    ]);
  }

  // Add a new temporal object to trigger the form
  function handleNewEntry() {
    setEntries([...entries, {}]);
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
      {isFormShown &&
        (entries.length === 0 ? (
          <NoEntriesPrompt handleNewEntry={handleNewEntry} />
        ) : (
          <form action="/" onSubmit={handleOnSubmit}>
            {fields.map((field, index) => (
              <FormRow {...field} key={index} />
            ))}
            <div className="form-control">
              <FormControlButton
                className="cancel"
                text="Cancel"
                onClick={() => setEntries([])}
              />
              <FormControlButton
                className="submit"
                text="Submit"
                type="submit"
              />
            </div>
          </form>
        ))}
    </div>
  );
}
