import { FaCircleUser } from "react-icons/fa6";

export default function User() {
    return (
        <section className="h-50 w-100 bg-amber-100 border-2 shadow-2xl rounded-2xl p-4 m-10 flex flex-col">
            <div className="flex items-center my-2">
            <FaCircleUser />
            <label className="font-extrabold px-2">Choose a Username</label>
            </div>
            <input type="text" className="w-50 bg-amber-200 border-1 rounded-2xl"/>
                {/* <input type="submit" value="Submit" /> */}
            <button type="button" className="font-extrabold my-10 p-4 w-25 bg-amber-500 border-2 rounded-b-full cursor-pointer">Join</button>
        </section>
    )
}