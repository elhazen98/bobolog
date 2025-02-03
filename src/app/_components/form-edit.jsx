"use client";

import { Edit } from "./_components/edit-button";
import { useActionState } from "react";
import { editDescriptionAction } from "../_actions/action-edit";

export const FormEdit = ({
    id,
    sleptDate,
    awokeDate,
    description,
    duration,
}) => {
    const [state, formAction, pending] = useActionState(
        editDescriptionAction,
        null
    );
    return (
        <form action={formAction} className="space-y-2">
            <input name="id" defaultValue={id} hidden></input>
            <input name="slept_date" defaultValue={sleptDate} hidden></input>
            <input name="awoke_date" defaultValue={awokeDate} hidden></input>
            <input name="duration" defaultValue={duration} hidden></input>
            <textarea
                name="description"
                defaultValue={description}
                className="max-w-xl gap-4 text-xs bg-slate-200 rounded-xl p-3 w-full"
            ></textarea>
            <Edit loading={pending} />
        </form>
    );
};
