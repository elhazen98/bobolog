import { Textarea } from "@heroui/react";

export const InputDescription = () => {
    return (
        <Textarea
            classNames="bg-slate-200"
            name="description"
            className="max-w-xs font-bold"
            label="How is it"
            placeholder="I had a nightmare ..."
        />
    );
};
