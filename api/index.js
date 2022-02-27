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

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_cloudflare_workers = require("@remix-run/cloudflare-workers");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(void 0, {
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

// app/session.server.ts
var unencryptedSession = (void 0)({
  cookie: {
    path: "/",
    sameSite: "lax"
  }
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-ACEUULOQ.css";

// app/components/Navbar/index.tsx
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
  return (void 0)({ theme });
};
function App() {
  const { theme } = (void 0)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    "data-theme": theme || "dark"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(void 0, null), /* @__PURE__ */ React.createElement(void 0, null)), /* @__PURE__ */ React.createElement("body", {
    className: "flex flex-col p-4 space-y-4 font-mono h-screen w-screen overflow-hidden"
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", {
    className: "flex flex-row space-x-4 overflow-hidden"
  }, /* @__PURE__ */ React.createElement(void 0, null)), /* @__PURE__ */ React.createElement(void 0, null), /* @__PURE__ */ React.createElement(void 0, null), /* @__PURE__ */ React.createElement(void 0, null)));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings
});
function Settings() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Settings"));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor.tsx
var editor_exports = {};
__export(editor_exports, {
  default: () => Index
});

// app/components/Sidebar.tsx
var import_react3 = __toESM(require("react"));

// app/components/GameVaultCard.tsx
var import_react2 = __toESM(require("react"));
var GameVaultCard = ({ title, description }) => {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "card bg-base-100 shadow-xl"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "card-body p-4"
  }, /* @__PURE__ */ import_react2.default.createElement("h3", {
    className: "card-title"
  }, title), /* @__PURE__ */ import_react2.default.createElement("p", null, description)));
};
var GameVaultCard_default = GameVaultCard;

// app/components/Sidebar.tsx
var testVaults = new Array(10).fill({
  title: "Test Vault",
  description: "This is a test vault"
});
var Sidebar = () => {
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "bg-base-300 flex flex-col w-60 rounded-box p-4 grow-0 shrink-0"
  }, /* @__PURE__ */ import_react3.default.createElement("h2", {
    className: "text-xl font-bold mb-4"
  }, "Your game vaults"), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "grow overflow-y-auto"
  }, /* @__PURE__ */ import_react3.default.createElement("ul", {
    className: "flex flex-col mr-2 space-y-2"
  }, testVaults.map((vault, index) => /* @__PURE__ */ import_react3.default.createElement(GameVaultCard_default, __spreadValues({
    key: index
  }, vault))))));
};
var Sidebar_default = Sidebar;

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor.tsx
function Index() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Sidebar_default, null), /* @__PURE__ */ React.createElement(void 0, null));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor/$idea.tsx
var idea_exports = {};
__export(idea_exports, {
  default: () => IdeaEditor
});
var import_react4 = __toESM(require("react"));
var import_react5 = require("@tiptap/react");
function IdeaEditor({ editor }) {
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "border-4 border-solid border-primary p-4 h-full w-full font-sans"
  }, /* @__PURE__ */ import_react4.default.createElement(import_react5.EditorContent, {
    editor,
    className: "h-full w-full m-auto"
  }));
}

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/editor/index.tsx
var editor_exports2 = {};
__export(editor_exports2, {
  default: () => Editor2
});
var import_react6 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_extension_underline = require("@tiptap/extension-underline");
var import_extension_typography = require("@tiptap/extension-typography");
function Editor2() {
  const editor = (0, import_react6.useEditor)({
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
  action: () => action,
  loader: () => loader2
});
var action = async ({ request }) => {
  console.log("Themes action");
  let session = await unencryptedSession.getSession(request.headers.get("Cookie"));
  let formData = new URLSearchParams(await request.text());
  console.log("formData", formData);
  let theme = formData.get("theme") || "dark";
  session.set("theme", theme);
  return (void 0)(null, {
    headers: {
      "Set-Cookie": await unencryptedSession.commitSession(session)
    }
  });
};
var loader2 = () => {
  throw (void 0)("/");
};

// route:/home/pedroza/webdev/idea_vault_vercel/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader3,
  meta: () => meta2
});

// app/helpers.ts
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
var loader3 = () => {
  throw (void 0)("/editor");
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "d62ba435", "entry": { "module": "/build/entry.client-F54UCN4P.js", "imports": ["/build/_shared/chunk-2LKANNDY.js", "/build/_shared/chunk-OGYP3M3B.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-X5VSDWW2.js", "imports": ["/build/_shared/chunk-H6V56SWL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor": { "id": "routes/editor", "parentId": "root", "path": "editor", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/editor-BPPA66AS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor/$idea": { "id": "routes/editor/$idea", "parentId": "routes/editor", "path": ":idea", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/editor/$idea-BCWMYSYR.js", "imports": ["/build/_shared/chunk-VGPXEPFB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/editor/index": { "id": "routes/editor/index", "parentId": "routes/editor", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/editor/index-P46FJ6A7.js", "imports": ["/build/_shared/chunk-VGPXEPFB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-FOZAHDIO.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/settings": { "id": "routes/settings", "parentId": "root", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/settings-6NES7ZB2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/themes": { "id": "routes/themes", "parentId": "root", "path": "themes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/themes-QC7JJRUA.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D62BA435.js" };

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

// server.js
addEventListener("fetch", (0, import_cloudflare_workers.createEventHandler)({ build: server_build_exports, mode: "production" }));
