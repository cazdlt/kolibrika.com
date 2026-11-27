export type Service = {
	title: string;
	description: string;
};

export type SellingPoint = {
	title: string;
	description: string;
};

export type Partner = {
	name: string;
	description?: string;
	logo: string;
};

export type Person = {
	name: string;
	role: string;
	description: string;
	linkedin?: string;
	photo?: string;
	order?: number;
};
