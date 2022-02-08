import React, { useEffect, useState, useReducer, useCallback } from 'react';
import Layout from "components/layout/Layout";
import Banner from "components/Banner";
import Career from "components/Career";
import Roadmap from "components/Roadmap";

import { makeStyles } from "@material-ui/core/styles";
import Onboard from 'bnc-onboard'
import Web3 from 'web3'


const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const initialState = {
  loading: false,
  provider: null,
  address: null,
  chainId: null,
  smartContract: null,
  web3Provider: null,
  data: {
    totalSupply: 0,
    cost: 0.035,
    maxSupply: 8000,
    maxMintAmount: 10,
    saleActive: false,
    presaleActive: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
        smartContract: action.smartContract,
        loading: false,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address,
        loading: false,
      };
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId,
        loading: false,
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'RESET_WEB3_PROVIDER':
      return initialState;
    default:
      throw new Error();
  }
}

const BLOCKNATIVE_KEY = '4b61abf8-4815-4c5a-9844-bdc06404c7fd'

// the network id that your dapp runs on
const NETWORK_ID = 4

// initialize web3
let web3;

// initialize onboard
const onboard = Onboard({
  dappId: BLOCKNATIVE_KEY,
  networkId: NETWORK_ID,
  subscriptions: {
    wallet: wallet => {
      // instantiate web3 when the user has selected a wallet
      web3 = new Web3(wallet.provider)
      window.localStorage.setItem('selectedWallet', wallet.name)
    }
  }
});

const Index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    address,
    chainId,
    provider,
    web3Provider,
    loading,
    data,
    smartContract,
  } = state;

  const classes = useStyles();

  const connect = useCallback(async function () {
    const provider = await onboard.walletSelect()
    const address = await web3.eth.getAccounts();
    const network = await web3.eth.getChainId();

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      web3Provider: web3,
      provider,
      address: address[0],
      chainId: network,
      smartContract: '',
    });
  }, []);

  // useEffect(() => {
  //   let previouslySelectedWallet = window.localStorage.getItem('selectedWallet');
  //   if (previouslySelectedWallet) {
  //     const fetchWallet = async (previouslySelectedWallet) => {
  //       await onboard.walletSelect(previouslySelectedWallet)
  //     }

  //     fetchWallet();
  //   }
  // }, []);

  return (
    <Layout
      // type your page title and page description.
      title="Mint page"
      description="Mint page"
      account={address}
      onConnect={connect}
    >
      <Banner account={address} onConnect={connect} />
      <Career />
      <Roadmap />
    </Layout>
  );
};

export default Index;
