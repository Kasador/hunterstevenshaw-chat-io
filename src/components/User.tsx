import { FaCircleUser } from "react-icons/fa6";

export default function User() {
    return (
        <section className="h-50 w-100 bg-amber-100 border-2 shadow-2xl rounded-2xl p-4 m-10 flex flex-col">
            <div className="flex items-center">
            <FaCircleUser />
            <label className="font-extrabold px-2 text-lg">Choose a Username</label>
            </div>
            <input type="text" className="w-91 bg-amber-200 border-1 rounded-2xl p-2 mt-5"/>
                {/* <input type="submit" value="Submit" /> */}
            <button type="button" className="font-extrabold my-3 p-4 bg-amber-500 border-2 rounded-b-full cursor-pointer hover:bg-amber-400 hover:shadow-2xl duration-200 ease-in-out">Join</button>
        </section>
    )
}