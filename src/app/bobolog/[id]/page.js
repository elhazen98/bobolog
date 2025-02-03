import { FormDelete } from "@/app/_components/form-delete";
import { FormEdit } from "@/app/_components/form-edit";
import { Back } from "@/app/_components/_components/back-button";
import Link from "next/link";

export default async function Page({ params }) {
    function convertDuration(duration) {
        const durationHour = Math.floor(duration / (1000 * 60 * 60));
        const durationMinutes = Math.floor(
            (duration % (1000 * 60 * 60)) / (1000 * 60)
        );
        return `${durationHour} Hours, ${durationMinutes} Minutes`;
    }

    const { id } = await params;
    const res = await fetch(
        `https://v1.appbackend.io/v1/rows/CZ4qMkdgXm21/${id}`
    );
    const data = await res.json();
    const sleptDate = data.slept_date;
    const awokeDate = data.awoke_date;
    const duration = data.duration;
    const durationConverted = convertDuration(Number(duration));
    const description = data.description;

    if (sleptDate) {
        return (
            <div className="  max-w-80 m-auto py-12 flex flex-col gap-4">
                <div className="text-slate-200 text-4xl font-bold pb-4">
                    Sleep Summary
                </div>
                <div className="text-slate-200">
                    <p>😴 Bedtime:</p>
                    <div className="font-bold text-xl">{sleptDate}</div>
                </div>
                <div className="text-slate-200">
                    <p>😎 Wake time:</p>
                    <div className="font-bold text-xl">{awokeDate}</div>
                </div>
                <div className="text-slate-200">
                    <p>⏰ Total sleep:</p>
                    <div className="font-bold text-xl">{durationConverted}</div>
                </div>
                <div>
                    <p className="text-slate-200 text-xl bg-transparent break-words">
                        "{description}"{" "}
                    </p>
                </div>
                <FormEdit
                    id={id}
                    sleptDate={sleptDate}
                    awokeDate={awokeDate}
                    duration={duration}
                    description={description}
                />
                <FormDelete id={id} />
                <Link href="/">
                    <Back />
                </Link>
            </div>
        );
    } else {
        return (
            <div className="  max-w-80 m-auto py-12 flex flex-col gap-10">
                <p className="text-9xl text-center">💤</p>
                <p className="font-bold text-xl text-slate-200 text-center">
                    No sleep data
                </p>
                <Link href="/">
                    <Back />
                </Link>
            </div>
        );
    }
}
