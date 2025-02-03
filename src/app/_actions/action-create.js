"use server";

import { revalidatePath } from "next/cache";

export async function recordTimeAction(_, formData) {
    const sleptDate =
        new Date(formData.get("slept-at").split("[")[0]) + 7 * 1000 * 60 * 60;
    const awokeDate =
        new Date(formData.get("awoke-at").split("[")[0]) + 7 * 1000 * 60 * 60;

    let sleptDateSplited = sleptDate.split(" ").slice(0, 5);
    sleptDateSplited[4] = sleptDateSplited[4].slice(0, 5);
    sleptDateSplited.splice(3, 1);
    sleptDateSplited = sleptDateSplited.join(" ");

    let awokeDateSplited = awokeDate.split(" ").slice(0, 5);
    awokeDateSplited[4] = awokeDateSplited[4].slice(0, 5);
    awokeDateSplited.splice(3, 1);
    awokeDateSplited = awokeDateSplited.join(" ");

    const sleptAt = new Date(sleptDate);
    const awokeAt = new Date(awokeDate);
    const durationMs = awokeAt - sleptAt;

    const description = formData.get("description");

    console.log(sleptDate);

    await fetch("https://v1.appbackend.io/v1/rows/CZ4qMkdgXm21", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([
            {
                slept_date: sleptDateSplited,
                awoke_date: awokeDateSplited,
                description: description,
                duration: durationMs,
            },
        ]),
    });
    revalidatePath("/");
}
