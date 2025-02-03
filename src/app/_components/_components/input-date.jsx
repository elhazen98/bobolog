import { DatePicker } from "@heroui/react";
import { now, getLocalTimeZone } from "@internationalized/date";

export const InputDate = ({ name, title }) => {
    return (
        <div className="w-full max-w-xl flex flex-row gap-4 font-bold">
            <DatePicker
                name={name}
                hideTimeZone
                showMonthAndYearPickers
                defaultValue={now(getLocalTimeZone())}
                label={title}
            />
        </div>
    );
};
