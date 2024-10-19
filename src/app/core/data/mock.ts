import { IProductMocked } from "../models/mock-data";

const productsMocked: IProductMocked[] = [
  {
    id: 1,
    name: "Laptop",
    category: {
      id: 1,
      name: "Electronics"
    },
    quantity: 50,
    price: 1200,
    date: new Date("2024-10-18T10:30:00Z"),
    method: {
      id: 1,
      name: "Credit Card"
    }
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: {
      id: 2,
      name: "Accessories"
    },
    quantity: 200,
    price: 1200,
    date: new Date("2024-10-18T10:35:00Z"),
    method: {
      id: 2,
      name: "PayPal"
    }
  },
  {
    id: 3,
    name: "Smartphone",
    category: {
      id: 1,
      name: "Electronics"
    },
    price: 1200,
    quantity: 100,
    date: new Date("2024-10-18T10:40:00Z"),
    method: {
      id: 3,
      name: "Debit Card"
    }
  },
  {
    id: 3,
    name: "Smartphone",
    category: {
      id: 1,
      name: "Electronics"
    },
    price: 1200,
    quantity: 100,
    date: new Date("2024-10-18T10:40:00Z"),
    method: {
      id: 3,
      name: "Debit Card"
    }
  },
  {
    id: 3,
    name: "Smartphone",
    category: {
      id: 1,
      name: "Electronics"
    },
    price: 1200,
    quantity: 100,
    date: new Date("2024-10-18T10:40:00Z"),
    method: {
      id: 3,
      name: "Debit Card"
    }
  },
  {
    id: 3,
    name: "Smartphone",
    category: {
      id: 1,
      name: "Electronics"
    },
    price: 1200,
    quantity: 100,
    date: new Date("2024-10-18T10:40:00Z"),
    method: {
      id: 3,
      name: "Debit Card"
    }
  },
  {
    id: 3,
    name: "Smartphone",
    category: {
      id: 1,
      name: "Electronics"
    },
    price: 1200,
    quantity: 100,
    date: new Date("2024-10-18T10:40:00Z"),
    method: {
      id: 3,
      name: "Debit Card"
    }
  },
];

export default productsMocked;