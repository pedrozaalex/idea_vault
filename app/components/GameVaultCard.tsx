import React from 'react';

interface GameVaultCardProps {
  title: string;
  description: string;
}

const GameVaultCard = ({ title, description }: GameVaultCardProps) => {
  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body p-4">
        <h3 className="card-title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GameVaultCard;
