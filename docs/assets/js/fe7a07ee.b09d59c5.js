"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[1524],{3596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(7624),a=t(4552);const s={title:"DenoKV RxStorage",slug:"rx-storage-denokv.html"},r="RxDB Database on top of Deno Key Value Store (beta)",i={id:"rx-storage-denokv",title:"DenoKV RxStorage",description:"With the DenoKV RxStorage layer for RxDB, you can run a fully featured NoSQL database on top of the DenoKV API.",source:"@site/docs/rx-storage-denokv.md",sourceDirName:".",slug:"/rx-storage-denokv.html",permalink:"/rx-storage-denokv.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"DenoKV RxStorage",slug:"rx-storage-denokv.html"},sidebar:"tutorialSidebar",previous:{title:"MongoDB RxStorage",permalink:"/rx-storage-mongodb.html"},next:{title:"FoundationDB RxStorage",permalink:"/rx-storage-foundationdb.html"}},l={},d=[{value:"What is DenoKV",id:"what-is-denokv",level:2},{value:"Use cases",id:"use-cases",level:2},{value:"Using the DenoKV RxStorage",id:"using-the-denokv-rxstorage",level:2},{value:"Using non-DenoKV storages in Deno",id:"using-non-denokv-storages-in-deno",level:2},{value:"Limitations",id:"limitations",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"rxdb-database-on-top-of-deno-key-value-store-beta",children:"RxDB Database on top of Deno Key Value Store (beta)"}),"\n",(0,o.jsxs)(n.p,{children:["With the DenoKV ",(0,o.jsx)(n.a,{href:"/rx-storage.html",children:"RxStorage"})," layer for ",(0,o.jsx)(n.a,{href:"https://rxdb.info",children:"RxDB"}),", you can run a fully featured ",(0,o.jsx)(n.strong,{children:"NoSQL database"})," on top of the ",(0,o.jsx)(n.a,{href:"https://docs.deno.com/kv/manual",children:"DenoKV API"}),".\nThis gives you the benefits and features of the RxDB JavaScript Database, combined with the globally availability and distribution features of the DenoKV."]}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"./files/icons/deno.svg",alt:"DenoKV Database",width:"160"})}),"\n",(0,o.jsx)(n.h2,{id:"what-is-denokv",children:"What is DenoKV"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://deno.com/kv",children:"DenoKV"})," is a strongly consistent key-value storage, globally replicated for low-latency reads across 35 worldwide regions via ",(0,o.jsx)(n.a,{href:"https://deno.com/deploy",children:"Deno Deploy"}),".\nWhen you release your Deno application on Deno Deploy, it will start a instance on each of the ",(0,o.jsx)(n.a,{href:"https://docs.deno.com/deploy/manual/regions",children:"35 worldwide regions"}),'. This edge deployment guarantees minimal latency when serving requests to end users devices around the world. DenoKV is a shared storage which shares its state across all instances.\nBut, because DenoKV is "only" a ',(0,o.jsx)(n.strong,{children:"Key-Value storage"}),", it only supports basic CRUD operations on datasets and indexes. Complex features like queries, encryption, compression or client-server replication, are missing. Using RxDB on top of DenoKV fills this gap and makes it easy to build realtime ",(0,o.jsx)(n.a,{href:"/offline-first.html",children:"offline-first"})," application on top of Deno backend."]}),"\n",(0,o.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,o.jsx)(n.p,{children:"Using RxDB-DenoKV instead of plain DenoKV, can have a wide range of benefits depending on your use case."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Reduce vendor lock-in"}),": RxDB has a swappable ",(0,o.jsx)(n.a,{href:"/rx-storage.html",children:"storage layer"})," which allows you to swap out the underlying storage of your database. If you ever decide to move away from DenoDeploy or Deno at all, you do not have to refactor your whole application and instead just ",(0,o.jsx)(n.strong,{children:"swap the storage plugin"}),". For example if you decide migrate to Node.js, you can use the ",(0,o.jsx)(n.a,{href:"/rx-storage-foundationdb.html",children:"FoundationDB RxStorage"})," and store your data there. DenoKV is also implemented on top of FoundationDB so you can get similar performance. Alternatively RxDB supports a wide range of ",(0,o.jsx)(n.a,{href:"/rx-storage.html",children:"storage plugins"})," you can decide from."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Add reactiveness"}),": DenoKV is a plain request-response datastore. While it supports observation of single rows by id, it does not allow to observe row-ranges or events. This makes it hard to impossible to build realtime applications with it because polling would be the only way to watch ranges of key-value pairs. With RxDB on top of DenoKV, changes to the database are ",(0,o.jsx)(n.strong,{children:"shared between DenoDeploy instances"})," so when you ",(0,o.jsxs)(n.strong,{children:["observe a ",(0,o.jsx)(n.a,{href:"/rx-query.html",children:"query"})]})," you can be sure that it is always up to date, no mather which instance has changed the document. Internally RxDB uses the ",(0,o.jsx)(n.a,{href:"https://docs.deno.com/deploy/api/runtime-broadcast-channel",children:"Deno BroadcastChannel API"})," to share events between instances."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Reuse Client and Server Code"}),": When you use RxDB on the server and on the client side, many parts of your code can be reused on both sides which decreases development time significantly."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Replicate from DenoKV to a local RxDB state"}),": Instead of running all operations against the global DenoKV, you can run a ",(0,o.jsx)(n.a,{href:"/replication.html",children:"realtime-replication"})," between a DenoKV-RxDatabase and a ",(0,o.jsx)(n.a,{href:"/rx-storage-filesystem-node.html",children:"locally stored dataset"})," or maybe even an ",(0,o.jsx)(n.a,{href:"/rx-storage-memory.html",children:"in-memory"})," stored one. This improves ",(0,o.jsx)(n.strong,{children:"query performance"})," and can ",(0,o.jsx)(n.strong,{children:"reduce your Deno Deploy cloud costs"})," because less operations run against the DenoKV, they only locally instead."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Replicate with other backends"}),": The RxDB ",(0,o.jsx)(n.a,{href:"/replication.html",children:"replication protocol"})," is pretty simple and allows you to easily build a replication with any backend architecture. For example if you already have your data stored in a self-hosted MySQL server, you can use RxDB to do a realtime replication of that data into a DenoKV RxDatabase instance. RxDB also has many plugins for replication with backend/protocols like ",(0,o.jsx)(n.a,{href:"/replication-graphql.html",children:"GraphQL"}),", ",(0,o.jsx)(n.a,{href:"/replication-websocket.html",children:"Websocket"}),", ",(0,o.jsx)(n.a,{href:"/replication-couchdb.html",children:"CouchDB"}),", ",(0,o.jsx)(n.a,{href:"/replication-webrtc.html",children:"WebRTC"}),", ",(0,o.jsx)(n.a,{href:"/replication-firestore.html",children:"Firestore"})," and ",(0,o.jsx)(n.a,{href:"/replication-nats.html",children:"NATS"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"./files/icons/with-gradient/replication.svg",alt:"DenoKV replication",height:"60"})}),"\n",(0,o.jsx)(n.h2,{id:"using-the-denokv-rxstorage",children:"Using the DenoKV RxStorage"}),"\n",(0,o.jsxs)(n.p,{children:["To use the DenoKV RxStorage with RxDB, you import the ",(0,o.jsx)(n.code,{children:"getRxStorageDenoKV"})," function from the plugin and set it as storage when calling ",(0,o.jsx)(n.a,{href:"/rx-database.html#creation",children:"createRxDatabase"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"\nimport { createRxDatabase } from 'rxdb';\nimport { getRxStorageDenoKV } from 'rxdb/plugins/storage-denokv';\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageDenoKV({\n      /**\n       * Consistency level, either 'strong' or 'eventual'\n       * (Optional) default='strong'\n       */\n      consistencyLevel: 'strong',\n      /**\n       * Path which is used in the first argument of Deno.openKv(settings.openKvPath)\n       * (Optional) default=''\n       */\n      openKvPath: './foobar',\n      /**\n       * Some operations have to run in batches,\n       * you can test different batch sizes to improve performance.\n       * (Optional) default=100\n       */\n      batchSize: number\n    })\n});\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["On top of that ",(0,o.jsx)(n.a,{href:"/rx-database.html",children:"RxDatabase"})," you can then create your collections and run operations. Follow the ",(0,o.jsx)(n.a,{href:"/quickstart.html",children:"quickstart"})," to learn more about how to use RxDB."]}),"\n",(0,o.jsx)(n.h2,{id:"using-non-denokv-storages-in-deno",children:"Using non-DenoKV storages in Deno"}),"\n",(0,o.jsxs)(n.p,{children:["When you use other storages than the DenoKV storage inside of a Deno app, make sure you set ",(0,o.jsx)(n.code,{children:"multiInstance: false"})," when creating the database. Also you should only run one process per Deno-Deploy instance. This ensures your events are not mixed up by the ",(0,o.jsx)(n.a,{href:"https://docs.deno.com/deploy/api/runtime-broadcast-channel",children:"BroadcastChannel"})," across instances which would lead to wrong behavior."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"// DenoKV based database\nconst db = await createRxDatabase({\n  name: 'denokvdatabase',\n  storage: getRxStorageDenoKV(),\n  /**\n   * Use multiInstance: true so that the Deno Broadcast Channel\n   * emits event across DenoDeploy instances\n   * (true is also the default, so you can skip this setting)\n   */\n  multiInstance: true\n});\n\n// Non-DenoKV based database\nconst db = await createRxDatabase({\n  name: 'denokvdatabase',\n  storage: getRxStorageFilesystemNode(),\n  /**\n   * Use multiInstance: false so that it does not share events\n   * across instances because the stored data is anyway not shared\n   * between them.\n   */\n  multiInstance: false\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The DenoKV RxStorage is in currently in beta mode. There might be breaking changes without a major RxDB version release."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>r});var o=t(1504);const a={},s=o.createContext(a);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);