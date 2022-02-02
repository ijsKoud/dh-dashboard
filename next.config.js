const parseDomain = (str) => {
	if (typeof str !== "string") return;
	str = str.replace(/https?:\/\//g, "");
	if (str.includes(":")) str = str.split(":")[0];

	return str;
};

/** @type {import('next').NextConfig} */
const data = {
	reactStrictMode: true,
	images: {
		domains: [`${parseDomain(process.env.NEXT_PUBLIC_API)}`, "static.daangamesdg.xyz", "cdn.discordapp.com"]
	},
	redirects: () => [
		{
			permanent: true,
			source: "/discord",
			destination: "https://draavo.xyz/discord",
		},
		{
			permanent: true,
			source: "/github",
			destination: "https://github.com/DaanGamesDG/dh-dashboard",
		},
		{
			permanent: true,
			source: "/mod-apps",
			destination: "https://docs.google.com/forms/d/e/1FAIpQLSePVyx5uOCYeiWThuxUaFIZZYeCd9CTQClEV49XdBnN_Tskpw/viewform",
		}
	],
};

module.exports = data;
