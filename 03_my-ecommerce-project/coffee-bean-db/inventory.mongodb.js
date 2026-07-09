use("coffee-bean-db");

db.inventory.deleteMany({});

db.inventory.insertMany([
  {
    _id: "i0001",
    product: "p0001",
    quantity: 45,
    minimumStock: 10,
    maximumStock: 100,
    lastUpdated: ISODate("2026-07-13T09:15:00Z")
  },
  {
    _id: "i0002",
    product: "p0002",
    quantity: 18,
    minimumStock: 10,
    maximumStock: 80,
    lastUpdated: ISODate("2026-07-13T09:20:00Z")
  },
  {
    _id: "i0003",
    product: "p0003",
    quantity: 32,
    minimumStock: 10,
    maximumStock: 80,
    lastUpdated: ISODate("2026-07-13T09:22:00Z")
  },
  {
    _id: "i0004",
    product: "p0004",
    quantity: 12,
    minimumStock: 10,
    maximumStock: 60,
    lastUpdated: ISODate("2026-07-13T09:25:00Z")
  },
  {
    _id: "i0005",
    product: "p0005",
    quantity: 8,
    minimumStock: 10,
    maximumStock: 60,
    lastUpdated: ISODate("2026-07-13T09:28:00Z")
  },
  {
    _id: "i0006",
    product: "p0006",
    quantity: 25,
    minimumStock: 10,
    maximumStock: 70,
    lastUpdated: ISODate("2026-07-13T09:30:00Z")
  },
  {
    _id: "i0007",
    product: "p0007",
    quantity: 16,
    minimumStock: 10,
    maximumStock: 80,
    lastUpdated: ISODate("2026-07-13T09:35:00Z")
  },
  {
    _id: "i0008",
    product: "p0008",
    quantity: 28,
    minimumStock: 15,
    maximumStock: 70,
    lastUpdated: ISODate("2026-07-13T09:40:00Z")
  },
  {
    _id: "i0009",
    product: "p0009",
    quantity: 35,
    minimumStock: 15,
    maximumStock: 70,
    lastUpdated: ISODate("2026-07-13T09:45:00Z")
  },
  {
    _id: "i0010",
    product: "p0010",
    quantity: 14,
    minimumStock: 10,
    maximumStock: 50,
    lastUpdated: ISODate("2026-07-13T09:50:00Z")
  },
  {
    _id: "i0011",
    product: "p0011",
    quantity: 6,
    minimumStock: 10,
    maximumStock: 50,
    lastUpdated: ISODate("2026-07-13T09:55:00Z")
  },
  {
    _id: "i0012",
    product: "p0012",
    quantity: 4,
    minimumStock: 10,
    maximumStock: 40,
    lastUpdated: ISODate("2026-07-13T10:00:00Z")
  },
  {
    _id: "i0013",
    product: "p0013",
    quantity: 21,
    minimumStock: 10,
    maximumStock: 60,
    lastUpdated: ISODate("2026-07-13T10:05:00Z")
  },
  {
    _id: "i0014",
    product: "p0014",
    quantity: 38,
    minimumStock: 10,
    maximumStock: 80,
    lastUpdated: ISODate("2026-07-13T10:10:00Z")
  },
  {
    _id: "i0015",
    product: "p0015",
    quantity: 0,
    minimumStock: 5,
    maximumStock: 30,
    lastUpdated: ISODate("2026-07-13T10:15:00Z")
  }
]);
