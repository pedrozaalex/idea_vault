import { SettingFilled } from '@ant-design/icons';
import { Link } from '@remix-run/react';

export default function Navbar() {
  return (
    <nav className="navbar rounded-box bg-primary p-4 justify-between">
      <Link to='/'><a className="text-2xl font-extrabold">idea_vault</a></Link>
      <div>
        <Link to="/settings">
          <a className="btn btn-ghost btn-square btn-sm">
            <SettingFilled className="text-lg" />
          </a>
        </Link>
      </div>
    </nav>
  );
}
