const links = [
  ["#why", "Why MountainKin"],
  ["#food", "Pahadi food"],
  ["#benefits", "Food benefits"],
  ["#treks", "Treks"],
  ["#community", "Community"],
  ["#contact", "Contact"],
];

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">MountainKin</a>
        <nav aria-label="Main">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="btn" href="#join" style={{ padding: "9px 20px", fontSize: 15 }}>Join the tribe</a>
      </div>
    </header>
  );
}
