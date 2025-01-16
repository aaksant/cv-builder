export default function Education({
  university,
  startYear,
  gradYear,
  degree,
  grade
}) {
  return (
    <div className="education">
      <div>
        <p className="text-bold">{university}</p>
        <p className="text-light-italic">{`${degree}, GPA: ${grade}`}</p>
      </div>
      <div>
        <p>{`${startYear}-${gradYear}`}</p>
      </div>
    </div>
  );
}
