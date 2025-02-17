export enum OrderStatus {
  PROCESSING = 0,
  PENDING = 1,
  PREPARING = 2,
  SHIPPING = 3,
  REFUSED = 4,
  CANCELLED = 5,
  REFUNDED = 6,
}

export enum Country {
  ES = 0,
  FR = 1,
}

export enum PayMethod {
  PAYPAL = 0,
  CREDIT_CARD = 1,
  BANK_TRANSFER = 2,
  CASH_ON_DELIVERY = 3,
  BIZUM = 4,
}
