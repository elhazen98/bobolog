"use client";

import { useActionState } from "react";
import { InputDate2 } from "./_components/input-date2";
import { InputDescription2 } from "./_components/input-description2";
import { Record } from "./_components/record-button";
import { recordTimeAction } from "../_actions/action-create";

export const FormCreate = () => {
    const [state, formAction, pending] = useActionState(recordTimeAction, null);
    return (
        <form action={formAction} className="p-4 space-y-4 max-w-68 m-auto">
            <div className="text-white text-center font-bold">
                Good morning! How did you sleep?
            </div>
            <InputDate2 name="slept-at" title="Slept At" />
            <InputDate2 name="awoke-at" title="Awoke At" />
            <InputDescription2 />
            <Record loading={pending} />
        </form>
    );
};
