import data from "../data/data.json";

type Data = {
	day: string;
	amount: number;
};
const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const currentDayOfTheWeek = daysOfWeek[new Date().getDay()];

export default async function Home() {
	const datas: Data[] = data;
	return (
		<main className="flex flex-col w-4/12 space-y-4">
			<header className="bg-primary-softRed text-white rounded-xl p-6 flex justify-between">
				<div className="flex flex-col">
					<span className="text-xs">My balance</span>
					<span className="font-bold text-xl">$921.48</span>
				</div>
				<svg
					className="w-14"
					width="72"
					height="48"
					viewBox="0 0 72 48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g fill="none" fillRule="evenodd">
						<circle fill="#382314" cx="48" cy="24" r="24" />
						<circle
							stroke="#FFF"
							strokeWidth="2"
							cx="24"
							cy="24"
							r="23"
						/>
					</g>
				</svg>
			</header>

			<section className="bg-neutral-veryPaleOrange p-6 rounded-xl flex flex-col space-y-4">
				<h3 className="font-extrabold text-2xl text-neutral-darkBrown mb-4">
					Spending - Last 7 days
				</h3>

				<div className="flex justify-between">
					{datas.map((data) => (
						<div
							key={data.amount}
							className="flex flex-col-reverse items-center "
						>
							<span className="text-xs text-neutral-mediumBrown mt-2">
								{data.day}
							</span>
							<div
								className={`${
									data.day === currentDayOfTheWeek
										? "bg-primary-cyan"
										: "bg-primary-softRed"
								}  rounded self-center w-8 min-h-[${data.amount.toFixed()}px]`}
							></div>
						</div>
					))}
				</div>

				<hr />

				<div className="flex justify-between">
					<div className="flex flex-col space-y-1">
						<span className="text-neutral-mediumBrown text-xs">
							Total this month
						</span>
						<span className="font-extrabold text-3xl text-neutral-darkBrown">
							$478.33
						</span>
					</div>
					<div className="flex flex-col self-end">
						<span className="font-extrabold text-xs text-neutral-darkBrown text-end">
							+2.4%
						</span>
						<span className="text-neutral-mediumBrown text-xs">
							from last month
						</span>
					</div>
				</div>
			</section>
		</main>
	);
}
