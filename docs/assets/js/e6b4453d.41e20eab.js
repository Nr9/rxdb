"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[7024],{4804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var c=n(7624),a=n(4552);const s={title:"Query Cache",slug:"query-cache.html"},r="QueryCache",i={id:"query-cache",title:"Query Cache",description:"RxDB uses a QueryCache which optimizes the reuse of queries at runtime. This makes sense especially when RxDB is used in UI-applications where people move for- and backwards on different routes or pages and the same queries are used many times. Because of the event-reduce algorithm cached queries are even valuable for optimization, when changes to the database occur between now and the last execution.",source:"@site/docs/query-cache.md",sourceDirName:".",slug:"/query-cache.html",permalink:"/query-cache.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Query Cache",slug:"query-cache.html"},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/middleware.html"},next:{title:"CRDT - Conflict-free replicated data type Database",permalink:"/crdt.html"}},o={},h=[{value:"Cache Replacement Policy",id:"cache-replacement-policy",level:2},{value:"The default policy",id:"the-default-policy",level:2},{value:"Other references to queries",id:"other-references-to-queries",level:2},{value:"Using a custom policy",id:"using-a-custom-policy",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"querycache",children:"QueryCache"}),"\n",(0,c.jsxs)(t.p,{children:["RxDB uses a ",(0,c.jsx)(t.code,{children:"QueryCache"})," which optimizes the reuse of queries at runtime. This makes sense especially when RxDB is used in UI-applications where people move for- and backwards on different routes or pages and the same queries are used many times. Because of the ",(0,c.jsx)(t.a,{href:"https://github.com/pubkey/event-reduce",children:"event-reduce algorithm"})," cached queries are even valuable for optimization, when changes to the database occur between now and the last execution."]}),"\n",(0,c.jsx)(t.h2,{id:"cache-replacement-policy",children:"Cache Replacement Policy"}),"\n",(0,c.jsxs)(t.p,{children:["To not let RxDB fill up all the memory, a ",(0,c.jsx)(t.code,{children:"cache replacement policy"})," is defined that clears up the cached queries. This is implemented as a function which runs regularly, depending on when queries are created and the database is idle. The default policy should be good enough for most use cases but defining custom ones can also make sense."]}),"\n",(0,c.jsx)(t.h2,{id:"the-default-policy",children:"The default policy"}),"\n",(0,c.jsx)(t.p,{children:"The default policy starts cleaning up queries depending on how much queries are in the cache and how much document data they contain."}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"It will never uncache queries that have subscribers to their results"}),"\n",(0,c.jsx)(t.li,{children:"It tries to always have less than 100 queries without subscriptions in the cache."}),"\n",(0,c.jsx)(t.li,{children:"It prefers to uncache queries that have never executed and are older then 30 seconds"}),"\n",(0,c.jsx)(t.li,{children:"It prefers to uncache queries that have not been used for longer time"}),"\n"]}),"\n",(0,c.jsx)(t.h2,{id:"other-references-to-queries",children:"Other references to queries"}),"\n",(0,c.jsxs)(t.p,{children:["With JavaScript, it is not possible to count references to variables. Therefore it might happen that an uncached ",(0,c.jsx)(t.code,{children:"RxQuery"})," is still referenced by the users code and used to get results. This should never be a problem, uncached queries must still work. Creating the same query again however, will result in having two ",(0,c.jsx)(t.code,{children:"RxQuery"})," instances instead of one."]}),"\n",(0,c.jsx)(t.h2,{id:"using-a-custom-policy",children:"Using a custom policy"}),"\n",(0,c.jsxs)(t.p,{children:["A cache replacement policy is a normal JavaScript function according to the type ",(0,c.jsx)(t.code,{children:"RxCacheReplacementPolicy"}),".\nIt gets the ",(0,c.jsx)(t.code,{children:"RxCollection"})," as first parameter and the ",(0,c.jsx)(t.code,{children:"QueryCache"})," as second. Then it iterates over the cached ",(0,c.jsx)(t.code,{children:"RxQuery"})," instances and uncaches the desired ones with ",(0,c.jsx)(t.code,{children:"uncacheRxQuery(rxQuery)"}),". When you create your custom policy, you should have a look at the ",(0,c.jsx)(t.a,{href:"https://github.com/pubkey/rxdb/blob/master/src/query-cache.ts",children:"default"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["To apply a custom policy to a ",(0,c.jsx)(t.code,{children:"RxCollection"}),", add the function as attribute ",(0,c.jsx)(t.code,{children:"cacheReplacementPolicy"}),"."]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",children:"const collection = await myDatabase.addCollections({\n    humans: {\n        schema: mySchema,\n        cacheReplacementPolicy: function(){ /* ... */ }\n    }\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>r});var c=n(1504);const a={},s=c.createContext(a);function r(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);