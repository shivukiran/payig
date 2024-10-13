import { useEffect, useState } from "react"
import { Button } from "./button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <>
        <div className="font-bold mt-6 text-lg">
            Users :
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

 function User({user}) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center border-b py-2">
            {/* Left Column: User Info */}
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                        <span className="text-2xl text-white">{user.firstName[0].toUpperCase()}</span>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-semibold">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            {/* Right Column: Button */}
            <div className="flex flex-col justify-center">
                <Button
                    onClick={() => {
                        navigate("/send?id=" + user._id + "&name=" + user.firstName);
                    }}
                    label={"Send Money"}
                />
            </div>
        </div>
    );
}