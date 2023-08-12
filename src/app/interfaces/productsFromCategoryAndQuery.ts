export interface ProductsFromCategoryAndQuery {
  site_id: string
  country_default_time_zone: string
  query: string
  paging: Paging
  results: Result[]
  sort: Sort
  available_sorts: AvailableSort[]
  filters: Filter[]
  available_filters: AvailableFilter[]
}

export interface Paging {
  total: number
  primary_results: number
  offset: number
  limit: number
}

export interface Result {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id?: string
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price?: number
  sale_price: any
  sold_quantity: number
  available_quantity: number
  official_store_id?: number
  official_store_name?: string
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  tags: string[]
  shipping: Shipping
  stop_time: string
  seller: Seller
  seller_address: SellerAddress
  address: Address
  attributes: Attribute[]
  installments: Installments
  winner_item_id: any
  catalog_listing: boolean
  discounts: any
  promotions: any[]
  differential_pricing?: DifferentialPricing
  inventory_id?: string
  variation_filters?: string[]
  variations_data?: VariationsData
}

export interface Shipping {
  store_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  mode: string
  tags: string[]
  benefits: any
  promise: any
}

export interface Seller {
  id: number
  nickname: string
  car_dealer: boolean
  real_estate_agency: boolean
  _: boolean
  registration_date: string
  tags: string[]
  car_dealer_logo: string
  permalink: string
  seller_reputation: SellerReputation
  eshop?: Eshop
}

export interface SellerReputation {
  level_id: string
  power_seller_status?: string
  transactions: Transactions
  metrics: Metrics
}

export interface Transactions {
  canceled: number
  completed: number
  period: string
  ratings: Ratings
  total: number
}

export interface Ratings {
  negative: number
  neutral: number
  positive: number
}

export interface Metrics {
  sales: Sales
  claims: Claims
  delayed_handling_time: DelayedHandlingTime
  cancellations: Cancellations
}

export interface Sales {
  period: string
  completed: number
}

export interface Claims {
  period: string
  rate: number
  value: number
  excluded?: Excluded
}

export interface Excluded {
  real_value: number
  real_rate: number
}

export interface DelayedHandlingTime {
  period: string
  rate: number
  value: number
  excluded?: Excluded2
}

export interface Excluded2 {
  real_value: number
  real_rate: number
}

export interface Cancellations {
  period: string
  rate: number
  value: number
  excluded?: Excluded3
}

export interface Excluded3 {
  real_value: number
  real_rate: number
}

export interface Eshop {
  eshop_id: number
  seller: number
  nick_name: string
  eshop_status_id: number
  site_id: string
  eshop_experience: number
  eshop_rubro: any
  eshop_locations: any[]
  eshop_logo_url: string
}

export interface SellerAddress {
  comment: string
  address_line: string
  id: any
  latitude: any
  longitude: any
  country: Country
  state: State
  city: City
}

export interface Country {
  id: string
  name: string
}

export interface State {
  id: string
  name: string
}

export interface City {
  id: string
  name: string
}

export interface Address {
  state_id: string
  state_name: string
  city_id: string
  city_name: string
}

export interface Attribute {
  id: string
  name: string
  value_id?: string
  value_name?: string
  attribute_group_id: string
  attribute_group_name: string
  value_struct?: ValueStruct
  values: Value[]
  source: number
  value_type: string
}

export interface ValueStruct {
  number: number
  unit: string
}

export interface Value {
  id?: string
  name?: string
  struct?: Struct
  source: number
}

export interface Struct {
  unit: string
  number: number
}

export interface Installments {
  quantity: number
  amount: number
  rate: number
  currency_id: string
}

export interface DifferentialPricing {
  id: number
}

export interface VariationsData {
  "174964035568"?: N174964035568
  "174649825499"?: N174649825499
  "176381098244"?: N176381098244
  "174596077818"?: N174596077818
  "175470290393"?: N175470290393
}

export interface N174964035568 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N174649825499 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N176381098244 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N174596077818 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N175470290393 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface Sort {
  id: string
  name: string
}

export interface AvailableSort {
  id: string
  name: string
}

export interface Filter {
  id: string
  name: string
  type: string
  values: Value2[]
}

export interface Value2 {
  id: string
  name: string
  path_from_root: PathFromRoot[]
}

export interface PathFromRoot {
  id: string
  name: string
}

export interface AvailableFilter {
  id: string
  name: string
  type: string
  values: Value3[]
}

export interface Value3 {
  id: string
  name: string
  results: number
}
