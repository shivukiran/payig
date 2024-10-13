import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios";
export const Dashboard = () => {

    const [balance, setBalance] = useState("Loading..."); // Set initial state to loading
    const [error, setError] = useState(null); // Add state for error handling

    useEffect(() => {
        const fetchBalance = async () => {
        
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}` // Include token if needed
                    }
                });
                setBalance(response.data.balance);
 
        };

        fetchBalance();
    }, []); // Empty
    return <div>
        <Appbar />
        <div className="m-8">        
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}