import React from "react";

export const BotGuide: React.FC = () => {
	return (
		<div className="installation-guide">
			<h2 className="installation__guide-title">Discord bot</h2>
			<p className="installation__guide-requirements">
				<span>
					<strong>
						<i className="fas fa-exclamation-circle" /> Minimum requirements:
					</strong>
				</span>
				<span>NodeJS v16.x.x</span>
				<span>The optional NodeJS installations (node-gyp, node-pre-gyp, etc)</span>
				<span>PostgreSQL database</span>
				<span>2GB ram</span>
				<span>2vCpu cores</span>
				<span>20GB storage</span>
			</p>
			<p className="installation__guide-alert">
				<i className="fas fa-exclamation-circle" /> Note: you cannot host this bot on Repl.it, I only provide support for users with questions
				about hosting it on a VPS (virtual private server)
			</p>

			{/* Download bot guide */}
			<h4 className="installation__guide-guide">Downloading the bot</h4>
			<p className="installation__guide-guide">
				First, clone or download of copy of the bot and move it to a place where you think you will be able to find it back
			</p>
			<p className="installation__guide-guide">
				After you downloaded the bot, open a terminal. On windows, open the file explorer, go to the bot folder and run &quot;cmd&quot; in the
				<a href="/assets/guides/directory-bar.png"> directory bar</a>.
			</p>
			<p className="installation__guide-guide">If you want to install this on a VPS, you should already be using a terminal.</p>

			{/* installing bot guide */}
			<h4 className="installation__guide-guide">Installing everything</h4>
			<p className="installation__guide-guide">
				To install everything, run &quot;npm install&quot; in the terminal. If you use yarn as package manager, run &quot;yarn install&quot;.
				If an error pops up saying something about node-gyp or node-pre-gyp, make sure to re-install NodeJS and select the optional
				installations, these are required because some packages need to use it.
			</p>
			<p className="installation__guide-guide">
				After everything installed correctly, create a bot account on{" "}
				<a href="https://discord.com/developers/applications">the Development portal</a>
			</p>
			<p className="installation__guide-guide">
				After creating a bot account, rename the &quot;.env.example&quot; file in the bot folder to &quot;.env&quot;. Replace everything at
				TOKEN in &quot; &quot; with your bot token. If you want to get error notifications, create a webhook in a channel you can see and copy
				the link. Paste that link in the &quot; &quot; of LOGS.
			</p>
			<p className="installation__guide-guide">
				Do this for every other variable in the file. The text in the &quot; &quot; should explain you what they are meant for and how to
				obtain the value. For the database, make sure to replace the {"<username>"} with the username of the postgres account, {"<password>"}{" "}
				with the password to connect to the database and {"<database name>"} with the database name. If you do not know how to create a
				postgresql database, please check <a href="https://www.youtube.com/watch?v=BLH3s5eTL4Y">this tutorial for windows</a> and{" "}
				<a href="https://www.youtube.com/watch?v=9lq74SafVcw">this tutorial for ubuntu</a>.
			</p>
			<p className="installation__guide-guide">
				After everything is installed and every env value is changed, run &quot;npm run prisma-install&quot; or &quot;yarn run
				prisma-install&quot; to get prisma to work with the database.
			</p>

			{/* configuration bot guide */}
			<h4 className="installation__guide-guide">Changing the configuration</h4>
			<p className="installation__guide-guide">
				Before running the bot, make sure to change the config files. Please check the following screenshots to see what the values are for.
			</p>

			<h5 className="installation__guide-guide">Api config</h5>
			<img alt="" src="/assets/guides/api-config.png" title="Api config" onClick={() => window.open("/assets/guides/api-config.png")} />

			<h5 className="installation__guide-guide">Automod config</h5>
			<img
				alt=""
				src="/assets/guides/automod-config.png"
				title="Automod config"
				onClick={() => window.open("/assets/guides/automod-config.png")}
			/>

			<h5 className="installation__guide-guide">Constants config</h5>
			<img
				alt=""
				src="/assets/guides/constants-config.png"
				title="Constants config"
				onClick={() => window.open("/assets/guides/constants-config.png")}
			/>

			<h5 className="installation__guide-guide">Ticket config</h5>
			<img
				alt=""
				src="/assets/guides/ticket-config.png"
				title="Ticket config"
				onClick={() => window.open("/assets/guides/ticket-config.png")}
			/>
		</div>
	);
};
