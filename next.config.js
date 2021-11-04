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
	}
};

module.exports = data;
