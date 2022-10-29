import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const HealthContext = React.createContext();

const { ethereum } = window;
const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionsContract;
};


export const HealthProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        patientID: 0,
        bloodGroup: "",
        Sugarlevel: 0,
        bloodPressure: 0,
        rbcCount: 0,
        wbcCount: 0,
        haemoglobin: 0,
        height: 0,
        weight: 0
    });
    const [details, setDetails] = useState([]);
    const [present, setPresent] = useState({
        firstName: "",
        lastName: "",
        patientID: 0,
        bloodGroup: "",
        Sugarlevel: 0,
        bloodPressure: 0,
        rbcCount: 0,
        wbcCount: 0,
        haemoglobin: 0,
        height: 0,
        weight: 0
    });
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };
    const checkWalletisConnected = async () => {
        try {
            if (!ethereum)
                return alert("Please Install Metamask");

            const accounts = await ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            }
            else {
                console.log("No Accounts Found");
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum)
                return alert("Please install Metamask");

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
        }
    }
    const storeDetails = async () => {
        try {
            if (!ethereum)
                return alert("Please install Metamask");
            const {
                firstName,
                lastName,
                patientID,
                bloodGroup,
                Sugarlevel,
                bloodPressure,
                rbcCount,
                wbcCount,
                haemoglobin,
                height,
                weight
            } = formData;

            const healthContract = createEthereumContract();
            await healthContract.adddetails(firstName, lastName, patientID, bloodGroup, Sugarlevel, bloodPressure, rbcCount, wbcCount, haemoglobin, height, weight);
        } catch (error) {
            console.log(error);
        }
    }
    const getDetails = async () => {
        try {
            if (ethereum) {
                const healthContract = createEthereumContract();
                const count = await healthContract.getPatientCount();
                const allTransaction = [];
                for (let i = 1; i <= count; i++) {
                    const transaction = await healthContract.getPatient(i);
                    if (transaction.firstName === 'x')
                        ;
                    else
                        allTransaction.push(transaction);
                }
                console.log(allTransaction);
                const structuredTransactions = allTransaction.map((transaction) => ({
                    firstName: transaction.firstName,
                    lastName: transaction.lastName,
                    patientID: transaction.id,
                    bloodGroup: transaction.bloodGroup,
                    Sugarlevel: transaction.sugarlevel,
                    bloodPressure: transaction.bloodpressure,
                    rbcCount: transaction.RBCcount,
                    wbcCount: transaction.WBCcount,
                    haemoglobin: transaction.Haemoglobin,
                    height: transaction.Height,
                    weight: transaction.Weight
                }));
                setDetails(structuredTransactions);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        checkWalletisConnected();
        getDetails();
    }, [currentAccount]);


    return (
        <HealthContext.Provider value={{ connectWallet, currentAccount, formData, handleChange, storeDetails, details, present, setPresent }}>
            {children}
        </HealthContext.Provider>
    )
}