import { PiUserListBold } from "react-icons/pi";

export default function ListOfUsers() {
    return (
        <section className="h-100 w-100 bg-amber-100 border-2 shadow-2xl rounded-2xl p-4 m-10">
            <div className="flex items-center">
                <PiUserListBold />
                <h1 className="font-extrabold px-2 py-1 text-lg">Current Active Users</h1>
            </div>
            <ol>
                <li>Hunter Shaw</li>
                <li>Joe Doe</li>
                <li>Peter Parker</li>
                <li>Elon Musk</li>
                <li>Joe Doe</li>
            </ol>
        </section>
    )
}