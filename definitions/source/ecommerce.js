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
    database: "tw-rd-de-finn", 
    schema: "public_thelook_ecommerce",
    name,
  })
);