export default function NoEntriesPrompt({ handleNewEntry }) {
  return (
    <div className="message">
      <p
        className="p-light"
        style={{ textAlign: 'center', marginBottom: '1rem' }}
      >
        No current entries
      </p>
      <button
        type="button"
        className="btn btn-new-entry"
        onClick={handleNewEntry}
      >
        + Add new
      </button>
    </div>
  );
}
