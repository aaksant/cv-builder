import Entry from './Entry';

export default function Entries({ entries }) {
  return (
    <div className="entries">
      {entries.map((entry) => {
        const name = Object.values(entry)[0];
        return <Entry name={name} key={entry.id} />;
      })}
    </div>
  );
}
