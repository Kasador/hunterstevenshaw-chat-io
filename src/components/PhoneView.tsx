// https://tailwindcss.com/docs/box-shadow
import { IoIosSend } from "react-icons/io";

export default function PhoneView() {
    return (
        <section className="h-150.5 w-72.5 absolute bottom-39 right-27.5 bg-amber-400 shadow-2xl">
            <div className="flex justify-center bg-amber-50 border-2 p-3 absolute bottom-0">
            <input type="text" className="w-54.5 bg-amber-100 border-2 rounded-r-full h-10 p-2 text-md font-mono"/>
                {/* <input type="submit" value="Submit" /> */}
            <button type="button" className="p-2 mx-1 bg-amber-300 border-2 rounded-full cursor-pointer hover:bg-amber-400 hover:shadow-2xl duration-200 ease-in-out">
                <IoIosSend className="text-lg"/>
            </button>
            </div>
        </section>
    )
}