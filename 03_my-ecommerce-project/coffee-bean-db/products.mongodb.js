use("coffee-bean-db");

// clear existing data
db.products.deleteMany({});

// insert mock data for products collection
db.products.insertMany([
  {
    "_id": "p0001",
    "name": "Brazil Santos",
    "description": "Medium roast with chocolate, caramel, and hazelnut notes.",
    "origin": "Brazil",
    "roastLevel": "Medium",
    "weight": 250,
    "unit": "g",
    "price": 350,
    "imageUrl": "/images/brazil-santos.jpg",
    "isActive": true
  },
  {
    "_id": "p0002",
    "name": "Ethiopia Yirgacheffe",
    "description": "Light roast with floral aroma, citrus acidity, and tea-like body.",
    "origin": "Ethiopia",
    "roastLevel": "Light",
    "weight": 250,
    "unit": "g",
    "price": 420,
    "imageUrl": "/images/ethiopia-yirgacheffe.jpg",
    "isActive": true
  },
  {
    "_id": "p0003",
    "name": "Colombia Supremo",
    "description": "Medium roast featuring cocoa, caramel, and red apple sweetness.",
    "origin": "Colombia",
    "roastLevel": "Medium",
    "weight": 250,
    "unit": "g",
    "price": 390,
    "imageUrl": "/images/colombia-supremo.jpg",
    "isActive": true
  },
  {
    "_id": "p0004",
    "name": "Guatemala Antigua",
    "description": "Medium-dark roast with dark chocolate, spice, and smoky finish.",
    "origin": "Guatemala",
    "roastLevel": "Medium-Dark",
    "weight": 250,
    "unit": "g",
    "price": 410,
    "imageUrl": "/images/guatemala-antigua.jpg",
    "isActive": true
  },
  {
    "_id": "p0005",
    "name": "Kenya AA",
    "description": "Bright acidity with blackcurrant, grapefruit, and wine-like notes.",
    "origin": "Kenya",
    "roastLevel": "Light",
    "weight": 250,
    "unit": "g",
    "price": 450,
    "imageUrl": "/images/kenya-aa.jpg",
    "isActive": true
  },
  {
    "_id": "p0006",
    "name": "Sumatra Mandheling",
    "description": "Full-bodied dark roast with earthy, herbal, and dark chocolate notes.",
    "origin": "Indonesia",
    "roastLevel": "Dark",
    "weight": 250,
    "unit": "g",
    "price": 430,
    "imageUrl": "/images/sumatra-mandheling.jpg",
    "isActive": true
  },
  {
    "_id": "p0007",
    "name": "Costa Rica Tarrazu",
    "description": "Balanced medium roast with honey sweetness and citrus finish.",
    "origin": "Costa Rica",
    "roastLevel": "Medium",
    "weight": 250,
    "unit": "g",
    "price": 400,
    "imageUrl": "/images/costa-rica-tarrazu.jpg",
    "isActive": true
  },
  {
    "_id": "p0008",
    "name": "House Espresso Blend",
    "description": "A rich espresso blend with chocolate, caramel, and toasted almond flavors.",
    "origin": "Brazil, Colombia",
    "roastLevel": "Medium-Dark",
    "weight": 500,
    "unit": "g",
    "price": 680,
    "imageUrl": "/images/house-espresso-blend.jpg",
    "isActive": true
  },
  {
    "_id": "p0009",
    "name": "Morning Blend",
    "description": "Smooth and balanced blend perfect for drip coffee and French press.",
    "origin": "Brazil, Guatemala",
    "roastLevel": "Medium",
    "weight": 500,
    "unit": "g",
    "price": 650,
    "imageUrl": "/images/morning-blend.jpg",
    "isActive": true
  },
  {
    "_id": "p0010",
    "name": "Decaf Colombia",
    "description": "Swiss Water Process decaf with sweet chocolate and nutty flavors.",
    "origin": "Colombia",
    "roastLevel": "Medium",
    "weight": 250,
    "unit": "g",
    "price": 430,
    "imageUrl": "/images/decaf-colombia.jpg",
    "isActive": true
  },
  {
    "_id": "p0011",
    "name": "Rwanda Bourbon",
    "description": "Light-medium roast with berry sweetness and floral aroma.",
    "origin": "Rwanda",
    "roastLevel": "Light-Medium",
    "weight": 250,
    "unit": "g",
    "price": 440,
    "imageUrl": "/images/rwanda-bourbon.jpg",
    "isActive": true
  },
  {
    "_id": "p0012",
    "name": "Panama Boquete",
    "description": "Elegant coffee with jasmine aroma and tropical fruit sweetness.",
    "origin": "Panama",
    "roastLevel": "Light",
    "weight": 250,
    "unit": "g",
    "price": 520,
    "imageUrl": "/images/panama-boquete.jpg",
    "isActive": true
  },
  {
    "_id": "p0013",
    "name": "India Monsooned Malabar",
    "description": "Low acidity with earthy, spicy, and creamy characteristics.",
    "origin": "India",
    "roastLevel": "Medium-Dark",
    "weight": 250,
    "unit": "g",
    "price": 395,
    "imageUrl": "/images/india-malabar.jpg",
    "isActive": true
  },
  {
    "_id": "p0014",
    "name": "Peru Cajamarca",
    "description": "Smooth body with brown sugar sweetness and mild citrus notes.",
    "origin": "Peru",
    "roastLevel": "Medium",
    "weight": 250,
    "unit": "g",
    "price": 385,
    "imageUrl": "/images/peru-cajamarca.jpg",
    "isActive": true
  },
  {
    "_id": "p0015",
    "name": "Seasonal Signature Blend",
    "description": "A limited seasonal blend offering balanced sweetness and fruity complexity.",
    "origin": "Ethiopia, Colombia, Brazil",
    "roastLevel": "Medium",
    "weight": 500,
    "unit": "g",
    "price": 750,
    "imageUrl": "/images/seasonal-signature-blend.jpg",
    "isActive": false
  }
]);
