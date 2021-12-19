import React from "react";

export const DashboardtGuide: React.FC = () => {
	return (
		<div className="installation-guide">
			<h2 className="installation__guide-title">Dashboard</h2>
			<p className="installation__guide-alert">
				<i className="fas fa-exclamation-circle" /> Note: this guide is made to help to host it on{" "}
				<a href="https://vercel.com/dashboard">vercel.com</a>. It&apos;s free and easy to use, so don&apos;t worry about adding payment
				methods or anything.
			</p>

			{/* Hosting dashboard guide */}
			<h4 className="installation__guide-guide">Hosting the dashboard</h4>
			<p className="installation__guide-guide">
				First, make sure to fork <a href="https://github.com/DaanGamesDG/dh-dashboard">the dashboard</a>, press the fork button in the right
				top corner to do so.
			</p>
			<p className="installation__guide-guide">
				After that, go to <a href="https://vercel.com/dashboard">vercel.com</a> and click on the &quot;new project&quot; button. Scroll till
				you found the project you just forked and click on import. If you see a screen that asks you to create a team, click on the skip
				button.
			</p>
			<p className="installation__guide-guide">
				Click on the &quot;environment variables dropdown and add the following variable: NAME: &quot;NEXT_PUBLIC_API&quot;, VALUE: &quot;
				{"<the api domain>"}&quot;, after that press add. The api domain is the domain connected to your api, you can use an IP address as
				well but this is <strong>not recommended</strong>! When you did all that, press deploy and wait for the dashboard to be deployed on
				their servers.
			</p>

			{/* domain dashboard guide */}
			<h4 className="installation__guide-guide">Changing the domain</h4>
			<p className="installation__guide-guide">
				To change the domain, go to the dashboard website page on vercel.com and go to settings. After that select the &quot;domains&quot;
				item and you will see a list of domains. To add your own domain, fill in your domain (mywebsite.com field) and press the add button.
				After that, vercel will tell you what to do in order to get the domain to work.
			</p>
		</div>
	);
};
