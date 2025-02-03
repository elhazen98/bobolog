import { Button } from "@heroui/react";

export const Record = ({ loading }) => {
    return (
        <Button
            type="submit"
            className="text-slate-950 bg-amber-500 font-bold w-full "
            isLoading={loading}
        >
            record
        </Button>
    );
};
