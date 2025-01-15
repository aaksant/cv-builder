export default function NewEntryPrompt({ entries, handleNewEntry }) {
  return (
    <div className="message">
      {entries.length === 0 && (
        <p
          className="p-light"
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          No current entries
        </p>
      )}
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
