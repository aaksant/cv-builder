import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import FormControlButton from './FormControlButton';
import '../../styles/Form.css';

export default function SingleEntryForm({
  personalDetails,
  setPersonalDetails,
  title,
  fields
}) {
  const [isFormShown, setIsFormShown] = useState(true);

  function toggleDropdown() {
    setIsFormShown(!isFormShown);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setPersonalDetails({
      ...personalDetails,
      ...Object.fromEntries([...formData.entries()])
    });

    e.currentTarget.reset();
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
        <form action="/" onSubmit={handleSubmit}>
          {fields.map(({ label, type, name, id, isRequired }, index) => (
            <div className="form-row" key={index}>
              <label htmlFor={name}>{label}</label>
              <input type={type} name={name} id={id} required={isRequired} />
            </div>
          ))}
          <div className="form-control">
            <FormControlButton
              className="cancel"
              text="Cancel"
              onClick={() => setPersonalDetails({})}
            />
            <FormControlButton className="submit" text="Submit" type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}
