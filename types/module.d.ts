export {};

declare module 'react-router' {
  interface RouteMeta {
    title?: string;
    requireAuth?: boolean;
  }

  interface IndexRouteObject {
    meta?: RouteMeta;
  }

  interface NonIndexRouteObject {
    meta?: RouteMeta;
  }
}
