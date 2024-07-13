import { backendUrl } from "../App";

export const registerUser = async (data) => {
    const response = await fetch(`${backendUrl}/api/auth/register`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    const json =await response.json()
    return json
}

