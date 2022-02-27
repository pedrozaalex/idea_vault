import {Outlet} from 'remix';
import Sidebar from '~/components/Sidebar';
import GameVaultCard from "~/components/GameVaultCard";
import React from "react";

const testVaults = new Array(10).fill({
  title: 'Test Vault',
  description: 'This is a test vault',
});

export default function Index() {
  return (
    <>
      <Sidebar title='Your game vaults'>
        <div className="grow overflow-y-auto">
          <ul className="flex flex-col mr-2 space-y-2">
            {testVaults.map((vault, index) => (
              <GameVaultCard key={index} {...vault} />
            ))}
          </ul>
        </div>
      </Sidebar>
      <Outlet/>
    </>
  );
}
