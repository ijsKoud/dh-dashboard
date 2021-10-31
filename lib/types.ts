export interface User {
	id: string;
	system: boolean;
	locale: string;
	flags: number;
	username: string;
	bot: boolean;
	discriminator: string;
	avatar: string;
	lastMessageChannelID: string;
	createdTimestamp: number;
	defaultAvatarURL: string;
	tag: string;
	avatarURL: string;
	displayAvatarURL: string;
}
