import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
 coreTestnet1,coreTestnet2
} from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Bit Refill',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [coreTestnet1,coreTestnet2],
  ssr: true,
});

export { config };
