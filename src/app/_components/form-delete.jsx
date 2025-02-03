"use client";

import { Delete } from "./_components/delete-button";
import { useActionState } from "react";
import { deleteTimeAction } from "../_actions/action-delete";
import Link from "next/link";

export const FormDelete = ({ id }) => {
    const [state, formAction, pending] = useActionState(deleteTimeAction, null);
    return (
        <form action={formAction}>
            <input name="id" defaultValue={id} hidden></input>
            <Delete loading={pending} />
        </form>
    );
};
