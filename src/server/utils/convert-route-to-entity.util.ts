const mapping: Record<string, string> = {
  organizations: 'organization',
  'performance-data': 'performance_data',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
