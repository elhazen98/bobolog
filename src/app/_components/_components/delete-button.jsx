import { Button } from "@heroui/react";

export const Delete = ({ loading }) => {
    return (
        <Button
            type="submit"
            className="text-slate-200 bg-rose-700 font-bold w-full "
            isLoading={loading}
        >
            Delete
        </Button>
    );
};
