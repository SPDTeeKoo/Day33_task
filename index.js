// 1. Find all the information about each products

db.products.find({});

//2. Find the product price which are between 400 to 800

db.products.find({
  $and: [{ product_price: { $gte: 400 } }, { product_price: { $lte: 800 } }],
});

db.products.find({
  product_price: { $gte: 400, $lte: 800 },
});

//3.Find the product price which are not between 400 to 600

db.products.find({
  $and: [{ product_price: { $lt: 400 } }, { product_price: { $gt: 800 } }],
});

//4.List the four product which are greater than 500 in price

db.products.find({
  product_price: { $gte: 500 },
});

//5.Find the product name and product material of each products

db.products.find({
  product_name,
  product_material,
});

//6.Find the product with a row id of 10

db.products.find({
  id: '10',
});

//7. Find only the product name and product material

db.products.find(
  {
    product_name,
    product_material,
  },
  { id: 0, product_price: 0, product_color: 0, _id: 0 }
);

//8. Find all products which contain the value of soft in product material

db.products.find({
  product_material: 'soft',
});

//9.Find products which contain product color indigo  and product price 492.00

db.products.find({
  product_color: 'indigo',
  product_price: 492.0,
});

//10. Delete the products which product price value are same

db.products.deleteMany({ product_price : "A" })