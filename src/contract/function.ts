import { writeContract, readContract, waitForTransactionReceipt } from "@wagmi/core";
import { CONTRACT_ADDRESSES } from "./addresses";
import {FluidTokenAbi, LPTokenAbi, FluidAMMAbi, YieldFarmingAbi, FluidGovernanceAbi, FlashLoanProviderAbi, MockPriceOracleAbi, ChainlinkPriceOracleAbi, BTCVaultAbi, LendingPoolAbi, DualStakingAbi} from "./contract";
import {config} from "../lib/wagmi";

const FluidTokenAddress = CONTRACT_ADDRESSES.FluidToken as `0x${string}`;
const LPTokenAddress = CONTRACT_ADDRESSES.LPToken as `0x${string}`;
const FluidAMMAddress = CONTRACT_ADDRESSES.FluidAMM as `0x${string}`;
const YieldFarmingAddress = CONTRACT_ADDRESSES.YieldFarming as `0x${string}`;
const FluidGovernanceAddress = CONTRACT_ADDRESSES.FluidGovernance as `0x${string}`;
const FlashLoanProviderAddress = CONTRACT_ADDRESSES.FlashLoanProvider as `0x${string}`;
const MockPriceOracleAddress = CONTRACT_ADDRESSES.MockPriceOracle as `0x${string}`;
const ChainlinkPriceOracleAddress = CONTRACT_ADDRESSES.ChainlinkPriceOracle as `0x${string}`;
const BTCVaultAddress = CONTRACT_ADDRESSES.BTCVault as `0x${string}`;
const LendingPoolAddress = CONTRACT_ADDRESSES.LendingPool as `0x${string}`;
const DualStakingAddress = CONTRACT_ADDRESSES.DualStaking as `0x${string}`;

// -------------------------------------
// ------------FLUID TOKEN--------------
// -------------------------------------

// WRITE
export const configFluidTokenMint = async (
  to: `0x${string}`,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidTokenAddress,
      abi: FluidTokenAbi,
      functionName: "mint",
      args: [to, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("FLUID mint failed:", error);
    throw new Error("Mint transaction reverted or failed");
  }
};

// READ
export const configFluidTokenName = async () => {
  return readContract(config, { address: FluidTokenAddress, abi: FluidTokenAbi, functionName: "name" });
};

export const configFluidTokenSymbol = async () => {
  return readContract(config, { address: FluidTokenAddress, abi: FluidTokenAbi, functionName: "symbol" });
};

export const configFluidTokenDecimals = async () => {
  return readContract(config, { address: FluidTokenAddress, abi: FluidTokenAbi, functionName: "decimals" });
};

export const configFluidTokenTotalSupply = async () => {
  return readContract(config, { address: FluidTokenAddress, abi: FluidTokenAbi, functionName: "totalSupply" });
};

export const configFluidTokenBalanceOf = async (user: `0x${string}`) => {
  return readContract(config, {
    address: FluidTokenAddress,
    abi: FluidTokenAbi,
    functionName: "balanceOf",
    args: [user],
  });
};

export const configFluidTokenAllowance = async (
  owner: `0x${string}`,
  spender: `0x${string}`
) => {
  return readContract(config, {
    address: FluidTokenAddress,
    abi: FluidTokenAbi,
    functionName: "allowance",
    args: [owner, spender],
  });
};

export const configFluidTokenVotingPower = async (user: `0x${string}`) => {
  return readContract(config, {
    address: FluidTokenAddress,
    abi: FluidTokenAbi,
    functionName: "votingPower",
    args: [user],
  });
};

export const configFluidTokenLastVoteBlock = async (user: `0x${string}`) => {
  return readContract(config, {
    address: FluidTokenAddress,
    abi: FluidTokenAbi,
    functionName: "lastVoteBlock",
    args: [user],
  });
};




// -------------------------------------
// ------------ LP TOKEN --------------
// -------------------------------------

// WRITE
export const configLPTokenMint = async (
  to: `0x${string}`,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: LPTokenAddress,
      abi: LPTokenAbi,
      functionName: "mint",
      args: [to, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("LPToken mint failed:", error);
    throw new Error("Mint transaction failed");
  }
};

export const configLPTokenBurn = async (
  from: `0x${string}`,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: LPTokenAddress,
      abi: LPTokenAbi,
      functionName: "burn",
      args: [from, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("LPToken burn failed:", error);
    throw new Error("Burn transaction failed");
  }
};

export const configLPTokenTransfer = async (
  to: `0x${string}`,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: LPTokenAddress,
      abi: LPTokenAbi,
      functionName: "transfer",
      args: [to, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("LPToken transfer failed:", error);
    throw new Error("Transfer transaction failed");
  }
};

export const configLPTokenApprove = async (
  spender: `0x${string}`,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: LPTokenAddress,
      abi: LPTokenAbi,
      functionName: "approve",
      args: [spender, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("LPToken approve failed:", error);
    throw new Error("Approve transaction failed");
  }
};

export const configLPTokenTransferFrom = async (
  from: `0x${string}`,
  to: `0x${string}`,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: LPTokenAddress,
      abi: LPTokenAbi,
      functionName: "transferFrom",
      args: [from, to, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("LPToken transferFrom failed:", error);
    throw new Error("transferFrom transaction failed");
  }
};

// READ

export const configLPTokenName = async () => {
  return readContract(config, {
    address: LPTokenAddress,
    abi: LPTokenAbi,
    functionName: "name",
  });
};

export const configLPTokenSymbol = async () => {
  return readContract(config, {
    address: LPTokenAddress,
    abi: LPTokenAbi,
    functionName: "symbol",
  });
};

export const configLPTokenDecimals = async () => {
  return readContract(config, {
    address: LPTokenAddress,
    abi: LPTokenAbi,
    functionName: "decimals",
  });
};

export const configLPTokenTotalSupply = async () => {
  return readContract(config, {
    address: LPTokenAddress,
    abi: LPTokenAbi,
    functionName: "totalSupply",
  });
};

export const configLPTokenBalanceOf = async (user: `0x${string}`) => {
  return readContract(config, {
    address: LPTokenAddress,
    abi: LPTokenAbi,
    functionName: "balanceOf",
    args: [user],
  });
};

export const configLPTokenAllowance = async (
  owner: `0x${string}`,
  spender: `0x${string}`
) => {
  return readContract(config, {
    address: LPTokenAddress,
    abi: LPTokenAbi,
    functionName: "allowance",
    args: [owner, spender],
  });
};






// -------------------------------------
// --------------FLUID AMM--------------
// -------------------------------------

// WRITE
export const configFluidAMMCreatePool = async (
  tokenA: `0x${string}`,
  tokenB: `0x${string}`,
  feeRate: number,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidAMMAddress,
      abi: FluidAMMAbi,
      functionName: "createPool",
      args: [tokenA, tokenB, feeRate],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("createPool failed:", error);
    throw new Error("createPool transaction failed");
  }
};

export const configFluidAMMAddLiquidity = async (
  poolId: `0x${string}`,
  amountADesired: bigint,
  amountBDesired: bigint,
  amountAMin: bigint,
  amountBMin: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidAMMAddress,
      abi: FluidAMMAbi,
      functionName: "addLiquidity",
      args: [poolId, amountADesired, amountBDesired, amountAMin, amountBMin],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("addLiquidity failed:", error);
    throw new Error("addLiquidity transaction failed");
  }
};

export const configFluidAMMRemoveLiquidity = async (
  poolId: `0x${string}`,
  lpTokens: bigint,
  amountAMin: bigint,
  amountBMin: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidAMMAddress,
      abi: FluidAMMAbi,
      functionName: "removeLiquidity",
      args: [poolId, lpTokens, amountAMin, amountBMin],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("removeLiquidity failed:", error);
    throw new Error("removeLiquidity transaction failed");
  }
};

export const configFluidAMMSwap = async (
  poolId: `0x${string}`,
  tokenIn: `0x${string}`,
  amountIn: bigint,
  amountOutMin: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidAMMAddress,
      abi: FluidAMMAbi,
      functionName: "swap",
      args: [poolId, tokenIn, amountIn, amountOutMin],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("swap failed:", error);
    throw new Error("swap transaction failed");
  }
};

// READ
export const configFluidAMMGetAmountOut = async (
  poolId: `0x${string}`,
  tokenIn: `0x${string}`,
  amountIn: bigint
) => {
  return readContract(config, {
    address: FluidAMMAddress,
    abi: FluidAMMAbi,
    functionName: "getAmountOut",
    args: [poolId, tokenIn, amountIn],
  });
};






// -------------------------------------
// -----------YIELD FARMING------------
// -------------------------------------

// WRITE
export const configYieldFarmingCreateFarm = async (
  stakingToken: `0x${string}`,
  rewardToken: `0x${string}`,
  rewardRate: bigint,
  duration: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: YieldFarmingAddress,
      abi: YieldFarmingAbi,
      functionName: "createFarm",
      args: [stakingToken, rewardToken, rewardRate, duration],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("createFarm failed:", error);
    throw new Error("createFarm transaction failed");
  }
};

export const configYieldFarmingStake = async (
  farmId: bigint,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: YieldFarmingAddress,
      abi: YieldFarmingAbi,
      functionName: "stake",
      args: [farmId, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("stake failed:", error);
    throw new Error("stake transaction failed");
  }
};

export const configYieldFarmingUnstake = async (
  farmId: bigint,
  amount: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: YieldFarmingAddress,
      abi: YieldFarmingAbi,
      functionName: "unstake",
      args: [farmId, amount],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("unstake failed:", error);
    throw new Error("unstake transaction failed");
  }
};

export const configYieldFarmingClaimReward = async (
  farmId: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: YieldFarmingAddress,
      abi: YieldFarmingAbi,
      functionName: "claimReward",
      args: [farmId],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("claimReward failed:", error);
    throw new Error("claimReward transaction failed");
  }
};


// READ 
export const configYieldFarmingGetFarmInfo = async (farmId: bigint) => {
  return readContract(config, {
    address: YieldFarmingAddress,
    abi: YieldFarmingAbi,
    functionName: "getFarmInfo",
    args: [farmId],
  });
};

export const configYieldFarmingGetUserInfo = async (
  farmId: bigint,
  user: `0x${string}`
) => {
  return readContract(config, {
    address: YieldFarmingAddress,
    abi: YieldFarmingAbi,
    functionName: "getUserInfo",
    args: [farmId, user],
  });
};

export const configYieldFarmingRewardPerToken = async (farmId: bigint) => {
  return readContract(config, {
    address: YieldFarmingAddress,
    abi: YieldFarmingAbi,
    functionName: "rewardPerToken",
    args: [farmId],
  });
};

export const configYieldFarmingEarned = async (
  farmId: bigint,
  user: `0x${string}`
) => {
  return readContract(config, {
    address: YieldFarmingAddress,
    abi: YieldFarmingAbi,
    functionName: "earned",
    args: [farmId, user],
  });
};

export const configYieldFarmingLastTimeRewardApplicable = async (
  farmId: bigint
) => {
  return readContract(config, {
    address: YieldFarmingAddress,
    abi: YieldFarmingAbi,
    functionName: "lastTimeRewardApplicable",
    args: [farmId],
  });
};






// -------------------------------------
// -----------FLUID GOVERNANCE---------
// -------------------------------------

// WRITE
export const configFluidGovernancePropose = async (
  description: string,
  target: `0x${string}`,
  data: `0x${string}`,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidGovernanceAddress,
      abi: FluidGovernanceAbi,
      functionName: "propose",
      args: [description, target, data],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("propose failed:", error);
    throw new Error("propose transaction failed");
  }
};

export const configFluidGovernanceVote = async (
  proposalId: bigint,
  support: boolean,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidGovernanceAddress,
      abi: FluidGovernanceAbi,
      functionName: "vote",
      args: [proposalId, support],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("vote failed:", error);
    throw new Error("vote transaction failed");
  }
};

export const configFluidGovernanceExecute = async (
  proposalId: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FluidGovernanceAddress,
      abi: FluidGovernanceAbi,
      functionName: "execute",
      args: [proposalId],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("execute failed:", error);
    throw new Error("execute transaction failed");
  }
};

// READ
export const configFluidGovernanceGetProposalState = async (proposalId: bigint) => {
  return readContract(config, {
    address: FluidGovernanceAddress,
    abi: FluidGovernanceAbi,
    functionName: "getProposalState",
    args: [proposalId],
  });
};

export const configFluidGovernanceGetProposalInfo = async (proposalId: bigint) => {
  return readContract(config, {
    address: FluidGovernanceAddress,
    abi: FluidGovernanceAbi,
    functionName: "getProposalInfo",
    args: [proposalId],
  });
};

export const configFluidGovernanceHasVoted = async (
  proposalId: bigint,
  voter: `0x${string}`
) => {
  return readContract(config, {
    address: FluidGovernanceAddress,
    abi: FluidGovernanceAbi,
    functionName: "hasVoted",
    args: [proposalId, voter],
  });
};

export const configFluidGovernanceGetVoteChoice = async (
  proposalId: bigint,
  voter: `0x${string}`
) => {
  return readContract(config, {
    address: FluidGovernanceAddress,
    abi: FluidGovernanceAbi,
    functionName: "getVoteChoice",
    args: [proposalId, voter],
  });
};






// -------------------------------------
// -----------FLASH LOANS--------------
// -------------------------------------

// WRITE
export const configFlashLoanProviderFlashLoan = async (
  receiver: `0x${string}`,
  token: `0x${string}`,
  amount: bigint,
  params: `0x${string}`,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: FlashLoanProviderAddress,
      abi: FlashLoanProviderAbi,
      functionName: "flashLoan",
      args: [receiver, token, amount, params],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("flashLoan failed:", error);
    throw new Error("flashLoan transaction failed");
  }
};

// READ
export const configFlashLoanProviderGetFee = async (
  token: `0x${string}`,
  amount: bigint
) => {
  return readContract(config, {
    address: FlashLoanProviderAddress,
    abi: FlashLoanProviderAbi,
    functionName: "getFlashLoanFee",
    args: [token, amount],
  });
};

export const configFlashLoanProviderLiquidity = async (token: `0x${string}`) => {
  return readContract(config, {
    address: FlashLoanProviderAddress,
    abi: FlashLoanProviderAbi,
    functionName: "getAvailableLiquidity",
    args: [token],
  });
};







// -------------------------------------
// -----------PRICE ORACLES------------
// -------------------------------------

// WRITE
export const configMockPriceOracleSetPrice = async (
  asset: `0x${string}`,
  price: bigint,
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: MockPriceOracleAddress,
      abi: MockPriceOracleAbi,
      functionName: "setPrice",
      args: [asset, price],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("MockOracle setPrice failed:", error);
    throw new Error("MockOracle setPrice transaction failed");
  }
};

export const configMockPriceOracleSetPrices = async (
  assets: `0x${string}`[],
  prices: bigint[],
  account: `0x${string}`
) => {
  try {
    const hash = await writeContract(config, {
      address: MockPriceOracleAddress,
      abi: MockPriceOracleAbi,
      functionName: "setPrices",
      args: [assets, prices],
      account,
    });

    const receipt = await waitForTransactionReceipt(config, { hash });
    return receipt;
  } catch (error) {
    console.error("MockOracle setPrices failed:", error);
    throw new Error("MockOracle setPrices transaction failed");
  }
};

// READ
export const configMockPriceOracleGetPrice = async (asset: `0x${string}`) => {
  return readContract(config, {
    address: MockPriceOracleAddress,
    abi: MockPriceOracleAbi,
    functionName: "getPrice",
    args: [asset],
  });
};

export const configMockPriceOracleGetLastUpdateTime = async (asset: `0x${string}`) => {
  return readContract(config, {
    address: MockPriceOracleAddress,
    abi: MockPriceOracleAbi,
    functionName: "getLastUpdateTime",
    args: [asset],
  });
};

export const configMockPriceOracleIsStale = async (
  asset: `0x${string}`,
  maxAge: bigint
) => {
  return readContract(config, {
    address: MockPriceOracleAddress,
    abi: MockPriceOracleAbi,
    functionName: "isPriceStale",
    args: [asset, maxAge],
  });
};




// READ
export const configChainlinkPriceOracleGetPrice = async (asset: `0x${string}`) => {
  return readContract(config, {
    address: ChainlinkPriceOracleAddress,
    abi: ChainlinkPriceOracleAbi,
    functionName: "getPrice",
    args: [asset],
  });
};

export const configChainlinkPriceOracleGetPriceWithTimestamp = async (
  asset: `0x${string}`
) => {
  return readContract(config, {
    address: ChainlinkPriceOracleAddress,
    abi: ChainlinkPriceOracleAbi,
    functionName: "getPriceWithTimestamp",
    args: [asset],
  });
};









// -------------------------------------
// -----------BTC VAULT----------------
// -------------------------------------

// WRITE
export const configBTCVaultCreateVault = async (
  btcAmount: bigint,
  usdtToBorrow: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "createVault",
    args: [btcAmount, usdtToBorrow],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configBTCVaultAddCollateral = async (
  btcAmount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "addCollateral",
    args: [btcAmount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configBTCVaultRepayDebt = async (
  usdtAmount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "repayDebt",
    args: [usdtAmount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configBTCVaultWithdrawCollateral = async (
  btcAmount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "withdrawCollateral",
    args: [btcAmount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configBTCVaultBorrow = async (
  usdtAmount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "borrow",
    args: [usdtAmount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};


export const configBTCVaultAddLiquidator = async (
  liquidator: `0x${string}`,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "addLiquidator",
    args: [liquidator],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configBTCVaultRemoveLiquidator = async (
  liquidator: `0x${string}`,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "removeLiquidator",
    args: [liquidator],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configBTCVaultLiquidateVault = async (
  user: `0x${string}`,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "liquidateVault",
    args: [user],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};


// READ
export const configBTCVaultGetVaultInfo = async (user: `0x${string}`) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "getVaultInfo",
    args: [user],
  });
};

export const configBTCVaultGetCollateralRatio = async (user: `0x${string}`) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "getCollateralizationRatio",
    args: [user],
  });
};

export const configBTCVaultIsLiquidatable = async (user: `0x${string}`) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "isLiquidatable",
    args: [user],
  });
};

export const getBTCVaultMaxBorrow = async (btcAmount: bigint) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "calculateMaxBorrow",
    args: [btcAmount],
  });
};

export const getBTCVaultCurrentDebt = async (user: `0x${string}`) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "getCurrentDebt",
    args: [user],
  });
};

export const getBTCVaultCollateralRatio = async (user: `0x${string}`) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "getCollateralizationRatio",
    args: [user],
  });
};

export const getBTCVaultIsLiquidatable = async (user: `0x${string}`) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "isLiquidatable",
    args: [user],
  });
};

export const getBTCVaultInfo = async (user: `0x${string}`) => {
  return readContract(config, {
    address: BTCVaultAddress,
    abi: BTCVaultAbi,
    functionName: "getVaultInfo",
    args: [user],
  });
};






// ----------------------------------------
// -----------LENDING POOL ----------------
// ----------------------------------------

// WRITE
export const configLendingPoolDeposit = async (
    token: `0x${string}`,
    amount: bigint,
    account: `0x${string}`
) => {
    const hash = await writeContract(config, {
        address: LendingPoolAddress,
        abi: LendingPoolAbi,
        functionName: "deposit",
        args: [token, amount],
        account,
    });
    
    return waitForTransactionReceipt(config, { hash });
};

export const configLendingPoolWithdraw = async (
    token: `0x${string}`,
    amount: bigint,
    account: `0x${string}`
) => {
    const hash = await writeContract(config, {
        address: LendingPoolAddress,
        abi: LendingPoolAbi,
        functionName: "withdraw",
        args: [token, amount],
        account,
    });
    
    return waitForTransactionReceipt(config, { hash });
};

export const configLendingPoolBorrow = async (
    token: `0x${string}`,
    amount: bigint,
    account: `0x${string}`
) => {
    const hash = await writeContract(config, {
        address: LendingPoolAddress,
        abi: LendingPoolAbi,
        functionName: "borrow",
        args: [token, amount],
        account,
    });
    
    return waitForTransactionReceipt(config, { hash });
};

export const configLendingPoolRepay = async (
    token: `0x${string}`,
    amount: bigint,
    account: `0x${string}`
) => {
    const hash = await writeContract(config, {
        address: LendingPoolAddress,
        abi: LendingPoolAbi,
        functionName: "repay",
        args: [token, amount],
        account,
    });
    
    return waitForTransactionReceipt(config, { hash });
}
    

// READ
export const getLendingPoolInfo = async (token: `0x${string}`) => {
    return readContract(config, {
    address: LendingPoolAddress,
    abi: LendingPoolAbi,
    functionName: "getPoolInfo",
    args: [token],
    });
};

export const getLendingUserInfo = async (token: `0x${string}`, user: `0x${string}`) => {
    return readContract(config, {
    address: LendingPoolAddress,
    abi: LendingPoolAbi,
    functionName: "getUserInfo",
    args: [token, user],
    });
};

export const getSupportedLendingTokens = async () => {
    return readContract(config, {
    address: LendingPoolAddress,
    abi: LendingPoolAbi,
    functionName: "getSupportedTokens",
    });
};








// ----------------------------------------
// -----------DUAL STAKING WRITES----------
// ----------------------------------------

// WRITE
export const configDualStakingStake = async (
  btcAmount: bigint,
  fluidAmount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "stake",
    args: [btcAmount, fluidAmount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configDualStakingUnstake = async (
  btcAmount: bigint,
  fluidAmount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "unstake",
    args: [btcAmount, fluidAmount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configDualStakingClaimRewards = async (
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "claimRewards",
    args: [],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configDualStakingEmergencyUnstake = async (
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "emergencyUnstake",
    args: [],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configDualStakingDepositRewardTokens = async (
  amount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "depositRewardTokens",
    args: [amount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const configDualStakingWithdrawExcessRewardTokens = async (
  amount: bigint,
  account: `0x${string}`
) => {
  const hash = await writeContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "withdrawExcessRewardTokens",
    args: [amount],
    account,
  });

  return waitForTransactionReceipt(config, { hash });
};

export const getDualStakingPendingRewards = async (user: `0x${string}`) => {
  return readContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "getPendingRewards",
    args: [user],
  });
};

export const getDualStakingStakeInfo = async (user: `0x${string}`) => {
  return readContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "getStakeInfo",
    args: [user],
  });
};

export const getDualStakingPoolInfo = async () => {
  return readContract(config, {
    address: DualStakingAddress,
    abi: DualStakingAbi,
    functionName: "getPoolInfo",
  });
};
