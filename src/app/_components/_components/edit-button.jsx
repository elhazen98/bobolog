import { Button } from "@heroui/react";

export const Edit = ({ loading }) => {
    return (
        <Button
            type="submit"
            className="text-slate-200 bg-teal-800 font-bold w-full "
            isLoading={loading}
        >
            Edit
        </Button>
    );
};
