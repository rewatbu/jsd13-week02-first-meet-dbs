use("coffee-bean-db");

// delete existing data
db.orders.deleteMany({});

// insert mock data into orders collection
db.orders.insertMany([
  {
    _id: "o0001",
    customer: "a0003",
    items: [
      {
        product: "p0002",
        productName: "Ethiopia Yirgacheffe",
        unitPrice: 420,
        quantity: 1,
        subtotal: 420
      },
      {
        product: "p0001",
        productName: "Brazil Santos",
        unitPrice: 350,
        quantity: 1,
        subtotal: 350
      }
    ],
    itemsTotal: 770,
    shippingFee: 60,
    discount: 0,
    totalAmount: 830,
    orderDate: ISODate("2026-07-08T09:15:00Z"),
    status: "Delivered",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Paid",
    shippingAddress: {
      name: "Charlie Davis",
      phone: "0891122334",
      address: "88 Sukhumvit Rd.",
      district: "Khlong Toei",
      province: "Bangkok",
      postalCode: "10110"
    }
  },

  {
    _id: "o0002",
    customer: "a0005",
    items: [
      {
        product: "p0008",
        productName: "House Espresso Blend",
        unitPrice: 680,
        quantity: 1,
        subtotal: 680
      }
    ],
    itemsTotal: 680,
    shippingFee: 60,
    discount: 0,
    totalAmount: 740,
    orderDate: ISODate("2026-07-09T13:20:00Z"),
    status: "Processing",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    shippingAddress: {
      name: "Ethan Taylor",
      phone: "0867891234",
      address: "15 Rama IX Rd.",
      district: "Huai Khwang",
      province: "Bangkok",
      postalCode: "10310"
    }
  },

  {
    _id: "o0003",
    customer: "a0006",
    items: [
      {
        product: "p0012",
        productName: "Panama Boquete",
        unitPrice: 520,
        quantity: 2,
        subtotal: 1040
      }
    ],
    itemsTotal: 1040,
    shippingFee: 60,
    discount: 50,
    totalAmount: 1050,
    orderDate: ISODate("2026-07-09T15:45:00Z"),
    status: "Shipped",
    paymentMethod: "PromptPay",
    paymentStatus: "Paid",
    shippingAddress: {
      name: "Fiona Clark",
      phone: "0845678901",
      address: "55 Chiang Mai Rd.",
      district: "Mueang",
      province: "Chiang Mai",
      postalCode: "50000"
    }
  },

  {
    _id: "o0004",
    customer: "a0009",
    items: [
      {
        product: "p0006",
        productName: "Sumatra Mandheling",
        unitPrice: 430,
        quantity: 1,
        subtotal: 430
      },
      {
        product: "p0014",
        productName: "Peru Cajamarca",
        unitPrice: 385,
        quantity: 2,
        subtotal: 770
      }
    ],
    itemsTotal: 1200,
    shippingFee: 60,
    discount: 0,
    totalAmount: 1260,
    orderDate: ISODate("2026-07-10T10:10:00Z"),
    status: "Pending",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "Pending",
    shippingAddress: {
      name: "Ian Anderson",
      phone: "0856789012",
      address: "99 Nimmanhaemin Rd.",
      district: "Mueang",
      province: "Chiang Mai",
      postalCode: "50200"
    }
  },

  {
    _id: "o0005",
    customer: "a0010",
    items: [
      {
        product: "p0005",
        productName: "Kenya AA",
        unitPrice: 450,
        quantity: 1,
        subtotal: 450
      },
      {
        product: "p0010",
        productName: "Decaf Colombia",
        unitPrice: 430,
        quantity: 1,
        subtotal: 430
      },
      {
        product: "p0001",
        productName: "Brazil Santos",
        unitPrice: 350,
        quantity: 1,
        subtotal: 350
      }
    ],
    itemsTotal: 1230,
    shippingFee: 60,
    discount: 100,
    totalAmount: 1190,
    orderDate: ISODate("2026-07-11T08:30:00Z"),
    status: "Delivered",
    paymentMethod: "Credit Card",
    paymentStatus: "Paid",
    shippingAddress: {
      name: "Julia Thomas",
      phone: "0801234567",
      address: "120 Beach Rd.",
      district: "Mueang",
      province: "Phuket",
      postalCode: "83000"
    }
  },

  {
    _id: "o0006",
    customer: "a0004",
    items: [
      {
        product: "p0003",
        productName: "Colombia Supremo",
        unitPrice: 390,
        quantity: 2,
        subtotal: 780
      },
      {
        product: "p0007",
        productName: "Costa Rica Tarrazu",
        unitPrice: 400,
        quantity: 1,
        subtotal: 400
      }
    ],
    itemsTotal: 1180,
    shippingFee: 60,
    discount: 0,
    totalAmount: 1240,
    orderDate: ISODate("2026-07-12T14:05:00Z"),
    status: "Processing",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Awaiting Payment",
    shippingAddress: {
      name: "Diana Wilson",
      phone: "0823456789",
      address: "50 Lat Phrao Rd.",
      district: "Chatuchak",
      province: "Bangkok",
      postalCode: "10900"
    }
  },

  {
    _id: "o0007",
    customer: "a0007",
    items: [
      {
        product: "p0011",
        productName: "Rwanda Bourbon",
        unitPrice: 440,
        quantity: 1,
        subtotal: 440
      },
      {
        product: "p0013",
        productName: "India Monsooned Malabar",
        unitPrice: 395,
        quantity: 1,
        subtotal: 395
      }
    ],
    itemsTotal: 835,
    shippingFee: 60,
    discount: 0,
    totalAmount: 895,
    orderDate: ISODate("2026-07-13T11:45:00Z"),
    status: "Cancelled",
    paymentMethod: "PromptPay",
    paymentStatus: "Refunded",
    shippingAddress: {
      name: "George Miller",
      phone: "0834567890",
      address: "77 Silom Rd.",
      district: "Bang Rak",
      province: "Bangkok",
      postalCode: "10500"
    }
  }
]);
