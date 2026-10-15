/**
 * This site is a Vite single-page app. It has no Next.js server runtime, so
 * authenticated reads and writes go through the browser session and Postgres
 * row-level security.
 *
 * Do not import this file from React components. A service-role key must never
 * be bundled for the browser, and this project does not use one.
 */
export function getServiceRoleClient() {
  if (typeof window !== 'undefined') {
    throw new Error('The service-role client cannot run in the browser.')
  }
  throw new Error('No service-role client is configured. Use the signed-in user session.')
}
