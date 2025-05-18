# MetaMask Wallet Registration and Transactions

This repository provides a simple web application to demonstrate how to register (connect) a MetaMask wallet and perform basic transactions on the Ethereum blockchain using Web3.js.

## Features
- Connect to MetaMask wallet via browser.
- Display the connected wallet address.
- Send a basic transaction to another Ethereum address.
- Built with HTML, JavaScript, and Web3.js.

## Prerequisites
- [MetaMask](https://metamask.io/) browser extension installed.
- A modern web browser (e.g., Chrome, Firefox).
- Node.js and npm (for local development, optional).
- An Ethereum testnet (e.g., Sepolia) configured in MetaMask with some test ETH.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/metamask-registration-transactions.git
   cd metamask-registration-transactions
   ```

2. **Serve the Application**:
   - You can open `index.html` directly in a browser, but for a better development experience, use a local server:
     ```bash
     npm install -g http-server
     http-server .
     ```
   - Access the app at `http://localhost:8080`.

3. **Install Dependencies**:
   - The project uses Web3.js via a CDN, so no local installation is required. If you want to install Web3.js locally:
     ```bash
     npm install web3
     ```

4. **Configure MetaMask**:
   - Ensure MetaMask is installed and connected to a testnet (e.g., Sepolia).
   - Fund your wallet with test ETH from a faucet (e.g., [Sepolia Faucet](https://sepoliafaucet.com/)).

## Usage
1. Open the web application in your browser.
2. Click the "Connect Wallet" button to link your MetaMask wallet.
3. Once connected, your wallet address will be displayed.
4. Enter a recipient address and amount (in ETH) in the transaction form.
5. Click "Send Transaction" to initiate the transaction via MetaMask.
6. Confirm the transaction in MetaMask.

## Project Structure
- `index.html`: Main HTML file for the web application.
- `app.js`: JavaScript file handling MetaMask connection and transactions.
- `.gitignore`: Ignores unnecessary files (e.g., node_modules, build artifacts).
- `LICENSE`: MIT License for the project.

## Notes
- This is a basic example for educational purposes. For production, add error handling, input validation, and security measures.
- Transactions are performed on the Ethereum blockchain and require gas fees.
- Ensure you are on a testnet to avoid spending real ETH.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
