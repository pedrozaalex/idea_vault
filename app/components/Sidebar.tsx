import { ReactNode } from 'react';

interface SidebarProps {
  title: string;
  children: ReactNode;
}

const Sidebar = ({ children, title }: SidebarProps) => {
  return (
    <div className="flex flex-col w-60 rounded-box p-4 grow-0 shrink-0 menu">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Sidebar;
