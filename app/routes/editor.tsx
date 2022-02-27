import { Outlet } from 'remix';
import Sidebar from '~/components/Sidebar';

export default function Index() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
