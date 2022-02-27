import {ActionFunction, json, LoaderFunction, useLoaderData} from "remix";
import {Form, useSubmit} from "@remix-run/react";
import {useRef} from "react";
import {unencryptedSession} from "~/session.server";

const VALID_THEMES = [
  "dark",
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
];

export let action: ActionFunction = async ({request}) => {
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );

  let formData = new URLSearchParams(await request.text());

  let theme = formData.get("theme") || "dark";
  session.set("theme", theme);

  return json(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session),
    },
  });
};

export let loader: LoaderFunction = async ({request}) => {
  let session = await unencryptedSession.getSession(
    request.headers.get("Cookie")
  );
  let theme = session.get("theme") || "dark";

  return json(theme);
};

export default function Appearance() {
  let selectedTheme = useLoaderData();

  let formRef = useRef<HTMLFormElement>(null);
  let submit = useSubmit();

  return (
    <section>
      <h2 className='text-lg font-bold'>Theme</h2>
      <Form ref={formRef} method="post">
        {VALID_THEMES.map((theme) => (
          <div key={theme} className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text mr-4">{theme}</span>
              <input
                data-testid={`theme-${theme}`}
                type="radio"
                name="theme"
                defaultChecked={selectedTheme === theme}
                className="radio"
                value={theme}
              />
            </label>
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </Form>
    </section>
  )
}
