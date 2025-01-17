export default function Education({
  university,
  startYear,
  gradYear,
  degree,
  grade
}) {
  return (
    <div className="preview-entry education">
      <div className="preview-entry__top">
        <div className="preview-entry__top__grouped">
          <p className="text-bold">{university}</p>
          <p className="text-light-italic">{`${degree}, GPA: ${grade}`}</p>
        </div>
        <p>{`${startYear}-${gradYear}`}</p>
      </div>
    </div>
  );
}
