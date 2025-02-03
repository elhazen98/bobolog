import Link from "next/link";

export const DataList = async () => {
    function convertDuration(duration) {
        const durationHour = Math.floor(duration / (1000 * 60 * 60));
        const durationMinutes = Math.floor(
            (duration % (1000 * 60 * 60)) / (1000 * 60)
        );
        return `${durationHour} Hours, ${durationMinutes} Minutes`;
    }

    const res = await fetch("https://v1.appbackend.io/v1/rows/CZ4qMkdgXm21");
    const { data } = await res.json();

    const durations = data.map((item) => Number(item.duration));

    const maxDuration = durations.length
        ? convertDuration(Math.max(...durations))
        : "No data recorded";
    const minDuration = durations.length
        ? convertDuration(Math.min(...durations))
        : "No data recorded";

    const averageDuration = durations.length
        ? convertDuration(
              Math.floor(
                  durations.reduce((sum, num) => sum + num, 0) /
                      durations.length
              )
          )
        : "No data recorded";

    return (
        <div className="space-y-4 p-4 max-w-68">
            <div className="text-white text-center font-bold">
                Your Sleep Record :
            </div>
            <div className="flex flex-col gap-3">
                {data.map((item) => {
                    const sleptDate = item.slept_date;
                    const awokeDate = item.awoke_date;
                    const duration = convertDuration(item.duration);

                    return (
                        <Link
                            key={item._id}
                            href={`/bobolog/${item._id}`}
                            className="hover:scale-105 transition duration-300"
                        >
                            <div className=" bg-slate-800 text-slate-200 rounded-xl text-sm p-3">
                                <div className="flex justify-between items-center">
                                    <div className="font-bold">{duration}</div>
                                    <div className="text-xs text-right">
                                        <div>{sleptDate}</div>
                                        <div>{awokeDate}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div className="grid grid-cols-3 gap-2 text-slate-200 text-center font-bold">
                <div className="space-y-2 h-20">
                    <div className="bg-slate-600 rounded-xl text-sm p-3 h-full">
                        <div>{averageDuration}</div>
                    </div>
                    <div className="text-xs font-bold">Time Average</div>
                </div>
                <div className="space-y-2 h-20">
                    <div className="bg-rose-700 rounded-xl text-sm p-3 h-full items-center">
                        <div>{maxDuration}</div>
                    </div>
                    <div className="text-xs font-bold">Longest Sleep</div>
                </div>
                <div className="space-y-2 h-20">
                    <div className="bg-teal-800 rounded-xl text-sm p-3 h-full items-center">
                        <div>{minDuration}</div>
                    </div>
                    <div className="text-xs font-bold">Shortest Sleep</div>
                </div>
            </div>
        </div>
    );
};
