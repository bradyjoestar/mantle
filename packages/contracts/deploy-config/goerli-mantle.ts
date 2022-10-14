const config = {
  numDeployConfirmations: 1,
  l1BlockTimeSeconds: 15,
  l2BlockGasLimit: 15_000_000,
  l2ChainId: 1705004,  // l2 chainId
  ctcL2GasDiscountDivisor: 32,
  ctcEnqueueGasCost: 60_000,
  sccFaultProofWindowSeconds: 0,
  sccSequencerPublishWindowSeconds: 12592000,
  bvmSequencerAddress: '0x0a6600ae9d94a0cccc4f8b86c90f505ba99be0cd',
  bvmProposerAddress: '0x733e38C8C6fEf12D3916eAc679Ef8f5Ffb39127B',
  //default bvmBlockSignerAddress
  bvmBlockSignerAddress: '0x00000398232E2064F896018496b4b44b3D62751F',
  bvmFeeWalletAddress: '0x0a6600ae9d94a0cccc4f8b86c90f505ba99be0cd',
  bvmAddressManagerOwner: '0x0a6600ae9d94a0cccc4f8b86c90f505ba99be0cd',
  bvmGasPriceOracleOwner: '0x0a6600ae9d94a0cccc4f8b86c90f505ba99be0cd',
  l1BitAddress: '0x51D7e0e31c2050f381Ce9F1807013A4f74Dae8b1',
}

export default config
