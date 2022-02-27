import Sidebar from '~/components/Sidebar';
import { json, LoaderFunction, Outlet, useLoaderData } from 'remix';
import { Link } from '@remix-run/react';

interface SettingRoute {
  path: string;
  name: string;
}

const AVAILABLE_SETTINGS: SettingRoute[] = [
  {
    path: '/settings/appearance',
    name: 'Appearance',
  },
];

export let loader: LoaderFunction = ({ request, params }) => {
  const selectedSetting = AVAILABLE_SETTINGS.find(setting => request.url.match(setting.path));
  return json(selectedSetting ? selectedSetting.name : AVAILABLE_SETTINGS[0].name);
};

export default function Settings() {
  const selectedSetting = useLoaderData<string>();

  return (
    <>
      <Sidebar title="Settings">
        <ul className="menu">
          {AVAILABLE_SETTINGS.map(({ path, name }) => (
            <li key={name}>
              <Link to={path} className={selectedSetting === name ? 'active' : ''}>
                <h3>{name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Sidebar>
      <Outlet />
    </>
  );
}
