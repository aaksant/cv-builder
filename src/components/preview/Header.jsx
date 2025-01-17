export default function Header({ personalDetails }) {
  const {
    fullName,
    phoneNumber,
    email,
    linkedin,
    portfolio,
    shortDescription
  } = personalDetails;

  return (
    <header className="header">
      <div className="contact-info">
        <h1>{fullName}</h1>
        <div className="contact-info__details">
          <p>{phoneNumber}</p>
          <p>{email}</p>
          <p>{linkedin}</p>
          <p>{portfolio}</p>
        </div>
      </div>
      <div className="short-description">
        <p>{shortDescription}</p>
      </div>
    </header>
  );
}
