export const InputDescription2 = () => {
    return (
        <div className="max-w-xl gap-4 text-xs bg-slate-200 rounded-xl p-3">
            <div className="font-bold"> How is it</div>
            <textarea
                name="description"
                placeholder="I had a nightmare..."
                className="bg-slate-200 w-full h-12"
            />
        </div>
    );
};
