import Web3 from 'web3';

import ABI from './ABI.json';

const CONTRACT_ADDRESS = '0xdA440067cFBA0Bc0cb36AcAc090E4De385135cdf';

export async function doLogin() {
  if (!window.ethereum)
    throw new Error('Metamask ethereum wallet is not available!');

  const web3 = new Web3(window.ethereum);

  const accounts = await web3.eth.requestAccounts();

  if (!accounts || !accounts.length) throw new Error('Wallet not allowed!');

  localStorage.setItem('wallet', accounts[0].toLowerCase());

  return accounts[0];
}

function getContract() {
  if (!window.ethereum)
    throw new Error('Metamask ethereum wallet is not available!');

  const authenticatedUserWallet = localStorage.getItem('wallet');

  const web3 = new Web3(window.ethereum);

  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, {
    from: authenticatedUserWallet,
  });
}

export async function getOpenRequests(lastId = 0) {
  const contract = getContract();

  const requests = await contract.methods
    .getOpenRequests(lastId + 1, 10)
    .call();

  return requests.filter((request) => request.title !== '');
}

export async function openRequest({ title, description, contact, goal }) {
  const contract = getContract();

  return contract.methods
    .openRequest(title, description, contact, Web3.utils.toWei(goal, 'ether'))
    .send();
}

export async function closeRequest(id) {
  const contract = getContract();

  return contract.methods.closeRequest(id).send();
}
