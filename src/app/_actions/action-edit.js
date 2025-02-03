"use server";

import { revalidatePath } from "next/cache";

export async function editDescriptionAction(_, formData) {
    const id = formData.get("id");
    const sleptDate = formData.get("slept_date");
    const awokeDate = formData.get("awoke_date");
    const description = formData.get("description");
    const duration = formData.get("duration");
    console.log("NGETES EDIT");

    await fetch("https://v1.appbackend.io/v1/rows/CZ4qMkdgXm21", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            _id: id,
            slept_date: sleptDate,
            awoke_date: awokeDate,
            description: description,
            duration: duration,
        }),
    });
    revalidatePath("/");
}
