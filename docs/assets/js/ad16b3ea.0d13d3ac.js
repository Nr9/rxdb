"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7e3],{8920:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var s=d(7624),i=d(4552);const a={title:"Dev-Mode Plugin",slug:"dev-mode.html"},t="Dev Mode",l={id:"dev-mode",title:"Dev-Mode Plugin",description:"The dev-mode plugin adds many checks and validations to RxDB.",source:"@site/docs/dev-mode.md",sourceDirName:".",slug:"/dev-mode.html",permalink:"/dev-mode.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dev-Mode Plugin",slug:"dev-mode.html"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/install.html"},next:{title:"RxDatabase",permalink:"/rx-database.html"}},o={},r=[{value:"Usage with Node.js",id:"usage-with-nodejs",level:2},{value:"Usage with Angular",id:"usage-with-angular",level:2},{value:"Usage with webpack",id:"usage-with-webpack",level:2},{value:"Disable the dev-mode warning",id:"disable-the-dev-mode-warning",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dev-mode",children:"Dev Mode"}),"\n",(0,s.jsx)(n.p,{children:"The dev-mode plugin adds many checks and validations to RxDB.\nThis ensures that you use the RxDB API properly and so the dev-mode plugin should always be used when\nusing RxDB in development mode."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Adds readable error messages."}),"\n",(0,s.jsxs)(n.li,{children:["Ensures that ",(0,s.jsx)(n.code,{children:"readonly"})," JavaScript objects are not accidentally mutated."]}),"\n",(0,s.jsxs)(n.li,{children:["Adds validation check for validity of schemas, queries, ORM methods and document fields.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"NOTICE"}),": The ",(0,s.jsx)(n.code,{children:"dev-mode"})," plugin does not perform schema checks against the data see ",(0,s.jsx)(n.a,{href:"/schema-validation.html",children:"schema validation"})," for that."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IMPORTANT"}),": The dev-mode plugin will increase your build size and decrease the performance. It must ",(0,s.jsx)(n.strong,{children:"always"})," be used in development. You should ",(0,s.jsx)(n.strong,{children:"never"})," use it in production."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import { addRxPlugin } from 'rxdb';\nimport { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';\naddRxPlugin(RxDBDevModePlugin);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-nodejs",children:"Usage with Node.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"async function createDb() {\n    if (process.env.NODE_ENV !== \"production\") {\n        await import('rxdb/plugins/dev-mode').then(\n            module => addRxPlugin(module.RxDBDevModePlugin)\n        );\n    }\n    const db = createRxDatabase( /* ... */ );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-angular",children:"Usage with Angular"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { isDevMode } from '@angular/core';\n\nasync function createDb() {\n    if (isDevMode()){\n        await import('rxdb/plugins/dev-mode').then(\n            module => addRxPlugin(module.RxDBDevModePlugin)\n        );\n    }\n\n    const db = createRxDatabase( /* ... */ );\n    // ...\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-webpack",children:"Usage with webpack"}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"webpack.config.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"module.exports = {\n    entry: './src/index.ts',\n    /* ... */\n    plugins: [\n        // set a global variable that can be accessed during runtime\n        new webpack.DefinePlugin({ MODE: JSON.stringify(\"production\") })\n    ]\n    /* ... */\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"In your source code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare var MODE: 'production' | 'development';\n\nasync function createDb() {\n    if (MODE === 'development') {\n        await import('rxdb/plugins/dev-mode').then(\n            module => addRxPlugin(module.RxDBDevModePlugin)\n        );\n    }\n    const db = createRxDatabase( /* ... */ );\n    // ...\n}\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"disable-the-dev-mode-warning",children:"Disable the dev-mode warning"}),"\n",(0,s.jsxs)(n.p,{children:["When the dev-mode is enabled, it will print a ",(0,s.jsx)(n.code,{children:"console.warn()"})," message to the console so that you do not accidentally use the dev-mode in production. To disable this warning you can call the ",(0,s.jsx)(n.code,{children:"disableWarnings()"})," function."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { disableWarnings } from 'rxdb/plugins/dev-mode';\ndisableWarnings();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4552:(e,n,d)=>{d.d(n,{I:()=>l,M:()=>t});var s=d(1504);const i={},a=s.createContext(i);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);