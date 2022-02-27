import Sidebar from "~/components/Sidebar";
import {Outlet} from "remix";
import {Link} from "@remix-run/react";

interface SettingRoute {
  path: string;
  name: string;
}

const AVAILABLE_SETTINGS: SettingRoute[] = [
  {
    path: "/settings/appearance",
    name: "Appearance",
  },
];

export default function Settings() {
  return (
    <>
      <Sidebar title='Settings'>
        {AVAILABLE_SETTINGS.map(({path, name}) => (
          <Link to={path} className="card bg-base-300 shadow-xl">
            <a className="card-body p-4">
              <h3 className="card-title">
                {name}
              </h3>
            </a>
          </Link>
        ))}
      </Sidebar>
      <Outlet/>
    </>
  );
}
