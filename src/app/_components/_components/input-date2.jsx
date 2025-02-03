export const InputDate2 = ({ name, title }) => {
    return (
        <div className="max-w-xl gap-4 text-xs bg-slate-200 rounded-xl p-3">
            <div className="font-bold">{title}</div>
            <input
                placeholder="enter date and time"
                required
                type="datetime-local"
                name={name}
                className="bg-slate-200 w-full"
            />
        </div>
    );
};
