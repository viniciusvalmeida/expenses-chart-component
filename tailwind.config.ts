import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					"Soft red": "hsl(10, 79%, 65%)",
					Cyan: "hsl(186, 34%, 60%)",
				},
				neutral: {
					"Dark brown": "hsl(25, 47%, 15%)",
					"Medium brown": "hsl(28, 10%, 53%)",
					Cream: "hsl(27, 66%, 92%)",
					"Very pale orange": "hsl(33, 100%, 98%)",
				},
			},
		},
	},
	plugins: [],
};
export default config;
