import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopHeader() {
    const offDisplay = () => {
        const element = document.querySelector("#topHeaderRoot");
        element?.classList.add("hidden");
    };
    return (
        <div
            id="topHeaderRoot"
            className="relative py-1 sm:py-2 flex flex-row bg-slate-950"
        >
            <p className="text-xs sm:text-sm opacity-80 text-slate-200 mx-auto pr-8 sm:pr-12 text-center px-2">
                This is website not for commercial use, all the products are
                fake and the payment gateway is made for testing purposes. You
                can access the admin dashboard with the email:
                admin@robobazar.com and password: pass@123 on{" "}
                <Link
                    to={"/admin/login"}
                    className="text-amber-300 underline font-bold"
                >
                    /admin/login
                </Link>{" "}
            </p>

            <button
                onClick={offDisplay}
                className="absolute right-2 sm:right-4 top-1 sm:top-auto text-amber-300 rounded-full cursor-pointer border border-transparent hover:text-slate-950 hover:bg-amber-300 hover:border-amber-300 p-1"
            >
                <X size={16} />
            </button>
        </div>
    );
}
