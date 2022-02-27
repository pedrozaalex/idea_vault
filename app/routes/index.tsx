import type { LoaderFunction, MetaFunction } from 'remix';
import { redirect } from 'remix';
import { formatMeta } from '~/helpers';

export let meta: MetaFunction = () => {
  return formatMeta({
    title: 'idea_vault',
    description: 'A safe place to store all your ideas',
  });
};

export let loader: LoaderFunction = () => {
  throw redirect('/editor');
};
