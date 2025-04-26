import { ROUTE_NOT_FOUND_IN_FEATURE } from '../../../utils/constantes/constantes.js';
import { getBasePath } from '../../../utils/functions/get-base-url.js';
import { users } from '../../../database/tables.js';

export function user(url, method) {
  const feature = getBasePath(url);

  if (url === '/user') {
    return JSON.stringify(users);
  }

  return ROUTE_NOT_FOUND_IN_FEATURE(method, feature);
}
