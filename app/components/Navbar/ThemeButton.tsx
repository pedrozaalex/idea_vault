import React, { useRef } from 'react';
import { Form, useSubmit } from '@remix-run/react';

let VALID_THEMES = [
  'dark',
  'light',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
];

interface ThemeButtonProps {
  selectedTheme: string;
}

const ThemeButton = ({ selectedTheme }: ThemeButtonProps) => {
  let formRef = useRef<HTMLFormElement>(null);
  let submit = useSubmit();

  let onRadioChanged = () => {
    submit(formRef.current, {
      action: '/themes',
    });
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-link text-primary-content">
        theme
      </label>
      <ul tabIndex={0} className="p-2 shadow menu dropdown-content bg-base-100 rounded-box">
        <Form ref={formRef} method="post">
          {VALID_THEMES.map(theme => (
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
                  onChange={onRadioChanged}
                />
              </label>
            </div>
          ))}
        </Form>
      </ul>
    </div>
  );
};

export default ThemeButton;
