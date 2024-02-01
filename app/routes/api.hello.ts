import { LoaderFunctionArgs } from '@remix-run/node';

export function loader({ request }: LoaderFunctionArgs) {
  return new Response(
    [
      'Hello, world!',
      'Inside of Remix Loaders, the `request.url` is: ' + request.url,
      'Request headers:',
      JSON.stringify(
        Object.fromEntries(request.headers.entries()),
        undefined,
        2
      ),
    ].join('\n')
  );
}
