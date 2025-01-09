export default function Header({ personalDetails }) {
  const { fullName, phoneNumber, email, address } = personalDetails;

  return (
    <header className="header">
      <h1>{fullName}</h1>
      <div className="header__sub-header">
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>{address}</p>
      </div>
    </header>
  );
}
