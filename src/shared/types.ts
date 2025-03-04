
export type EmployeeType = {
	id: number;
	firstName: string;
	secondName: string;
	post: string;
	numbers: string[];
	email: string;
	image: string;
};

export type NewType = {
	id?: number;
	titleNews: string;
	description?: string;
	data: string;
	image: string;
};

export type TruckType = {
	id: Number;
	model: string;
	size: string;
	volume: string;
	LoadCapacity: string;
	price: string;
	type: string;
	image: string;
};

export type VacancyType = {
	name: string;
	description: string;
	responsibilities: string[];
	requirement: string[];
	conditions: string[];
};