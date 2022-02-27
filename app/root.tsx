import type { LinksFunction, MetaFunction } from 'remix';
import {
  json,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'remix';
import { unencryptedSession } from '~/session.server';
import tailwindStylesUrl from './styles/tailwind.css';
import Navbar from '~/components/Navbar';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesUrl }];
};

export let loader: LoaderFunction = async ({ request }) => {
  let session = await unencryptedSession.getSession(request.headers.get('Cookie'));
  let theme = session.get('theme') || 'dark';

  return json({ theme });
};

export default function App() {
  const { theme } = useLoaderData();

  return (
    <html lang="en" data-theme={theme || 'dark'}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col p-4 space-y-4 font-mono h-screen w-screen overflow-hidden">
        <Navbar />
        <main className="flex flex-row space-x-4 overflow-hidden">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
