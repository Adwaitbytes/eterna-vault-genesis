
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";

interface WalletContextType {
  address: string | null;
  balance: string;
  isConnected: boolean;
  isConnecting: boolean;
  connectWallet: (provider: string) => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string>('0');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  // Check for saved wallet on mount
  useEffect(() => {
    const savedAddress = localStorage.getItem('walletAddress');
    if (savedAddress) {
      setAddress(savedAddress);
      setBalance('0.5'); // Mock balance
      setIsConnected(true);
      toast.success("Wallet reconnected", {
        description: `Connected to ${savedAddress.substring(0, 6)}...${savedAddress.substring(savedAddress.length - 4)}`,
      });
    }
  }, []);
  
  const connectWallet = async (provider: string) => {
    try {
      setIsConnecting(true);
      
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate mock address based on provider
      const mockAddresses: Record<string, string> = {
        'metamask': '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
        'walletconnect': '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
        'coinbase': '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
        'phantom': '0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8'
      };
      
      const newAddress = mockAddresses[provider] || '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
      
      setAddress(newAddress);
      setBalance('0.5'); // Mock ETH balance
      setIsConnected(true);
      localStorage.setItem('walletAddress', newAddress);
      
      toast.success("Wallet Connected", {
        description: `Connected to ${newAddress.substring(0, 6)}...${newAddress.substring(newAddress.length - 4)}`,
      });
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast.error("Connection failed", {
        description: "Could not connect to wallet. Please try again.",
      });
    } finally {
      setIsConnecting(false);
    }
  };
  
  const disconnectWallet = () => {
    setAddress(null);
    setBalance('0');
    setIsConnected(false);
    localStorage.removeItem('walletAddress');
    toast.info("Wallet disconnected");
  };
  
  return (
    <WalletContext.Provider
      value={{
        address,
        balance,
        isConnected,
        isConnecting,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
