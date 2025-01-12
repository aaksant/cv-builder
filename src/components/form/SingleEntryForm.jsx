import { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import FormRow from './FormRow';
import FormControlButton from './FormControlButton';
import '../../styles/Form.css';

export default function SingleEntryForm({
  personalDetails,
  setCvData,
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

    setCvData((prevCvData) => ({
      ...prevCvData,
      personalDetails: {
        ...personalDetails,
        ...Object.fromEntries([...formData.entries()])
      }
    }));

    e.currentTarget.reset();
  }

  function handleCancel() {
    setCvData((prevCvData) => ({
      ...prevCvData,
      personalDetails: {}
    }));
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
          {fields.map((field, index) => (
            <FormRow {...field} key={index} />
          ))}
          <div className="form-control">
            <FormControlButton
              className="cancel"
              text="Cancel"
              onClick={handleCancel}
            />
            <FormControlButton className="submit" text="Submit" type="submit" />
          </div>
        </form>
      )}
    </div>
  );
}
