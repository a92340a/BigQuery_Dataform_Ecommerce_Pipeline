
// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table stg_distribution_centers {
  center_id integer
  center_name string
  latitude flaot 
  longitude float
}

Table stg_events {
  id integer
  user_id integer
  sequence_number integer
  session_id string
  created_at datetime
  ip_address string
  browser string
  traffic_source string
  uri string
  event_type string
}

Table stg_inventory_items {
  id integer
  product_id integer
  created_at datetime
  sold_at datetime
  cost float
}

Table stg_order_items {
  id integer
  order_id integer
  product_id integer
  inventory_item_id integer
  sale_price float
}

Table stg_orders {
  order_id integer
  user_id integer
  status string
  gender string
  created_at datetime
  shipped_at datetime
  delivered_at datetime
  returned_at datetime
  num_of_item integer
  updated_at date
}

Table stg_products {
  id integer
  cost float
  category string
  name string
  brand string
  retail_price float
  department string
  sku string
  distribution_center_id integer
}

Table stg_users {
  id integer
  first_name string
  last_name string
  email string
  age integer
  gender string
  state string
  street_address string
  postal_code string
  city string
  country string
  latitude float
  longitude float
  created_at timestamp
}

Ref: stg_distribution_centers.center_id < stg_products.distribution_center_id // many-to-one

Ref: stg_products.id < stg_inventory_items.product_id

Ref: stg_orders.order_id < stg_order_items.order_id

Ref: stg_products.id < stg_order_items.product_id

Ref: stg_inventory_items.id < stg_order_items.inventory_item_id

Ref: stg_users.id < stg_orders.user_id // many-to-one

Ref: stg_users.id < stg_events.user_id 