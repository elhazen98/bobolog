"use server";

import { revalidatePath } from "next/cache";

export async function deleteTimeAction(_, formData) {
    const id = formData.get("id");
    console.log("NGETES DELETE");
    await fetch("https://v1.appbackend.io/v1/rows/CZ4qMkdgXm21", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([id]),
    });
    revalidatePath("/");
}
