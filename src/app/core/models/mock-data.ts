export interface IProductMocked {
	id: number;
	name: string;
	category: IProductCategoryMocked;
	quantity: number;
	date: Date;
	method: IPaymentMethodMocked;
}

export interface ICommerceMocked {
	id: number;
	name: string;
	owner: IUserMocked;
	members: IUserMocked[];
	products: IProductMocked[];
}

export interface IUserMocked {
	id: number;
	name: string;
	email: string;
	password: string;	
	roles: IRoleMocked;
	commerces: ICommerceMocked[];
}

export interface IRoleMocked {
	id: number;
	name: string;
}

export interface IPaymentMethodMocked {
	id: number;
	name: string;
}

export interface IProductCategoryMocked {
	id: number;
	name: string;
}