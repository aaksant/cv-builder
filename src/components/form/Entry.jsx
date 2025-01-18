import { LiaTrashSolid } from 'react-icons/lia';

export default function Entry({ name, handleRemoveEntry }) {
  return (
    <div className="entry">
      <p>{name}</p>
      <div className="entry__control">
        <button className="btn">
          <LiaTrashSolid className="icon" onClick={handleRemoveEntry} />
        </button>
      </div>
    </div>
  );
}
