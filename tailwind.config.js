/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"medium-carmine": "#AC3939",
				"granite-gray": "#666666",
				"dark-liver": "#4D4D4D",
				"regal-blue": "#004466",
				granite: "#808080",
				"dark-green-blue": "#1E555C",
				"gable-green": "#13353A",
				"antique-white": "#FAEBD7",
			},
		},
	},
	plugins: [],
};
