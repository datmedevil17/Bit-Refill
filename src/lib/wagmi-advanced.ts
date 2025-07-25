import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import {
coreTestnet2,
coreTestnet1
} from 'wagmi/chains';

// Advanced configuration with custom RPC providers
// Uncomment and use this for production deployment
const configWithCustomRPC = getDefaultConfig({
  appName: 'Bit Refill',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [coreTestnet1,coreTestnet2],
  ssr: true,
});

export { configWithCustomRPC };
