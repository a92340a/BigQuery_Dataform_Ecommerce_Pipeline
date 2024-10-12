[
  "distribution_centers",
  "events",
  "inventory_items",
  "order_items",
  "orders",
  "products",
  "users",
].forEach((name) =>
  declare({
    database: "bigquery-public-data", 
    schema: "thelook_ecommerce",
    name,
  })
);