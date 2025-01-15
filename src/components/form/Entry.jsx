import { LiaTrashSolid } from 'react-icons/lia';
import { VscEdit } from 'react-icons/vsc';

export default function Entry({ name }) {
  return (
    <div className="entry">
      <p>{name}</p>
      <div className="entry__control">
        <button className="btn">
          <LiaTrashSolid className="icon" />
        </button>
        <button className="btn">
          <VscEdit className="icon" />
        </button>
      </div>
    </div>
  );
}
