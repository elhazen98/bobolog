import { Button } from "@heroui/react";

export const Back = ({ loading }) => {
    return (
        <Button
            type="submit"
            className="text-slate-200 bg-slate-600 font-bold w-full "
            isLoading={loading}
        >
            Back
        </Button>
    );
};
