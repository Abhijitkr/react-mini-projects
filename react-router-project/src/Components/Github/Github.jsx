import { useLoaderData } from "react-router-dom";


export default function Github() {
    const data = useLoaderData();


    return (
        <>
            <h1 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Follower: {data.followers}</h1>
            <img src={data.avatar_url} alt="Profile Picture" className="mx-auto" />
        </>
    )
}
export const githubProfileLoader = async () => {
    const respose = await fetch("https://api.github.com/users/AbhijitKr");
    return respose.json();
}