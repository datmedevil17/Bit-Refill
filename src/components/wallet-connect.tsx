'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function WalletConnect() {
  const { address, isConnected } = useAccount();

  return (
    <div className="flex flex-col items-center gap-4">
      <ConnectButton />
      
      {isConnected && address && (
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Connected: {address}
          </p>
        </div>
      )}
    </div>
  );
}
