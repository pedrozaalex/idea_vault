import { ActionFunction, json, LoaderFunction, redirect } from 'remix';
import { unencryptedSession } from '~/session.server';

export let action: ActionFunction = async ({ request }) => {
  console.log('Themes action');

  let session = await unencryptedSession.getSession(request.headers.get('Cookie'));

  let formData = new URLSearchParams(await request.text());
  console.log('formData', formData);

  let theme = formData.get('theme') || 'dark';
  session.set('theme', theme);

  return json(null, {
    headers: {
      'Set-Cookie': await unencryptedSession.commitSession(session),
    },
  });
};

export let loader: LoaderFunction = () => {
  throw redirect('/');
};
