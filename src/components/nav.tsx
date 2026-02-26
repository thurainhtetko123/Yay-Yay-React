import "./nav.css";

const navItems = [
  { href: "#", icon: "home", label: "Home", className: "is-active" },
  { href: "#", icon: "diamond-plus", label: "Create Quiz (AI)", className: "" },
  { href: "#", icon: "plus", label: "Manual Creation", className: "" },
  { href: "#", icon: "layout-dashboard", label: "Dashboard", className: "" },
  { href: "#", icon: "notepad-text", label: "My Quiz", className: "" },
  { href: "#", icon: "settings", label: "Settings", className: "" },
];

function Nav() {
  return (
    <>
      <aside className="sidebar">
        <nav>
          {navItems.map((item, index) => (
            <a
              id={item.label}
              className={`navLink ${item.className}`}
              key={index}
              href={item.href}
              title={item.label}
            >
                <i data-lucidx></i>
              <span>{item.label}</span> 
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Nav;
