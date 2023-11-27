export default function Home() {
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
					<g fill="none" fill-rule="evenodd">
						<circle fill="#382314" cx="48" cy="24" r="24" />
						<circle
							stroke="#FFF"
							stroke-width="2"
							cx="24"
							cy="24"
							r="23"
						/>
					</g>
				</svg>
			</header>

			<section className="bg-neutral-veryPaleOrange p-6 rounded-xl flex flex-col space-y-4">
				<h3 className="font-extrabold text-xl text-neutral-darkBrown">
					Spending - Last 7 days
				</h3>

				<hr />

				<div className="flex justify-between">
					<div className="flex flex-col ">
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
