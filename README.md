# Bit Refill - Simple Crypto Wallet Connection

A simple Next.js application demonstrating wallet connection using RainbowKit and Wagmi.

## Features

- 🌈 **RainbowKit Integration** - Beautiful wallet connection UI
- � **Multiple Wallets** - Support for MetaMask, WalletConnect, and more
- ⚡ **Next.js 15** - Built with the latest Next.js features
- 🎨 **Tailwind CSS** - Modern and responsive design
- 🔗 **Multi-chain** - Support for Ethereum, Polygon, Optimism, Arbitrum, Base

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- An Ethereum wallet (MetaMask, WalletConnect, etc.)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bit-refill
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.local.example .env.local
```

Edit `.env.local` to add your WalletConnect Project ID:
```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your-walletconnect-project-id
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

### Wallet Connection Flow

1. **Connect Wallet**: Users click the connect button to open wallet selection
2. **Choose Wallet**: Select from MetaMask, WalletConnect, Coinbase Wallet, etc.
3. **View Address**: Once connected, the user's wallet address is displayed

### Key Components

- **`RainbowKitProvider`**: Provides wallet connection functionality
- **`WagmiProvider`**: Handles blockchain interactions
- **`ConnectButton`**: Pre-built button component from RainbowKit
- **`useAccount`**: Hook to get connected wallet information

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Wallet**: RainbowKit, Wagmi, Viem
- **Blockchain**: Multi-chain support (Ethereum, Polygon, etc.)

## Supported Chains

- Ethereum Mainnet
- Polygon
- Optimism
- Arbitrum
- Base
- Sepolia (testnet)

## Development

### Adding New Chains

To add support for additional blockchains, edit `src/lib/wagmi.ts`:

```typescript
import { newChain } from 'wagmi/chains';

const config = getDefaultConfig({
  // ...
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia, newChain],
  // ...
});
```

### Customizing Wallet Options

RainbowKit automatically includes popular wallets. To customize which wallets are shown, you can configure the RainbowKitProvider in `src/components/providers.tsx`.

## Deployment

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

### Vercel Deployment

This app is ready for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard (if using WalletConnect)
4. Deploy

## Learn More

- [RainbowKit Documentation](https://rainbowkit.com)
- [Wagmi Documentation](https://wagmi.sh/)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT License
# Bit-Refill
