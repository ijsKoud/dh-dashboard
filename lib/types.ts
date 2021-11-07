export interface User {
	id: string;
	tag: string;
	username: string;
	discriminator: string;
	avatar: string;
	rank: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export const ranks: Record<string, string> = {
	"-1": "Outsider",
	"0": "Member",
	"1": "CET",
	"2": "Trial Moderator",
	"3": "Moderator",
	"4": "Manager",
	"5": "Senior",
	"6": "Owner"
};

export interface LeaderboardStat {
	level: {
		id: string;
		level: number;
		xp: number;
		bg: number;
		tag: string;
	};
	i: number;
}

export interface ApiError {
	message: string;
	error: string;
}

export interface SelectOption {
	label: string;
	value: any;
}

export type ModlogsList = {
	user: User | null;
	id: string;
	amount: number;
}[];

export interface ModlogsUserResponse {
	user: User | null;
	logs: Modlog[];
}

export interface Modlog {
	caseId: number;
	id: string;
	moderator: User | null;
	reason: string;
	type: string;
	startDate: Date;
	endDate: Date | null;
	timeoutFinished: boolean | null;
}

export interface TranscriptsResponse {
	files: string[];
}
