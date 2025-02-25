/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductsImport } from './routes/products'
import { Route as IndexImport } from './routes/index'
import { Route as OrdersIndexImport } from './routes/orders/index'
import { Route as OrdersOrderIdImport } from './routes/orders/$orderId'

// Create/Update Routes

const ProductsRoute = ProductsImport.update({
  id: '/products',
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const OrdersIndexRoute = OrdersIndexImport.update({
  id: '/orders/',
  path: '/orders/',
  getParentRoute: () => rootRoute,
} as any)

const OrdersOrderIdRoute = OrdersOrderIdImport.update({
  id: '/orders/$orderId',
  path: '/orders/$orderId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      id: '/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
    '/orders/$orderId': {
      id: '/orders/$orderId'
      path: '/orders/$orderId'
      fullPath: '/orders/$orderId'
      preLoaderRoute: typeof OrdersOrderIdImport
      parentRoute: typeof rootRoute
    }
    '/orders/': {
      id: '/orders/'
      path: '/orders'
      fullPath: '/orders'
      preLoaderRoute: typeof OrdersIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/products': typeof ProductsRoute
  '/orders/$orderId': typeof OrdersOrderIdRoute
  '/orders': typeof OrdersIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/products': typeof ProductsRoute
  '/orders/$orderId': typeof OrdersOrderIdRoute
  '/orders': typeof OrdersIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/products': typeof ProductsRoute
  '/orders/$orderId': typeof OrdersOrderIdRoute
  '/orders/': typeof OrdersIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/products' | '/orders/$orderId' | '/orders'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/products' | '/orders/$orderId' | '/orders'
  id: '__root__' | '/' | '/products' | '/orders/$orderId' | '/orders/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProductsRoute: typeof ProductsRoute
  OrdersOrderIdRoute: typeof OrdersOrderIdRoute
  OrdersIndexRoute: typeof OrdersIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProductsRoute: ProductsRoute,
  OrdersOrderIdRoute: OrdersOrderIdRoute,
  OrdersIndexRoute: OrdersIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/products",
        "/orders/$orderId",
        "/orders/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/products": {
      "filePath": "products.tsx"
    },
    "/orders/$orderId": {
      "filePath": "orders/$orderId.tsx"
    },
    "/orders/": {
      "filePath": "orders/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
