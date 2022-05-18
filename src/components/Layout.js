import { cloneElement, useState, useEffect } from "react";

import FooterComponent from "./FooterComponent";

import NavbarComponent from "./NavbarComponent";

import {
  connectWallet,
  getCurrentWalletConnected,
} from "../helpers/metamask-interact";

const Layout = ({ children }) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const fetchCurrentWallet = async () => {
    const { address, status } = await getCurrentWalletConnected();
    return { address, status };
  };

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountschanged", (accounts) => {
        if (accounts.length > 0) {
          window.currentAccount = accounts[0];
          setwallet(accounts[0]);
          setstatus("👆🏽 write a message in the text-field above.");
        } else {
          setwallet("");
          setstatus("🦊 connect to metamask using the top right button.");
        }
      });
    } else {
      setstatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            you must install metamask, a virtual ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  };

  useEffect(() => {
    const { address, status } = fetchCurrentWallet();
    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  const handleConnect = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  return (
    <div className="content">
      <NavbarComponent
        onConnect={handleConnect}
        walletAddress={walletAddress}
      />
      {cloneElement(children, { status: status })}

      <FooterComponent />
    </div>
  );
};

export default Layout;
