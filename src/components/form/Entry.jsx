import { LiaTrashSolid, LiaEditSolid } from 'react-icons/lia';

export default function Entry({ name, handleRemoveEntry, handleEditEntry }) {
  return (
    <div className="entry">
      <p>{name}</p>
      <div className="entry__control">
        <button className="btn" onClick={handleEditEntry}>
          <LiaEditSolid className="icon" />
        </button>
        <button className="btn" onClick={handleRemoveEntry}>
          <LiaTrashSolid className="icon" />
        </button>
      </div>
    </div>
  );
}
