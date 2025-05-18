let web3;
let accounts;

async function connectWallet() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            document.getElementById('walletInfo').innerText = `Connected: ${accounts[0]}`;
        } catch (error) {
            document.getElementById('walletInfo').innerText = `Error: ${error.message}`;
        }
    } else {
        document.getElementById('walletInfo').innerText = 'MetaMask not detected. Please install MetaMask.';
    }
}

async function sendTransaction() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    if (!web3 || !accounts) {
        document.getElementById('transactionStatus').innerText = 'Please connect your wallet first.';
        return;
    }

    if (!recipient || !amount) {
        document.getElementById('transactionStatus').innerText = 'Please provide a recipient address and amount.';
        return;
    }

    try {
        const transactionParameters = {
            from: accounts[0],
            to: recipient,
            value: web3.utils.toWei(amount, 'ether'),
        };

        const txHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });

        document.getElementById('transactionStatus').innerText = `Transaction sent: ${txHash}`;
    } catch (error) {
        document.getElementById('transactionStatus').innerText = `Error: ${error.message}`;
    }
}