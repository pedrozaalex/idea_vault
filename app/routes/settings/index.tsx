import {LoaderFunction, redirect} from "remix";

export let loader: LoaderFunction = () => {
  throw redirect('/settings/appearance');
};
