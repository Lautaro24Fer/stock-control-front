import { IProductMocked } from "../models/mock-data";

const productsMocked: IProductMocked[] = [
	{
		id: 1,
		name: "Smartphone X",
		category: { id: 1, name: "Electronics" },
		price: 799.99,
		quantity: 50,
		date: new Date("2023-10-01"),
		method: { id: 1, name: "Credit Card" }
	},
	{
		id: 2,
		name: "Laptop Pro",
		category: { id: 1, name: "Electronics" },
		price: 1299.99,
		quantity: 30,
		date: new Date("2023-09-25"),
		method: { id: 2, name: "PayPal" }
	},
	{
		id: 3,
		name: "Wireless Headphones",
		category: { id: 1, name: "Electronics" },
		price: 199.99,
		quantity: 100,
		date: new Date("2023-09-15"),
		method: { id: 1, name: "Credit Card" }
	},
	{
		id: 4,
		name: "Coffee Maker",
		category: { id: 2, name: "Home Appliances" },
		price: 89.99,
		quantity: 75,
		date: new Date("2023-10-05"),
		method: { id: 3, name: "Debit Card" }
	},
	{
		id: 5,
		name: "Vacuum Cleaner",
		category: { id: 2, name: "Home Appliances" },
		price: 149.99,
		quantity: 40,
		date: new Date("2023-09-10"),
		method: { id: 1, name: "Credit Card" }
	},
	{
		id: 6,
		name: "Gaming Console",
		category: { id: 1, name: "Electronics" },
		price: 499.99,
		quantity: 60,
		date: new Date("2023-08-30"),
		method: { id: 4, name: "Bitcoin" }
	},
	{
		id: 7,
		name: "Smartwatch",
		category: { id: 1, name: "Electronics" },
		price: 299.99,
		quantity: 90,
		date: new Date("2023-09-20"),
		method: { id: 2, name: "PayPal" }
	},
	{
		id: 8,
		name: "Blender",
		category: { id: 2, name: "Home Appliances" },
		price: 49.99,
		quantity: 110,
		date: new Date("2023-10-03"),
		method: { id: 1, name: "Credit Card" }
	},
	{
		id: 9,
		name: "Electric Kettle",
		category: { id: 2, name: "Home Appliances" },
		price: 39.99,
		quantity: 130,
		date: new Date("2023-09-18"),
		method: { id: 3, name: "Debit Card" }
	},
	{
		id: 10,
		name: "4K TV",
		category: { id: 1, name: "Electronics" },
		price: 899.99,
		quantity: 25,
		date: new Date("2023-10-07"),
		method: { id: 4, name: "Bitcoin" }
	}
];

export default productsMocked;