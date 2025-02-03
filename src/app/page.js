import { Paytone_One } from "next/font/google";
import { DataList } from "./_components/data-list";
import { FormCreate } from "./_components/form-create";

const paytone = Paytone_One({ subsets: ["latin"], weight: "400" });

export default function Page() {
    return (
        <main className="max-w-80 m-auto py-12">
            <header className="font-bold text-7xl pb-12 text-center text-white">
                <div className={paytone.className}>Bobolog</div>
            </header>
            <FormCreate />
            <DataList />
            <div className="text-slate-500 pt-12 text-center text-xs">
                elhazen | ©2025
            </div>
        </main>
    );
}
