var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/session.server.ts
init_react();
var import_remix2 = __toESM(require_remix());
var unencryptedSession = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    path: "/",
    sameSite: "lax"
  }
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JMTEEQGU.css";

// app/components/Navbar/index.tsx
init_react();
var import_icons = require("@ant-design/icons");
var import_react = require("@remix-run/react");
function Navbar() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "navbar rounded-box bg-primary p-4 justify-between"
  }, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/",
    className: "text-2xl font-extrabold"
  }, "idea_vault"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/settings",
    className: "btn btn-ghost btn-square btn-sm"
  }, /* @__PURE__ */ React.createElement(import_icons.SettingFilled, {
    className: "text-lg"
  }))));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/root.tsx
var meta = () => {
  return { title: "New Remix App" };
};
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var loader = async ({ request }) => {
  let session = await unencryptedSession.getSession(request.headers.get("Cookie"));
  let theme = session.get("theme") || "dark";
  return (0, import_remix3.json)({ theme });
};
function App() {
  const { theme } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    "data-theme": theme || "dark"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "flex flex-col p-4 space-y-4 font-mono h-screen w-screen overflow-hidden"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", {
    className: "grow flex flex-row space-x-4 overflow-hidden"
  }, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings,
  loader: () => loader2
});
init_react();

// app/components/Sidebar.tsx
init_react();
var Sidebar = ({ children, title }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-60 rounded-box p-4 grow-0 shrink-0 menu"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-xl font-bold mb-4"
  }, title), children);
};
var Sidebar_default = Sidebar;

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/settings.tsx
var import_remix4 = __toESM(require_remix());
var import_react2 = require("@remix-run/react");
var AVAILABLE_SETTINGS = [
  {
    path: "/settings/appearance",
    name: "Appearance"
  }
];
var loader2 = ({ request, params }) => {
  const selectedSetting = AVAILABLE_SETTINGS.find((setting) => request.url.match(setting.path));
  return (0, import_remix4.json)(selectedSetting ? selectedSetting.name : AVAILABLE_SETTINGS[0].name);
};
function Settings() {
  const selectedSetting = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar_default, {
    title: "Settings"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "menu"
  }, AVAILABLE_SETTINGS.map(({ path, name }) => /* @__PURE__ */ React.createElement("li", {
    key: name
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: path,
    className: selectedSetting === name ? "active" : ""
  }, /* @__PURE__ */ React.createElement("h3", null, name)))))), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/settings/appearance.tsx
var appearance_exports = {};
__export(appearance_exports, {
  action: () => action,
  default: () => Appearance,
  loader: () => loader3
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_react3 = require("@remix-run/react");
var VALID_THEMES = [
  "dark",
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine"
];
var action = async ({ request }) => {
  let session = await unencryptedSession.getSession(request.headers.get("Cookie"));
  let formData = new URLSearchParams(await request.text());
  let theme = formData.get("theme") || "dark";
  session.set("theme", theme);
  return (0, import_remix5.json)(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session)
    }
  });
};
var loader3 = async ({ request }) => {
  let session = await unencryptedSession.getSession(request.headers.get("Cookie"));
  let theme = session.get("theme") || "dark";
  return (0, import_remix5.json)(theme);
};
function Appearance() {
  let selectedTheme = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "card h-fit w-96 bg-base-300"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "card-body"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "card-title"
  }, "Theme"), /* @__PURE__ */ React.createElement(import_react3.Form, {
    method: "post"
  }, VALID_THEMES.map((theme) => /* @__PURE__ */ React.createElement("div", {
    key: theme,
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "cursor-pointer label"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "label-text mr-4"
  }, theme), /* @__PURE__ */ React.createElement("input", {
    "data-testid": `theme-${theme}`,
    type: "radio",
    name: "theme",
    defaultChecked: selectedTheme === theme,
    className: "radio",
    value: theme
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "card-actions justify-center"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save")))));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/settings/index.tsx
var settings_exports2 = {};
__export(settings_exports2, {
  loader: () => loader4
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader4 = () => {
  throw (0, import_remix6.redirect)("/settings/appearance");
};

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor.tsx
var editor_exports = {};
__export(editor_exports, {
  default: () => Index
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/components/GameVaultCard.tsx
init_react();
var import_react4 = __toESM(require("react"));
var GameVaultCard = ({ title, description }) => {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card bg-base-300 shadow-xl"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "card-body p-4"
  }, /* @__PURE__ */ import_react4.default.createElement("h3", {
    className: "card-title"
  }, title), /* @__PURE__ */ import_react4.default.createElement("p", null, description)));
};
var GameVaultCard_default = GameVaultCard;

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor.tsx
var import_react5 = __toESM(require("react"));
var testVaults = new Array(10).fill({
  title: "Test Vault",
  description: "This is a test vault"
});
function Index() {
  return /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, /* @__PURE__ */ import_react5.default.createElement(Sidebar_default, {
    title: "Your game vaults"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "grow overflow-y-auto"
  }, /* @__PURE__ */ import_react5.default.createElement("ul", {
    className: "flex flex-col mr-2 space-y-2"
  }, testVaults.map((vault, index) => /* @__PURE__ */ import_react5.default.createElement(GameVaultCard_default, __spreadValues({
    key: index
  }, vault)))))), /* @__PURE__ */ import_react5.default.createElement(import_remix7.Outlet, null));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor/$idea.tsx
var idea_exports = {};
__export(idea_exports, {
  default: () => IdeaEditor
});
init_react();
var import_react6 = __toESM(require("react"));
var import_react7 = require("@tiptap/react");
function IdeaEditor({ editor }) {
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "border-4 border-solid border-primary p-4 h-full w-full font-sans"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.EditorContent, {
    editor,
    className: "h-full w-full m-auto"
  }));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor/index.tsx
var editor_exports2 = {};
__export(editor_exports2, {
  default: () => Editor2
});
init_react();
var import_react8 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_extension_underline = require("@tiptap/extension-underline");
var import_extension_typography = require("@tiptap/extension-typography");
function Editor2() {
  const editor = (0, import_react8.useEditor)({
    extensions: [import_starter_kit.default, import_extension_underline.Underline, import_extension_typography.Typography],
    autofocus: true,
    enablePasteRules: true,
    editorProps: {
      attributes: {
        class: "h-full prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none"
      }
    }
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Choose a note on the left"));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/themes.tsx
var themes_exports = {};
__export(themes_exports, {
  action: () => action2,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());
var action2 = async ({ request }) => {
  console.log("Themes action");
  let session = await unencryptedSession.getSession(request.headers.get("Cookie"));
  let formData = new URLSearchParams(await request.text());
  console.log("formData", formData);
  let theme = formData.get("theme") || "dark";
  session.set("theme", theme);
  return (0, import_remix8.json)(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session)
    }
  });
};
var loader5 = () => {
  throw (0, import_remix8.redirect)("/");
};

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader6,
  meta: () => meta2
});
init_react();
var import_remix9 = __toESM(require_remix());

// app/helpers.ts
init_react();
function formatMeta(meta3) {
  const descriptor = {
    title: "Remix Guide",
    "og:site_name": "remix-guide",
    "og:type": "website"
  };
  for (const [key, value] of Object.entries(meta3)) {
    if (!key || !value) {
      continue;
    }
    switch (key) {
      case "title": {
        descriptor["title"] = value === descriptor["title"] ? descriptor["title"] : `${value} - ${descriptor["title"]}`;
        descriptor["og:title"] = value;
        descriptor["twitter:title"] = value;
        break;
      }
      case "description": {
        descriptor["description"] = value;
        descriptor["og:description"] = value;
        descriptor["twitter:description"] = value;
        break;
      }
      default: {
        descriptor[key] = value;
        break;
      }
    }
  }
  return descriptor;
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/index.tsx
var meta2 = () => {
  return formatMeta({
    title: "idea_vault",
    description: "A safe place to store all your ideas"
  });
};
var loader6 = () => {
  throw (0, import_remix9.redirect)("/editor");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "0b5e86b1", "entry": { "module": "/build/entry.client-ESO2A64E.js", "imports": ["/build/_shared/chunk-C6JGU5MH.js", "/build/_shared/chunk-KROZOGSQ.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4TYKGXRH.js", "imports": ["/build/_shared/chunk-7QFJIF5W.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor": { "id": "routes/editor", "parentId": "root", "path": "editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/editor-VCTQZNRE.js", "imports": ["/build/_shared/chunk-STNQEWJP.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor/$idea": { "id": "routes/editor/$idea", "parentId": "routes/editor", "path": ":idea", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/editor/$idea-SR2U7EXV.js", "imports": ["/build/_shared/chunk-PYIY4V5H.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor/index": { "id": "routes/editor/index", "parentId": "routes/editor", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/editor/index-N3VRBBHA.js", "imports": ["/build/_shared/chunk-PYIY4V5H.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UJMIZVT4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-CE2OM3HW.js", "imports": ["/build/_shared/chunk-STNQEWJP.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings/appearance": { "id": "routes/settings/appearance", "parentId": "routes/settings", "path": "appearance", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings/appearance-XESTEJ2N.js", "imports": ["/build/_shared/chunk-7QFJIF5W.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings/index": { "id": "routes/settings/index", "parentId": "routes/settings", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/settings/index-I5XTFLZN.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/themes": { "id": "routes/themes", "parentId": "root", "path": "themes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/themes-WPLSXMIU.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-0B5E86B1.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/settings": {
    id: "routes/settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/settings/appearance": {
    id: "routes/settings/appearance",
    parentId: "routes/settings",
    path: "appearance",
    index: void 0,
    caseSensitive: void 0,
    module: appearance_exports
  },
  "routes/settings/index": {
    id: "routes/settings/index",
    parentId: "routes/settings",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: settings_exports2
  },
  "routes/editor": {
    id: "routes/editor",
    parentId: "root",
    path: "editor",
    index: void 0,
    caseSensitive: void 0,
    module: editor_exports
  },
  "routes/editor/$idea": {
    id: "routes/editor/$idea",
    parentId: "routes/editor",
    path: ":idea",
    index: void 0,
    caseSensitive: void 0,
    module: idea_exports
  },
  "routes/editor/index": {
    id: "routes/editor/index",
    parentId: "routes/editor",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: editor_exports2
  },
  "routes/themes": {
    id: "routes/themes",
    parentId: "root",
    path: "themes",
    index: void 0,
    caseSensitive: void 0,
    module: themes_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb290LnRzeCIsICIuLi9hcHAvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyLnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzL2FwcGVhcmFuY2UudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvc2V0dGluZ3MvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvZWRpdG9yLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9HYW1lVmF1bHRDYXJkLnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2VkaXRvci8kaWRlYS50c3giLCAicm91dGU6L2hvbWUvcGVkcm96YS93ZWJkZXYvaWRlYV92YXVsdF92ZXJjZWwvYXBwL3JvdXRlcy9lZGl0b3IvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvdGhlbWVzLnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvaGVscGVycy50cyIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzL2FwcGVhcmFuY2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvc2V0dGluZ3MvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvZWRpdG9yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2VkaXRvci8kaWRlYS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvcGVkcm96YS93ZWJkZXYvaWRlYV92YXVsdF92ZXJjZWwvYXBwL3JvdXRlcy9lZGl0b3IvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvdGhlbWVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zZXR0aW5ncy9hcHBlYXJhbmNlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXR0aW5ncy9hcHBlYXJhbmNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2V0dGluZ3NcIixcbiAgICAgIHBhdGg6IFwiYXBwZWFyYW5jZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3MvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2V0dGluZ3NcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9lZGl0b3JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2VkaXRvclwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJlZGl0b3JcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2VkaXRvci8kaWRlYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZWRpdG9yLyRpZGVhXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZWRpdG9yXCIsXG4gICAgICBwYXRoOiBcIjppZGVhXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9lZGl0b3IvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2VkaXRvci9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2VkaXRvclwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3RoZW1lc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdGhlbWVzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRoZW1lc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyg8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPik7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHtcbiAganNvbixcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxufSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyB1bmVuY3J5cHRlZFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb24uc2VydmVyJztcbmltcG9ydCB0YWlsd2luZFN0eWxlc1VybCBmcm9tICcuL3N0eWxlcy90YWlsd2luZC5jc3MnO1xuaW1wb3J0IE5hdmJhciBmcm9tICd+L2NvbXBvbmVudHMvTmF2YmFyJztcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdOZXcgUmVtaXggQXBwJyB9O1xufTtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiB0YWlsd2luZFN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IHVuZW5jcnlwdGVkU2Vzc2lvbi5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKTtcbiAgbGV0IHRoZW1lID0gc2Vzc2lvbi5nZXQoJ3RoZW1lJykgfHwgJ2RhcmsnO1xuXG4gIHJldHVybiBqc29uKHsgdGhlbWUgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiIGRhdGEtdGhlbWU9e3RoZW1lIHx8ICdkYXJrJ30+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC00IHNwYWNlLXktNCBmb250LW1vbm8gaC1zY3JlZW4gdy1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZ3JvdyBmbGV4IGZsZXgtcm93IHNwYWNlLXgtNCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlIH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgbGV0IHVuZW5jcnlwdGVkU2Vzc2lvbiA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgcGF0aDogJy8nLFxuICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgfSxcbn0pO1xuIiwgImltcG9ydCB7IFNldHRpbmdGaWxsZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnQHJlbWl4LXJ1bi9yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciByb3VuZGVkLWJveCBiZy1wcmltYXJ5IHAtNCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZXh0cmFib2xkXCI+XG4gICAgICAgIGlkZWFfdmF1bHRcbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIHRvPVwiL3NldHRpbmdzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBidG4tc3F1YXJlIGJ0bi1zbVwiPlxuICAgICAgICAgIDxTZXR0aW5nRmlsbGVkIGNsYXNzTmFtZT1cInRleHQtbGdcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgU2lkZWJhciBmcm9tICd+L2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgeyBqc29uLCBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuXG5pbnRlcmZhY2UgU2V0dGluZ1JvdXRlIHtcbiAgcGF0aDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IEFWQUlMQUJMRV9TRVRUSU5HUzogU2V0dGluZ1JvdXRlW10gPSBbXG4gIHtcbiAgICBwYXRoOiAnL3NldHRpbmdzL2FwcGVhcmFuY2UnLFxuICAgIG5hbWU6ICdBcHBlYXJhbmNlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICh7IHJlcXVlc3QsIHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkU2V0dGluZyA9IEFWQUlMQUJMRV9TRVRUSU5HUy5maW5kKHNldHRpbmcgPT4gcmVxdWVzdC51cmwubWF0Y2goc2V0dGluZy5wYXRoKSk7XG4gIHJldHVybiBqc29uKHNlbGVjdGVkU2V0dGluZyA/IHNlbGVjdGVkU2V0dGluZy5uYW1lIDogQVZBSUxBQkxFX1NFVFRJTkdTWzBdLm5hbWUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gIGNvbnN0IHNlbGVjdGVkU2V0dGluZyA9IHVzZUxvYWRlckRhdGE8c3RyaW5nPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaWRlYmFyIHRpdGxlPVwiU2V0dGluZ3NcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVcIj5cbiAgICAgICAgICB7QVZBSUxBQkxFX1NFVFRJTkdTLm1hcCgoeyBwYXRoLCBuYW1lIH0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICA8TGluayB0bz17cGF0aH0gY2xhc3NOYW1lPXtzZWxlY3RlZFNldHRpbmcgPT09IG5hbWUgPyAnYWN0aXZlJyA6ICcnfT5cbiAgICAgICAgICAgICAgICA8aDM+e25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvU2lkZWJhcj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBTaWRlYmFyUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5jb25zdCBTaWRlYmFyID0gKHsgY2hpbGRyZW4sIHRpdGxlIH06IFNpZGViYXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTYwIHJvdW5kZWQtYm94IHAtNCBncm93LTAgc2hyaW5rLTAgbWVudVwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj57dGl0bGV9PC9oMj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24sIExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ0ByZW1peC1ydW4vcmVhY3QnO1xuaW1wb3J0IHsgdW5lbmNyeXB0ZWRTZXNzaW9uIH0gZnJvbSAnfi9zZXNzaW9uLnNlcnZlcic7XG5cbmNvbnN0IFZBTElEX1RIRU1FUyA9IFtcbiAgJ2RhcmsnLFxuICAnbGlnaHQnLFxuICAnY3VwY2FrZScsXG4gICdidW1ibGViZWUnLFxuICAnZW1lcmFsZCcsXG4gICdjb3Jwb3JhdGUnLFxuICAnc3ludGh3YXZlJyxcbiAgJ3JldHJvJyxcbiAgJ2N5YmVycHVuaycsXG4gICd2YWxlbnRpbmUnLFxuXTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgdW5lbmNyeXB0ZWRTZXNzaW9uLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpO1xuXG4gIGxldCBmb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYXdhaXQgcmVxdWVzdC50ZXh0KCkpO1xuXG4gIGxldCB0aGVtZSA9IGZvcm1EYXRhLmdldCgndGhlbWUnKSB8fCAnZGFyayc7XG4gIHNlc3Npb24uc2V0KCd0aGVtZScsIHRoZW1lKTtcblxuICByZXR1cm4ganNvbihudWxsLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCB1bmVuY3J5cHRlZFNlc3Npb24uY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IHVuZW5jcnlwdGVkU2Vzc2lvbi5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKTtcbiAgbGV0IHRoZW1lID0gc2Vzc2lvbi5nZXQoJ3RoZW1lJykgfHwgJ2RhcmsnO1xuXG4gIHJldHVybiBqc29uKHRoZW1lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcGVhcmFuY2UoKSB7XG4gIGxldCBzZWxlY3RlZFRoZW1lID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBoLWZpdCB3LTk2IGJnLWJhc2UtMzAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRoZW1lPC9oMj5cbiAgICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIHtWQUxJRF9USEVNRVMubWFwKHRoZW1lID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXt0aGVtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBsYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLXRleHQgbXItNFwiPnt0aGVtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YHRoZW1lLSR7dGhlbWV9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGhlbWVcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3NlbGVjdGVkVGhlbWUgPT09IHRoZW1lfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9ucyBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHRocm93IHJlZGlyZWN0KCcvc2V0dGluZ3MvYXBwZWFyYW5jZScpO1xufTtcbiIsICJpbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgU2lkZWJhciBmcm9tICd+L2NvbXBvbmVudHMvU2lkZWJhcic7XG5pbXBvcnQgR2FtZVZhdWx0Q2FyZCBmcm9tICd+L2NvbXBvbmVudHMvR2FtZVZhdWx0Q2FyZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCB0ZXN0VmF1bHRzID0gbmV3IEFycmF5KDEwKS5maWxsKHtcbiAgdGl0bGU6ICdUZXN0IFZhdWx0JyxcbiAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgdGVzdCB2YXVsdCcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaWRlYmFyIHRpdGxlPVwiWW91ciBnYW1lIHZhdWx0c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMiBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIHt0ZXN0VmF1bHRzLm1hcCgodmF1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHYW1lVmF1bHRDYXJkIGtleT17aW5kZXh9IHsuLi52YXVsdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaWRlYmFyPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBHYW1lVmF1bHRDYXJkUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBHYW1lVmF1bHRDYXJkID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uIH06IEdhbWVWYXVsdENhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1iYXNlLTMwMCBzaGFkb3cteGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHAtNFwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt0aXRsZX08L2gzPlxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmF1bHRDYXJkO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFZGl0b3IsIEVkaXRvckNvbnRlbnQgfSBmcm9tICdAdGlwdGFwL3JlYWN0JztcblxuaW50ZXJmYWNlIElkZWFFZGl0b3JQcm9wcyB7XG4gIGVkaXRvcjogRWRpdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJZGVhRWRpdG9yKHsgZWRpdG9yIH06IElkZWFFZGl0b3JQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTQgYm9yZGVyLXNvbGlkIGJvcmRlci1wcmltYXJ5IHAtNCBoLWZ1bGwgdy1mdWxsIGZvbnQtc2Fuc1wiPlxuICAgICAgPEVkaXRvckNvbnRlbnQgZWRpdG9yPXtlZGl0b3J9IGNsYXNzTmFtZT1cImgtZnVsbCB3LWZ1bGwgbS1hdXRvXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZGl0b3IgfSBmcm9tICdAdGlwdGFwL3JlYWN0JztcbmltcG9ydCBTdGFydGVyS2l0IGZyb20gJ0B0aXB0YXAvc3RhcnRlci1raXQnO1xuaW1wb3J0IHsgVW5kZXJsaW5lIH0gZnJvbSAnQHRpcHRhcC9leHRlbnNpb24tdW5kZXJsaW5lJztcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAdGlwdGFwL2V4dGVuc2lvbi10eXBvZ3JhcGh5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKCkge1xuICBjb25zdCBlZGl0b3IgPSB1c2VFZGl0b3Ioe1xuICAgIGV4dGVuc2lvbnM6IFtTdGFydGVyS2l0LCBVbmRlcmxpbmUsIFR5cG9ncmFwaHldLFxuICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgICBlbmFibGVQYXN0ZVJ1bGVzOiB0cnVlLFxuICAgIGVkaXRvclByb3BzOiB7XG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnaC1mdWxsIHByb3NlIHByb3NlLXNtIHNtOnByb3NlIGxnOnByb3NlLWxnIHhsOnByb3NlLTJ4bCBtLTUgZm9jdXM6b3V0bGluZS1ub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzPkNob29zZSBhIG5vdGUgb24gdGhlIGxlZnQ8L2gzPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBqc29uLCBMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyB1bmVuY3J5cHRlZFNlc3Npb24gfSBmcm9tICd+L3Nlc3Npb24uc2VydmVyJztcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdUaGVtZXMgYWN0aW9uJyk7XG5cbiAgbGV0IHNlc3Npb24gPSBhd2FpdCB1bmVuY3J5cHRlZFNlc3Npb24uZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KCdDb29raWUnKSk7XG5cbiAgbGV0IGZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhhd2FpdCByZXF1ZXN0LnRleHQoKSk7XG4gIGNvbnNvbGUubG9nKCdmb3JtRGF0YScsIGZvcm1EYXRhKTtcblxuICBsZXQgdGhlbWUgPSBmb3JtRGF0YS5nZXQoJ3RoZW1lJykgfHwgJ2RhcmsnO1xuICBzZXNzaW9uLnNldCgndGhlbWUnLCB0aGVtZSk7XG5cbiAgcmV0dXJuIGpzb24obnVsbCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdTZXQtQ29va2llJzogYXdhaXQgdW5lbmNyeXB0ZWRTZXNzaW9uLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHRocm93IHJlZGlyZWN0KCcvJyk7XG59O1xuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgZm9ybWF0TWV0YSB9IGZyb20gJ34vaGVscGVycyc7XG5cbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gZm9ybWF0TWV0YSh7XG4gICAgdGl0bGU6ICdpZGVhX3ZhdWx0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0Egc2FmZSBwbGFjZSB0byBzdG9yZSBhbGwgeW91ciBpZGVhcycsXG4gIH0pO1xufTtcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICB0aHJvdyByZWRpcmVjdCgnL2VkaXRvcicpO1xufTtcbiIsICJleHBvcnQgZnVuY3Rpb24gZm9ybWF0TWV0YShtZXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KSB7XG4gIGNvbnN0IGRlc2NyaXB0b3I6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgdGl0bGU6ICdSZW1peCBHdWlkZScsXG4gICAgJ29nOnNpdGVfbmFtZSc6ICdyZW1peC1ndWlkZScsXG4gICAgJ29nOnR5cGUnOiAnd2Vic2l0ZScsXG4gIH07XG5cbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobWV0YSkpIHtcbiAgICBpZiAoIWtleSB8fCAhdmFsdWUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICd0aXRsZSc6IHtcbiAgICAgICAgZGVzY3JpcHRvclsndGl0bGUnXSA9XG4gICAgICAgICAgdmFsdWUgPT09IGRlc2NyaXB0b3JbJ3RpdGxlJ10gPyBkZXNjcmlwdG9yWyd0aXRsZSddIDogYCR7dmFsdWV9IC0gJHtkZXNjcmlwdG9yWyd0aXRsZSddfWA7XG4gICAgICAgIGRlc2NyaXB0b3JbJ29nOnRpdGxlJ10gPSB2YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRvclsndHdpdHRlcjp0aXRsZSddID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZGVzY3JpcHRpb24nOiB7XG4gICAgICAgIGRlc2NyaXB0b3JbJ2Rlc2NyaXB0aW9uJ10gPSB2YWx1ZTtcbiAgICAgICAgZGVzY3JpcHRvclsnb2c6ZGVzY3JpcHRpb24nXSA9IHZhbHVlO1xuICAgICAgICBkZXNjcmlwdG9yWyd0d2l0dGVyOmRlc2NyaXB0aW9uJ10gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGRlc2NyaXB0b3Jba2V5XSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUodGV4dDogc3RyaW5nKTogc3RyaW5nO1xuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUodGV4dDogbnVsbCB8IHVuZGVmaW5lZCk6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghdGV4dCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRleHRbMF0udG9VcHBlckNhc2UoKSArIHRleHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicwYjVlODZiMScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtRVNPMkE2NEUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUM2SkdVNU1ILmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstS1JPWk9HU1EuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QMkZUR1BPWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNFRZS0dYUkguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdRRkpJRjVXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2VkaXRvcic6eydpZCc6J3JvdXRlcy9lZGl0b3InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZWRpdG9yJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2VkaXRvci1WQ1RRWk5SRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstU1ROUUVXSlAuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2VkaXRvci8kaWRlYSc6eydpZCc6J3JvdXRlcy9lZGl0b3IvJGlkZWEnLCdwYXJlbnRJZCc6J3JvdXRlcy9lZGl0b3InLCdwYXRoJzonOmlkZWEnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZWRpdG9yLyRpZGVhLVNSMlU3RVhWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QWUlZNFY1SC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZWRpdG9yL2luZGV4Jzp7J2lkJzoncm91dGVzL2VkaXRvci9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2VkaXRvcicsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9lZGl0b3IvaW5kZXgtTjNWUkJCSEEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBZSVk0VjVILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1VSk1JWlZUNC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2V0dGluZ3MnOnsnaWQnOidyb3V0ZXMvc2V0dGluZ3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2V0dGluZ3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2V0dGluZ3MtQ0UyT00zSFcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNUTlFFV0pQLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NldHRpbmdzL2FwcGVhcmFuY2UnOnsnaWQnOidyb3V0ZXMvc2V0dGluZ3MvYXBwZWFyYW5jZScsJ3BhcmVudElkJzoncm91dGVzL3NldHRpbmdzJywncGF0aCc6J2FwcGVhcmFuY2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2V0dGluZ3MvYXBwZWFyYW5jZS1YRVNURUoyTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1FGSklGNVcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXR0aW5ncy9pbmRleCc6eydpZCc6J3JvdXRlcy9zZXR0aW5ncy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3NldHRpbmdzJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NldHRpbmdzL2luZGV4LUk1WFRGTFpOLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90aGVtZXMnOnsnaWQnOidyb3V0ZXMvdGhlbWVzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RoZW1lcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90aGVtZXMtV1BMU1hNSVUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTBCNUU4NkIxLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FB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
