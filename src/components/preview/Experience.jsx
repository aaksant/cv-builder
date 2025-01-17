export default function Experience({
  company,
  role,
  startYearExperience,
  endYear,
  jobdesc
}) {
  return (
    <div className="preview-entry experience">
      <div className="preview-entry__top">
        <div className="preview-entry__top__grouped">
          <p className="text-bold">{company}</p>
          <p className="text-light-italic">{role}</p>
          <p>{jobdesc}</p>
        </div>
        <p>{`${startYearExperience}-${endYear}`}</p>
      </div>
    </div>
  );
}
