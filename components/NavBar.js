import Link from 'next/link';

const navItems = [
  { label: 'Projects', href: '/' },
  { label: 'MegaBliss', href: '/story' }
];

export default function NavBar({ activePage }) {
  return (
    <header className="site-header">
      <div className="logo">Reyhan Al-katiri</div>
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = activePage === 'home' ? item.href === '/' : item.href === `/${activePage}`;
            return (
              <li key={item.href} className={isActive ? 'active' : ''}>
                <Link href={item.href} legacyBehavior><a>{item.label}</a></Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
