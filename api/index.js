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
var tailwind_default = "/build/_assets/tailwind-VALVEMAM.css";

// app/components/Navbar/index.tsx
init_react();
var import_icons = require("@ant-design/icons");
var import_react = require("@remix-run/react");
function Navbar() {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "navbar rounded-box bg-primary p-4 justify-between"
  }, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "text-2xl font-extrabold"
  }, "idea_vault")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react.Link, {
    to: "/settings"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "btn btn-ghost btn-square btn-sm"
  }, /* @__PURE__ */ React.createElement(import_icons.SettingFilled, {
    className: "text-lg"
  })))));
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
  default: () => Settings
});
init_react();

// app/components/Sidebar.tsx
init_react();
var Sidebar = ({ children, title }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-60 rounded-box p-4 grow-0 shrink-0"
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
function Settings() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar_default, {
    title: "Settings"
  }, AVAILABLE_SETTINGS.map(({ path, name }) => /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: path,
    className: "card bg-base-300 shadow-xl"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "card-body p-4"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "card-title"
  }, name))))), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/settings/appearance.tsx
var appearance_exports = {};
__export(appearance_exports, {
  action: () => action,
  default: () => Appearance,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_react3 = require("@remix-run/react");
var import_react4 = require("react");
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
var loader2 = async ({ request }) => {
  let session = await unencryptedSession.getSession(request.headers.get("Cookie"));
  let theme = session.get("theme") || "dark";
  return (0, import_remix5.json)(theme);
};
function Appearance() {
  let selectedTheme = (0, import_remix5.useLoaderData)();
  let formRef = (0, import_react4.useRef)(null);
  let submit = (0, import_react3.useSubmit)();
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-bold"
  }, "Theme"), /* @__PURE__ */ React.createElement(import_react3.Form, {
    ref: formRef,
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
  })))), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save")));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/settings/index.tsx
var settings_exports2 = {};
__export(settings_exports2, {
  loader: () => loader3
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader3 = () => {
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
var import_react5 = __toESM(require("react"));
var GameVaultCard = ({ title, description }) => {
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "card bg-base-300 shadow-xl"
  }, /* @__PURE__ */ import_react5.default.createElement("div", {
    className: "card-body p-4"
  }, /* @__PURE__ */ import_react5.default.createElement("h3", {
    className: "card-title"
  }, title), /* @__PURE__ */ import_react5.default.createElement("p", null, description)));
};
var GameVaultCard_default = GameVaultCard;

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor.tsx
var import_react6 = __toESM(require("react"));
var testVaults = new Array(10).fill({
  title: "Test Vault",
  description: "This is a test vault"
});
function Index() {
  return /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(Sidebar_default, {
    title: "Your game vaults"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "grow overflow-y-auto"
  }, /* @__PURE__ */ import_react6.default.createElement("ul", {
    className: "flex flex-col mr-2 space-y-2"
  }, testVaults.map((vault, index) => /* @__PURE__ */ import_react6.default.createElement(GameVaultCard_default, __spreadValues({
    key: index
  }, vault)))))), /* @__PURE__ */ import_react6.default.createElement(import_remix7.Outlet, null));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor/$idea.tsx
var idea_exports = {};
__export(idea_exports, {
  default: () => IdeaEditor
});
init_react();
var import_react7 = __toESM(require("react"));
var import_react8 = require("@tiptap/react");
function IdeaEditor({ editor }) {
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    className: "border-4 border-solid border-primary p-4 h-full w-full font-sans"
  }, /* @__PURE__ */ import_react7.default.createElement(import_react8.EditorContent, {
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
var import_react9 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_extension_underline = require("@tiptap/extension-underline");
var import_extension_typography = require("@tiptap/extension-typography");
function Editor2() {
  const editor = (0, import_react9.useEditor)({
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
  loader: () => loader4
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
var loader4 = () => {
  throw (0, import_remix8.redirect)("/");
};

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader5,
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
var loader5 = () => {
  throw (0, import_remix9.redirect)("/editor");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "d22ddc6f", "entry": { "module": "/build/entry.client-TC6U3TKC.js", "imports": ["/build/_shared/chunk-XE6JVGWE.js", "/build/_shared/chunk-E7SZ33BO.js", "/build/_shared/chunk-P2FTGPOX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-3S7JVRFO.js", "imports": ["/build/_shared/chunk-7QFJIF5W.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor": { "id": "routes/editor", "parentId": "root", "path": "editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/editor-2HXSYTJD.js", "imports": ["/build/_shared/chunk-25SB5ZD6.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor/$idea": { "id": "routes/editor/$idea", "parentId": "routes/editor", "path": ":idea", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/editor/$idea-Z27L6T3R.js", "imports": ["/build/_shared/chunk-K2DVDQ2A.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor/index": { "id": "routes/editor/index", "parentId": "routes/editor", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/editor/index-2EMW7MEL.js", "imports": ["/build/_shared/chunk-K2DVDQ2A.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-4PLZZ3VP.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-J5BOK632.js", "imports": ["/build/_shared/chunk-25SB5ZD6.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings/appearance": { "id": "routes/settings/appearance", "parentId": "routes/settings", "path": "appearance", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings/appearance-LG5K35Q4.js", "imports": ["/build/_shared/chunk-7QFJIF5W.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings/index": { "id": "routes/settings/index", "parentId": "routes/settings", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/settings/index-7CXAVMOZ.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/themes": { "id": "routes/themes", "parentId": "root", "path": "themes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/themes-4TX3DCAV.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D22DDC6F.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb290LnRzeCIsICIuLi9hcHAvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9TaWRlYmFyLnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzL2FwcGVhcmFuY2UudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvc2V0dGluZ3MvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvZWRpdG9yLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9HYW1lVmF1bHRDYXJkLnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2VkaXRvci8kaWRlYS50c3giLCAicm91dGU6L2hvbWUvcGVkcm96YS93ZWJkZXYvaWRlYV92YXVsdF92ZXJjZWwvYXBwL3JvdXRlcy9lZGl0b3IvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvdGhlbWVzLnRzeCIsICJyb3V0ZTovaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvaGVscGVycy50cyIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL3NldHRpbmdzL2FwcGVhcmFuY2UudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvc2V0dGluZ3MvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvZWRpdG9yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2VkaXRvci8kaWRlYS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvcGVkcm96YS93ZWJkZXYvaWRlYV92YXVsdF92ZXJjZWwvYXBwL3JvdXRlcy9lZGl0b3IvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9ob21lL3BlZHJvemEvd2ViZGV2L2lkZWFfdmF1bHRfdmVyY2VsL2FwcC9yb3V0ZXMvdGhlbWVzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9wZWRyb3phL3dlYmRldi9pZGVhX3ZhdWx0X3ZlcmNlbC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNldHRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zZXR0aW5ncy9hcHBlYXJhbmNlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zZXR0aW5ncy9hcHBlYXJhbmNlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2V0dGluZ3NcIixcbiAgICAgIHBhdGg6IFwiYXBwZWFyYW5jZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2V0dGluZ3MvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NldHRpbmdzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2V0dGluZ3NcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9lZGl0b3JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2VkaXRvclwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJlZGl0b3JcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2VkaXRvci8kaWRlYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZWRpdG9yLyRpZGVhXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZWRpdG9yXCIsXG4gICAgICBwYXRoOiBcIjppZGVhXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9lZGl0b3IvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2VkaXRvci9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2VkaXRvclwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3RoZW1lc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvdGhlbWVzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInRoZW1lc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gJ3JlbWl4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyg8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPik7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoJzwhRE9DVFlQRSBodG1sPicgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB0eXBlIHtMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb259IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7anNvbiwgTGlua3MsIExpdmVSZWxvYWQsIExvYWRlckZ1bmN0aW9uLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uLCB1c2VMb2FkZXJEYXRhLH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHt1bmVuY3J5cHRlZFNlc3Npb259IGZyb20gJ34vc2Vzc2lvbi5zZXJ2ZXInO1xuaW1wb3J0IHRhaWx3aW5kU3R5bGVzVXJsIGZyb20gJy4vc3R5bGVzL3RhaWx3aW5kLmNzcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ34vY29tcG9uZW50cy9OYXZiYXInO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge3RpdGxlOiAnTmV3IFJlbWl4IEFwcCd9O1xufTtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7cmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHRhaWx3aW5kU3R5bGVzVXJsfV07XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoe3JlcXVlc3R9KSA9PiB7XG4gIGxldCBzZXNzaW9uID0gYXdhaXQgdW5lbmNyeXB0ZWRTZXNzaW9uLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldCgnQ29va2llJykpO1xuICBsZXQgdGhlbWUgPSBzZXNzaW9uLmdldCgndGhlbWUnKSB8fCAnZGFyayc7XG5cbiAgcmV0dXJuIGpzb24oe3RoZW1lfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHt0aGVtZX0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIiBkYXRhLXRoZW1lPXt0aGVtZSB8fCAnZGFyayd9PlxuICAgIDxoZWFkPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICA8TWV0YS8+XG4gICAgICA8TGlua3MvPlxuICAgIDwvaGVhZD5cbiAgICA8Ym9keSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNCBzcGFjZS15LTQgZm9udC1tb25vIGgtc2NyZWVuIHctc2NyZWVuIG92ZXJmbG93LWhpZGRlblwiPlxuICAgIDxOYXZiYXIvPlxuICAgIDxtYWluIGNsYXNzTmFtZT1cImdyb3cgZmxleCBmbGV4LXJvdyBzcGFjZS14LTQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8T3V0bGV0Lz5cbiAgICA8L21haW4+XG4gICAgPFNjcm9sbFJlc3RvcmF0aW9uLz5cbiAgICA8U2NyaXB0cy8+XG4gICAgPExpdmVSZWxvYWQvPlxuICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdyZW1peCc7XG5cbmV4cG9ydCBsZXQgdW5lbmNyeXB0ZWRTZXNzaW9uID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBwYXRoOiAnLycsXG4gICAgc2FtZVNpdGU6ICdsYXgnLFxuICB9LFxufSk7XG4iLCAiaW1wb3J0IHsgU2V0dGluZ0ZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdAcmVtaXgtcnVuL3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIHJvdW5kZWQtYm94IGJnLXByaW1hcnkgcC00IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgPExpbmsgdG89Jy8nPjxhIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZXh0cmFib2xkXCI+aWRlYV92YXVsdDwvYT48L0xpbms+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGluayB0bz1cIi9zZXR0aW5nc1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgYnRuLXNxdWFyZSBidG4tc21cIj5cbiAgICAgICAgICAgIDxTZXR0aW5nRmlsbGVkIGNsYXNzTmFtZT1cInRleHQtbGdcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFNpZGViYXIgZnJvbSBcIn4vY29tcG9uZW50cy9TaWRlYmFyXCI7XG5pbXBvcnQge091dGxldH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0XCI7XG5cbmludGVyZmFjZSBTZXR0aW5nUm91dGUge1xuICBwYXRoOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgQVZBSUxBQkxFX1NFVFRJTkdTOiBTZXR0aW5nUm91dGVbXSA9IFtcbiAge1xuICAgIHBhdGg6IFwiL3NldHRpbmdzL2FwcGVhcmFuY2VcIixcbiAgICBuYW1lOiBcIkFwcGVhcmFuY2VcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lkZWJhciB0aXRsZT0nU2V0dGluZ3MnPlxuICAgICAgICB7QVZBSUxBQkxFX1NFVFRJTkdTLm1hcCgoe3BhdGgsIG5hbWV9KSA9PiAoXG4gICAgICAgICAgPExpbmsgdG89e3BhdGh9IGNsYXNzTmFtZT1cImNhcmQgYmctYmFzZS0zMDAgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcC00XCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvU2lkZWJhcj5cbiAgICAgIDxPdXRsZXQvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7UmVhY3ROb2RlfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFNpZGViYXJQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGUsXG59O1xuXG5jb25zdCBTaWRlYmFyID0gKHtjaGlsZHJlbiwgdGl0bGV9OiBTaWRlYmFyUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy02MCByb3VuZGVkLWJveCBwLTQgZ3Jvdy0wIHNocmluay0wXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2gyPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiIsICJpbXBvcnQge0FjdGlvbkZ1bmN0aW9uLCBqc29uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YX0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge0Zvcm0sIHVzZVN1Ym1pdH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3RcIjtcbmltcG9ydCB7dXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dW5lbmNyeXB0ZWRTZXNzaW9ufSBmcm9tIFwifi9zZXNzaW9uLnNlcnZlclwiO1xuXG5jb25zdCBWQUxJRF9USEVNRVMgPSBbXG4gIFwiZGFya1wiLFxuICBcImxpZ2h0XCIsXG4gIFwiY3VwY2FrZVwiLFxuICBcImJ1bWJsZWJlZVwiLFxuICBcImVtZXJhbGRcIixcbiAgXCJjb3Jwb3JhdGVcIixcbiAgXCJzeW50aHdhdmVcIixcbiAgXCJyZXRyb1wiLFxuICBcImN5YmVycHVua1wiLFxuICBcInZhbGVudGluZVwiLFxuXTtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IHVuZW5jcnlwdGVkU2Vzc2lvbi5nZXRTZXNzaW9uKFxuICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcbiAgKTtcblxuICBsZXQgZm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGF3YWl0IHJlcXVlc3QudGV4dCgpKTtcblxuICBsZXQgdGhlbWUgPSBmb3JtRGF0YS5nZXQoXCJ0aGVtZVwiKSB8fCBcImRhcmtcIjtcbiAgc2Vzc2lvbi5zZXQoXCJ0aGVtZVwiLCB0aGVtZSk7XG5cbiAgcmV0dXJuIGpzb24obnVsbCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCB1bmVuY3J5cHRlZFNlc3Npb24uY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdH0pID0+IHtcbiAgbGV0IHNlc3Npb24gPSBhd2FpdCB1bmVuY3J5cHRlZFNlc3Npb24uZ2V0U2Vzc2lvbihcbiAgICByZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpXG4gICk7XG4gIGxldCB0aGVtZSA9IHNlc3Npb24uZ2V0KFwidGhlbWVcIikgfHwgXCJkYXJrXCI7XG5cbiAgcmV0dXJuIGpzb24odGhlbWUpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwZWFyYW5jZSgpIHtcbiAgbGV0IHNlbGVjdGVkVGhlbWUgPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgbGV0IGZvcm1SZWYgPSB1c2VSZWY8SFRNTEZvcm1FbGVtZW50PihudWxsKTtcbiAgbGV0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDIgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtYm9sZCc+VGhlbWU8L2gyPlxuICAgICAgPEZvcm0gcmVmPXtmb3JtUmVmfSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIHtWQUxJRF9USEVNRVMubWFwKCh0aGVtZSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXt0aGVtZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgbGFiZWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtdGV4dCBtci00XCI+e3RoZW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2B0aGVtZS0ke3RoZW1lfWB9XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGhlbWVcIlxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtzZWxlY3RlZFRoZW1lID09PSB0aGVtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCAiaW1wb3J0IHtMb2FkZXJGdW5jdGlvbiwgcmVkaXJlY3R9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHRocm93IHJlZGlyZWN0KCcvc2V0dGluZ3MvYXBwZWFyYW5jZScpO1xufTtcbiIsICJpbXBvcnQge091dGxldH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnfi9jb21wb25lbnRzL1NpZGViYXInO1xuaW1wb3J0IEdhbWVWYXVsdENhcmQgZnJvbSBcIn4vY29tcG9uZW50cy9HYW1lVmF1bHRDYXJkXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHRlc3RWYXVsdHMgPSBuZXcgQXJyYXkoMTApLmZpbGwoe1xuICB0aXRsZTogJ1Rlc3QgVmF1bHQnLFxuICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSB0ZXN0IHZhdWx0Jyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpZGViYXIgdGl0bGU9J1lvdXIgZ2FtZSB2YXVsdHMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbXItMiBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIHt0ZXN0VmF1bHRzLm1hcCgodmF1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxHYW1lVmF1bHRDYXJkIGtleT17aW5kZXh9IHsuLi52YXVsdH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaWRlYmFyPlxuICAgICAgPE91dGxldC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEdhbWVWYXVsdENhcmRQcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IEdhbWVWYXVsdENhcmQgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24gfTogR2FtZVZhdWx0Q2FyZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLWJhc2UtMzAwIHNoYWRvdy14bFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcC00XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWYXVsdENhcmQ7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVkaXRvciwgRWRpdG9yQ29udGVudCB9IGZyb20gJ0B0aXB0YXAvcmVhY3QnO1xuXG5pbnRlcmZhY2UgSWRlYUVkaXRvclByb3BzIHtcbiAgZWRpdG9yOiBFZGl0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElkZWFFZGl0b3IoeyBlZGl0b3IgfTogSWRlYUVkaXRvclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItNCBib3JkZXItc29saWQgYm9yZGVyLXByaW1hcnkgcC00IGgtZnVsbCB3LWZ1bGwgZm9udC1zYW5zXCI+XG4gICAgICA8RWRpdG9yQ29udGVudCBlZGl0b3I9e2VkaXRvcn0gY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBtLWF1dG9cIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IHVzZUVkaXRvciB9IGZyb20gJ0B0aXB0YXAvcmVhY3QnO1xuaW1wb3J0IFN0YXJ0ZXJLaXQgZnJvbSAnQHRpcHRhcC9zdGFydGVyLWtpdCc7XG5pbXBvcnQgeyBVbmRlcmxpbmUgfSBmcm9tICdAdGlwdGFwL2V4dGVuc2lvbi11bmRlcmxpbmUnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0B0aXB0YXAvZXh0ZW5zaW9uLXR5cG9ncmFwaHknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IoKSB7XG4gIGNvbnN0IGVkaXRvciA9IHVzZUVkaXRvcih7XG4gICAgZXh0ZW5zaW9uczogW1N0YXJ0ZXJLaXQsIFVuZGVybGluZSwgVHlwb2dyYXBoeV0sXG4gICAgYXV0b2ZvY3VzOiB0cnVlLFxuICAgIGVuYWJsZVBhc3RlUnVsZXM6IHRydWUsXG4gICAgZWRpdG9yUHJvcHM6IHtcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY2xhc3M6ICdoLWZ1bGwgcHJvc2UgcHJvc2Utc20gc206cHJvc2UgbGc6cHJvc2UtbGcgeGw6cHJvc2UtMnhsIG0tNSBmb2N1czpvdXRsaW5lLW5vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDM+Q2hvb3NlIGEgbm90ZSBvbiB0aGUgbGVmdDwvaDM+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIGpzb24sIExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IHVuZW5jcnlwdGVkU2Vzc2lvbiB9IGZyb20gJ34vc2Vzc2lvbi5zZXJ2ZXInO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc29sZS5sb2coJ1RoZW1lcyBhY3Rpb24nKTtcblxuICBsZXQgc2Vzc2lvbiA9IGF3YWl0IHVuZW5jcnlwdGVkU2Vzc2lvbi5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoJ0Nvb2tpZScpKTtcblxuICBsZXQgZm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGF3YWl0IHJlcXVlc3QudGV4dCgpKTtcbiAgY29uc29sZS5sb2coJ2Zvcm1EYXRhJywgZm9ybURhdGEpO1xuXG4gIGxldCB0aGVtZSA9IGZvcm1EYXRhLmdldCgndGhlbWUnKSB8fCAnZGFyayc7XG4gIHNlc3Npb24uc2V0KCd0aGVtZScsIHRoZW1lKTtcblxuICByZXR1cm4ganNvbihudWxsLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1NldC1Db29raWUnOiBhd2FpdCB1bmVuY3J5cHRlZFNlc3Npb24uY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbiAgdGhyb3cgcmVkaXJlY3QoJy8nKTtcbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tICdyZW1peCc7XG5pbXBvcnQgeyBmb3JtYXRNZXRhIH0gZnJvbSAnfi9oZWxwZXJzJztcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBmb3JtYXRNZXRhKHtcbiAgICB0aXRsZTogJ2lkZWFfdmF1bHQnLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBzYWZlIHBsYWNlIHRvIHN0b3JlIGFsbCB5b3VyIGlkZWFzJyxcbiAgfSk7XG59O1xuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHRocm93IHJlZGlyZWN0KCcvZWRpdG9yJyk7XG59O1xuIiwgImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNZXRhKG1ldGE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pIHtcbiAgY29uc3QgZGVzY3JpcHRvcjogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICB0aXRsZTogJ1JlbWl4IEd1aWRlJyxcbiAgICAnb2c6c2l0ZV9uYW1lJzogJ3JlbWl4LWd1aWRlJyxcbiAgICAnb2c6dHlwZSc6ICd3ZWJzaXRlJyxcbiAgfTtcblxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhtZXRhKSkge1xuICAgIGlmICgha2V5IHx8ICF2YWx1ZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ3RpdGxlJzoge1xuICAgICAgICBkZXNjcmlwdG9yWyd0aXRsZSddID1cbiAgICAgICAgICB2YWx1ZSA9PT0gZGVzY3JpcHRvclsndGl0bGUnXSA/IGRlc2NyaXB0b3JbJ3RpdGxlJ10gOiBgJHt2YWx1ZX0gLSAke2Rlc2NyaXB0b3JbJ3RpdGxlJ119YDtcbiAgICAgICAgZGVzY3JpcHRvclsnb2c6dGl0bGUnXSA9IHZhbHVlO1xuICAgICAgICBkZXNjcmlwdG9yWyd0d2l0dGVyOnRpdGxlJ10gPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdkZXNjcmlwdGlvbic6IHtcbiAgICAgICAgZGVzY3JpcHRvclsnZGVzY3JpcHRpb24nXSA9IHZhbHVlO1xuICAgICAgICBkZXNjcmlwdG9yWydvZzpkZXNjcmlwdGlvbiddID0gdmFsdWU7XG4gICAgICAgIGRlc2NyaXB0b3JbJ3R3aXR0ZXI6ZGVzY3JpcHRpb24nXSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgZGVzY3JpcHRvcltrZXldID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmc7XG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZSh0ZXh0OiBudWxsIHwgdW5kZWZpbmVkKTogbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHRleHQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCF0ZXh0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGV4dFswXS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2QyMmRkYzZmJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1UQzZVM1RLQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWEU2SlZHV0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FN1NaMzNCTy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVAyRlRHUE9YLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0zUzdKVlJGTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1FGSklGNVcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZWRpdG9yJzp7J2lkJzoncm91dGVzL2VkaXRvcicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidlZGl0b3InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZWRpdG9yLTJIWFNZVEpELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yNVNCNVpENi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZWRpdG9yLyRpZGVhJzp7J2lkJzoncm91dGVzL2VkaXRvci8kaWRlYScsJ3BhcmVudElkJzoncm91dGVzL2VkaXRvcicsJ3BhdGgnOic6aWRlYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9lZGl0b3IvJGlkZWEtWjI3TDZUM1IuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUsyRFZEUTJBLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9lZGl0b3IvaW5kZXgnOnsnaWQnOidyb3V0ZXMvZWRpdG9yL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvZWRpdG9yJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2VkaXRvci9pbmRleC0yRU1XN01FTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSzJEVkRRMkEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTRQTFpaM1ZQLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXR0aW5ncyc6eydpZCc6J3JvdXRlcy9zZXR0aW5ncycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzZXR0aW5ncycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zZXR0aW5ncy1KNUJPSzYzMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMjVTQjVaRDYuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NldHRpbmdzL2FwcGVhcmFuY2UnOnsnaWQnOidyb3V0ZXMvc2V0dGluZ3MvYXBwZWFyYW5jZScsJ3BhcmVudElkJzoncm91dGVzL3NldHRpbmdzJywncGF0aCc6J2FwcGVhcmFuY2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2V0dGluZ3MvYXBwZWFyYW5jZS1MRzVLMzVRNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN1FGSklGNVcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zZXR0aW5ncy9pbmRleCc6eydpZCc6J3JvdXRlcy9zZXR0aW5ncy9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL3NldHRpbmdzJywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NldHRpbmdzL2luZGV4LTdDWEFWTU9aLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy90aGVtZXMnOnsnaWQnOidyb3V0ZXMvdGhlbWVzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3RoZW1lcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy90aGVtZXMtNFRYM0RDQVYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUQyMkREQzZGLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsbUNBQW1DO0FBQUEsTUFDaEUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUdqQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksZ0JBQWdCLFFBQVE7QUFJNUIsV0FBTyxlQUFlLFNBQVMsZ0JBQWdCO0FBQUEsTUFDN0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxN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
