"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[5490],{4008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(7624),s=t(4552);const i={title:"RxDB 9.0.0",slug:"9.0.0.html",description:"RxDB Major Release 9.0.0"},o="9.0.0",r={id:"releases/9.0.0",title:"RxDB 9.0.0",description:"RxDB Major Release 9.0.0",source:"@site/docs/releases/9.0.0.md",sourceDirName:"releases",slug:"/releases/9.0.0.html",permalink:"/releases/9.0.0.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"RxDB 9.0.0",slug:"9.0.0.html",description:"RxDB Major Release 9.0.0"},sidebar:"tutorialSidebar",previous:{title:"RxDB 10.0.0",permalink:"/releases/10.0.0.html"},next:{title:"RxDB 8.0.0",permalink:"/releases/8.0.0.html"}},d={},l=[{value:"Breaking changes",id:"breaking-changes",level:2},{value:"All default exports have been removed",id:"all-default-exports-have-been-removed",level:3},{value:"Indexes are specified at the top level of the schema definition",id:"indexes-are-specified-at-the-top-level-of-the-schema-definition",level:3},{value:"Encrypted fields at the top level of the schema",id:"encrypted-fields-at-the-top-level-of-the-schema",level:3},{value:"New dev-mode plugin",id:"new-dev-mode-plugin",level:3},{value:"New migration plugin",id:"new-migration-plugin",level:3},{value:"Rewritten key-compression",id:"rewritten-key-compression",level:3},{value:"Rewritten query-change-detection to event-reduce",id:"rewritten-query-change-detection-to-event-reduce",level:3},{value:"find() and findOne() now accepts the full mango query",id:"find-and-findone-now-accepts-the-full-mango-query",level:3},{value:"moved query builder to own plugin",id:"moved-query-builder-to-own-plugin",level:3},{value:"Refactored RxChangeEvent",id:"refactored-rxchangeevent",level:3},{value:"Internal hash() is now using a salt",id:"internal-hash-is-now-using-a-salt",level:3},{value:"Changed default of RxDocument.toJSON()",id:"changed-default-of-rxdocumenttojson",level:3},{value:"Typescript 3.8.0 or newer is required",id:"typescript-380-or-newer-is-required",level:3},{value:"GraphQL replication will run a schema validation of incoming data",id:"graphql-replication-will-run-a-schema-validation-of-incoming-data",level:3},{value:"Internal and other changes",id:"internal-and-other-changes",level:2},{value:"Help wanted",id:"help-wanted",level:2},{value:"Refactor data-migrator",id:"refactor-data-migrator",level:3},{value:"Add e2e tests to the react example",id:"add-e2e-tests-to-the-react-example",level:3},{value:"Fix pouchdb bug so we can upgrade pouchdb-find",id:"fix-pouchdb-bug-so-we-can-upgrade-pouchdb-find",level:3},{value:"About the future of RxDB",id:"about-the-future-of-rxdb",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"900",children:"9.0.0"}),"\n",(0,a.jsx)(n.p,{children:"So I was working hard the past month to prepare everything for the next major release of RxDB. The last major release was 1,5 years ago by the way."}),"\n",(0,a.jsxs)(n.p,{children:["When I started ",(0,a.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/issues/1636",children:"listing up the planned changes"})," I had big ambitions about basically rewriting everything. But I found out this time has not come yet. There is some work to be done first. So version ",(0,a.jsx)(n.code,{children:"9.0.0"})," was more about fixing all these small things that made improving the codebase difficult. Much has been refactored and moved. Some API-parts have been changed to have a more simple project with a cleaner codebase."]}),"\n",(0,a.jsx)(n.p,{children:"Notice that I use major releases to bundle stuff that breaks the RxDB usage in your project. By having only few major releases you can be sure that you can upgrade in one big block instead of changing stuff each few months. Big features are released in non-major releases because they mostly can be implemented without side effects."}),"\n",(0,a.jsx)(n.h2,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,a.jsx)(n.p,{children:"You have to apply these changes to your codebase when upgrading RxDB."}),"\n",(0,a.jsx)(n.h3,{id:"all-default-exports-have-been-removed",children:"All default exports have been removed"}),"\n",(0,a.jsx)(n.p,{children:"Using default exports and imports can be helpful when you want to write code fast.\nBut using them also disabled the tree-shaking of your bundler which means you added much code to your bundle that was not even used. To prevent this common behavior, I removed all default exports and renamed functions so that they are more unlikely to clash with other non-RxDB function names."}),"\n",(0,a.jsx)(n.p,{children:"Instead of doing"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import RxDB from 'rxdb';\nRxDB.plugin(/* ... */);\nawait RxDB.create({/* ... */});\n"})}),"\n",(0,a.jsx)(n.p,{children:"You now do"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { createRxDatabase, addRxPlugin } from 'rxdb';\naddRxPlugin(/* ... */);\nawait createRxDatabase({/* ... */});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Also ",(0,a.jsx)(n.code,{children:"removeDatabase()"})," is renamed to ",(0,a.jsx)(n.code,{children:"removeRxDatabase()"})," and ",(0,a.jsx)(n.code,{children:"plugin()"})," is now ",(0,a.jsx)(n.code,{children:"addRxPlugin()"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Same goes for all previous default exports of the plugins."}),"\n",(0,a.jsx)(n.h3,{id:"indexes-are-specified-at-the-top-level-of-the-schema-definition",children:"Indexes are specified at the top level of the schema definition"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/issues/1655",children:"related issue"})}),"\n",(0,a.jsx)(n.p,{children:"In the past the indexes of a collection had to be specified at the field level of the schema like"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "firstName": {\n        "type": "string",\n        "index": true\n    }    \n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"This made it complex to list up the index fields which had a bad performance on startup.\nTo fix this the indexes are now specified at the top level of the schema like"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "title": "my schema",\n    "version": 0,\n    "type": "object",\n    "properties": {},\n    "indexes": [\n        "firstName",\n        ["compound", "index"]\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"encrypted-fields-at-the-top-level-of-the-schema",children:"Encrypted fields at the top level of the schema"}),"\n",(0,a.jsx)(n.p,{children:"Same as the indexes, encrypted fields are now also defined in the top level like"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "title": "my schema",\n    "version": 0,\n    "type": "object",\n    "properties": {},\n    "encrypted": [\n        "password"\n    ]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"new-dev-mode-plugin",children:"New dev-mode plugin"}),"\n",(0,a.jsxs)(n.p,{children:["In the past we had stuff that is only wanted for development in the two plugins ",(0,a.jsx)(n.code,{children:"error-messages"})," and ",(0,a.jsx)(n.code,{children:"schema-check"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Now we have a single plugin ",(0,a.jsx)(n.code,{children:"dev-mode"})," that contains all these checks and development helper functions. I also moved many other checks out of the core-module into dev-mode."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';\naddRxPlugin(RxDBDevModePlugin);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"new-migration-plugin",children:"New migration plugin"}),"\n",(0,a.jsx)(n.p,{children:"The data migration was not used by all users of this project. Often it was easier to just wipe the local data store and let the client sync everything from the server. Because the migration has so much code, it is now in a separate plugin so that you do not have to ship this code to the clients if not necessary."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { RxDBMigrationPlugin } from 'rxdb/plugins/migration';\naddRxPlugin(RxDBMigrationPlugin);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"rewritten-key-compression",children:"Rewritten key-compression"}),"\n",(0,a.jsx)(n.p,{children:"The key-compression logic was fully coded only for RxDB. This was a problem because it was not usable for other stuff and also badly tested. We had a known problem with nested arrays that caused much confusion because some queries did not find the correct documents."}),"\n",(0,a.jsxs)(n.p,{children:["I now created a npm-package ",(0,a.jsx)(n.a,{href:"https://github.com/pubkey/jsonschema-key-compression",children:"jsonschema-key-compression"})," that has cleaner code, better tests and can also be used for non-RxDB stuff."]}),"\n",(0,a.jsx)(n.p,{children:"If you used the key-compression in the past and have clients out there with old data, you have to find a way to migrate that data by using the json-import or other solutions depending on your project."}),"\n",(0,a.jsx)(n.h3,{id:"rewritten-query-change-detection-to-event-reduce",children:"Rewritten query-change-detection to event-reduce"}),"\n",(0,a.jsxs)(n.p,{children:["One big benefit of having a realtime database is that big performance optimizations can be done when the database knows a query is observed and the updated results are needed continuously. In the past this optimization was done by the internal ",(0,a.jsx)(n.code,{children:"queryChangeDetection"})," which was a big tree of if-else-statements that hopefully worked. This was also the reason why queryChangeDetection was in beta mode and not enabled by default."]}),"\n",(0,a.jsxs)(n.p,{children:["After months of research and testing I was able to create ",(0,a.jsx)(n.a,{href:"https://github.com/pubkey/event-reduce",children:"Event-Reduce: An algorithm to optimize database queries that run multiple times"}),". This JavaScript module contains an algorithm that is able to optimize realtime queries in a way that was not possible before. The algorithm is not RxDB specific and also heavily tested."]}),"\n",(0,a.jsxs)(n.p,{children:["Instead of setting ",(0,a.jsx)(n.code,{children:"queryChangeDetection"})," when creating a ",(0,a.jsx)(n.code,{children:"RxDatabase"}),", you now set ",(0,a.jsx)(n.code,{children:"eventReduce"})," which defaults to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"find-and-findone-now-accepts-the-full-mango-query",children:"find() and findOne() now accepts the full mango query"}),"\n",(0,a.jsxs)(n.p,{children:["In the past, only the selector of a query could be passed to ",(0,a.jsx)(n.code,{children:"find()"})," and ",(0,a.jsx)(n.code,{children:"findOne()"})," if you wanted to also do ",(0,a.jsx)(n.code,{children:"sort"}),", ",(0,a.jsx)(n.code,{children:"skip"})," or ",(0,a.jsx)(n.code,{children:"limit"}),", you had to call additional functions like"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const query = myRxCollection.find({\n    age: {\n        $gt: 10\n    }\n}).sort('name').skip(5).limit(10);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now you can pass the full query to the function call like"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const query = myRxCollection.find({\n    selector: {\n        age: {\n            $gt: 10\n        }\n    },\n    sort: [{name: 'asc'}],\n    skip: 5,\n    limit: 10\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"moved-query-builder-to-own-plugin",children:"moved query builder to own plugin"}),"\n",(0,a.jsxs)(n.p,{children:["The query builder that allowed to create queries like ",(0,a.jsx)(n.code,{children:".where('foo').eq('bar')"})," etc. was not really used by many people. Most of the time it is better to just pass the full query as simple json object. Also the code for the query builder was big and increased the build size much more then its value added. Only some edge-cases where recursive query modification was needed made the query builder useful. If you still want to use the query builder, you have to import the plugin."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder';\naddRxPlugin(RxDBQueryBuilderPlugin);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"refactored-rxchangeevent",children:"Refactored RxChangeEvent"}),"\n",(0,a.jsxs)(n.p,{children:["The whole data structure of ",(0,a.jsx)(n.code,{children:"RxChangeEvent"})," was way more complicated than it had to be. I refactored the whole class to be more simple. If you directly use ",(0,a.jsx)(n.code,{children:"RxChangeEvent"})," in your project you have to adapt to these changes. Also the stream of ",(0,a.jsx)(n.code,{children:"RxDatabase().$"})," will no longer emit the ",(0,a.jsx)(n.code,{children:"COLLECTION"})," event when a new collection is created."]}),"\n",(0,a.jsx)(n.h3,{id:"internal-hash-is-now-using-a-salt",children:"Internal hash() is now using a salt"}),"\n",(0,a.jsxs)(n.p,{children:["The internal hash function was used to store hashes of database passwords to compare them and directly throw errors when the wrong password was used with an existing data set. This was dangerous because you could use rainbow tables or even ",(0,a.jsx)(n.a,{href:"https://www.google.com/search?q=e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4",children:"just google"})," the hash to find out the plain password. So now the internal hashing is using a salt to prevent these attacks. If you have used the encryption in the past, you have to migrate your internal schema storage."]}),"\n",(0,a.jsx)(n.h3,{id:"changed-default-of-rxdocumenttojson",children:"Changed default of RxDocument.toJSON()"}),"\n",(0,a.jsxs)(n.p,{children:["By default ",(0,a.jsx)(n.code,{children:"RxDocument.toJSON()"})," always returned also the ",(0,a.jsx)(n.code,{children:"_rev"})," field and the ",(0,a.jsx)(n.code,{children:"_attachments"}),". This was confusing behavior which is why I changed the default to ",(0,a.jsx)(n.code,{children:"RxDocument().toJSON(withRevAndAttachments = false)"})]}),"\n",(0,a.jsx)(n.h3,{id:"typescript-380-or-newer-is-required",children:"Typescript 3.8.0 or newer is required"}),"\n",(0,a.jsxs)(n.p,{children:["Because RxDB and some subdependencies extensively use ",(0,a.jsx)(n.code,{children:"export type ..."})," you now need typescript ",(0,a.jsx)(n.code,{children:"3.8.0"})," or newer."]}),"\n",(0,a.jsx)(n.h3,{id:"graphql-replication-will-run-a-schema-validation-of-incoming-data",children:"GraphQL replication will run a schema validation of incoming data"}),"\n",(0,a.jsx)(n.p,{children:"In dev-mode, the GraphQL-replication will run a schema validation of each document that comes from the server before it is saved to the database."}),"\n",(0,a.jsx)(n.h2,{id:"internal-and-other-changes",children:"Internal and other changes"}),"\n",(0,a.jsx)(n.p,{children:"I refactored much internal stuff and moved much code out of the core into the specific plugins."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Renamed ",(0,a.jsx)(n.code,{children:"RxSchema.jsonID"})," to ",(0,a.jsx)(n.code,{children:"RxSchema.jsonSchema"})]}),"\n",(0,a.jsx)(n.li,{children:"Moved remaining stuff of leader-election from core into the plugin"}),"\n",(0,a.jsxs)(n.li,{children:["Merged multiple internal databases for metadata into one ",(0,a.jsx)(n.code,{children:"internalStore"})]}),"\n",(0,a.jsx)(n.li,{children:"Removed many runtime type checks that now should be covered by typescript in buildtime"}),"\n",(0,a.jsx)(n.li,{children:"The GraphQL replication is now out of beta mode"}),"\n",(0,a.jsxs)(n.li,{children:["Removed documentation examples for ",(0,a.jsx)(n.code,{children:"require()"})," CommonJS loading"]}),"\n",(0,a.jsxs)(n.li,{children:["Removed ",(0,a.jsx)(n.code,{children:"RxCollection.docChanges$()"})," because all events are from the docs"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"help-wanted",children:"Help wanted"}),"\n",(0,a.jsx)(n.p,{children:"RxDB is an open source project an heavily relies on the contribution of its users. There are some things that must be done, but I have no time for them."}),"\n",(0,a.jsx)(n.h3,{id:"refactor-data-migrator",children:"Refactor data-migrator"}),"\n",(0,a.jsx)(n.p,{children:"The current implementation has some flaws and should be completely rewritten."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"It does not use pouchdb's bulkDocs which is much faster"}),"\n",(0,a.jsx)(n.li,{children:"It could have been written without rxjs and with less code that is easier to understand"}),"\n",(0,a.jsx)(n.li,{children:"It does not migrate the revisions of documents which causes a problem when replication is used"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"add-e2e-tests-to-the-react-example",children:"Add e2e tests to the react example"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples/react",children:"react example"})," has no end-to-end tests which is why the CI does not ensure that it works all the time. We should add some basic tests like we did for the other example projects."]}),"\n",(0,a.jsx)(n.h3,{id:"fix-pouchdb-bug-so-we-can-upgrade-pouchdb-find",children:"Fix pouchdb bug so we can upgrade pouchdb-find"}),"\n",(0,a.jsxs)(n.p,{children:["There is a ",(0,a.jsx)(n.a,{href:"https://github.com/pouchdb/pouchdb/issues/7810",children:"bug in pouchdb"})," that prevents the upgrade of ",(0,a.jsx)(n.code,{children:"pouchdb-find"}),". This is why RxDB relies on an old version of ",(0,a.jsx)(n.code,{children:"pouchdb-find"})," that also requires different sub-dependencies. This increases the build size a lot because for example we ship multiple version of ",(0,a.jsx)(n.code,{children:"spark-md5"})," and others."]}),"\n",(0,a.jsx)(n.h2,{id:"about-the-future-of-rxdb",children:"About the future of RxDB"}),"\n",(0,a.jsxs)(n.p,{children:["At the moment RxDB is a realtime database based on pouchdb. In the future I want RxDB to be a wrapper around pull-based databases that also works with other source-dbs like mongoDB or PostgreSQL. As a start I defined the ",(0,a.jsx)(n.code,{children:"RxStorage"})," interface and created a ",(0,a.jsx)(n.code,{children:"RxStoragePouchdb"})," class that implements it and contains all pouchdb-specific logic. I want to move every direct storage usage into that interface so that later we can create other implementations of it for other source databases."]})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var a=t(1504);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);