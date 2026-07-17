import { Link } from "react-router-dom";
import { ArrowUpRight, Home, SearchX } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-[70vh] bg-linear-to-br from-white via-amber-50/70 to-slate-100 px-4 py-16 sm:px-6 lg:px-8 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <div className="mx-auto flex max-w-5xl flex-col items-center justify-center rounded-3xl border border-amber-200/80 bg-white/90 p-8 text-center shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-12 lg:flex-row lg:gap-12 lg:text-left">
                    <div className="mb-8 flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300 lg:mb-0">
                        <SearchX className="h-12 w-12" />
                    </div>

                    <div className="max-w-xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
                            404 Error
                        </p>
                        <h1 className="text-4xl font-black text-slate-900 dark:text-white sm:text-5xl">
                            Page not found
                        </h1>
                        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                            The page you are looking for may have moved, been
                            removed, or never existed. Let&apos;s get you back
                            to the best deals on Robobazar.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-500"
                            >
                                <Home className="h-4 w-4" />
                                Back to Home
                            </Link>
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-500 dark:border-slate-700 dark:text-slate-200"
                            >
                                Browse Products
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
