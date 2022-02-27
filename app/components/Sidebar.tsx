import React from 'react';
import GameVaultCard from '~/components/GameVaultCard';

const testVaults = new Array(10).fill({
  title: 'Test Vault',
  description: 'This is a test vault',
});

const Sidebar = () => {
  return (
    <div className="bg-base-300 flex flex-col w-60 rounded-box p-4 grow-0 shrink-0">
      <h2 className="text-xl font-bold mb-4">Your game vaults</h2>
      <div className="grow overflow-y-auto">
        <ul className="flex flex-col mr-2 space-y-2">
          {testVaults.map((vault, index) => (
            <GameVaultCard key={index} {...vault} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
