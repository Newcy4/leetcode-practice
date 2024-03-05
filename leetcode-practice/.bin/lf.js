#! /usr/bin/env node
import{program as y}from"commander";var w=`
A powerful practice platform for leetcode.
CLI / Template Project / Plugin, you can create question by any way you like.
See https://github.com/wh131462/leetcode-practice
`;var v=`   __           _                _          ___                _   _          
  / /  ___  ___| |_ ___ ___   __| | ___    / _ \\_ __ __ _  ___| |_(_) ___ ___ 
 / /  / _ \\/ _ \\ __/ __/ _ \\ / _\` |/ _ \\  / /_)/ '__/ _\` |/ __| __| |/ __/ _ \\
/ /__|  __/  __/ || (_| (_) | (_| |  __/ / ___/| | | (_| | (__| |_| | (_|  __/
\\____/\\___|\\___|\\__\\___\\___/ \\__,_|\\___| \\/    |_|  \\__,_|\\___|\\__|_|\\___\\___|
                                                                              `;var k="\u2615\uFE0F Enjoy your time on coding.";var $=`
Examples:
  # Command with no parameters

  # Exclusive commands

  # Other instructions
  $ lf -e       // Easy mode to check a question.
  $ lf -d src   // Use the relative path to the source folder.
  $ lf -l       // Get the code language of question.
  $ lf -l java  // Set the code language of question.
  $ lf -u       // Check the version to determine whether to update to the latest one.
  $ lf -v       // Check the CLI version.
  $ lf -h       // Display the help information.
  
`;var S="Made with \u2764\uFE0F by EternalHeart team.";import b from"https";import{fileURLToPath as R}from"url";import{dirname as A}from"path";var T=R(import.meta.url),q=A(T);import h from"path";var c=h.dirname(h.dirname(h.dirname(q)));import B from"fs";import M from"path";var H="https://registry.npmjs.org/leetcode-practice",K="https://raw.githubusercontent.com/wh131462/leetcode-practice/master/package.json",z=()=>new Promise((e,o)=>{console.log("\u5F00\u59CB\u83B7\u53D6npm\u4ED3\u5E93\u4E2D\u7684\u7248\u672C\u53F7..."),b.get(H,t=>{let s="";t.on("data",n=>{s+=n}),t.on("end",()=>{try{let r=JSON.parse(s)["dist-tags"].latest;console.log("npm\u4ED3\u5E93\u4E2D\u7684\u7248\u672C\u53F7\u83B7\u53D6\u6210\u529F!"),e(r)}catch(n){console.log("npm\u4ED3\u5E93\u4E2D\u7684\u7248\u672C\u53F7\u83B7\u53D6\u5931\u8D25!"),o(n)}})}).on("error",t=>{console.log("npm\u4ED3\u5E93\u4E2D\u7684\u7248\u672C\u53F7\u83B7\u53D6\u5931\u8D25!"),o(t)})}),_=()=>new Promise((e,o)=>{console.log("\u5F00\u59CB\u83B7\u53D6github\u4ED3\u5E93\u7684\u7248\u672C\u53F7..."),b.get(K,t=>{let s="";t.on("data",n=>{s+=n}),t.on("end",()=>{try{let n=JSON.parse(s);console.log("github\u4ED3\u5E93\u7684\u7248\u672C\u53F7\u83B7\u53D6\u6210\u529F!"),e(n.version)}catch(n){console.log("github\u4ED3\u5E93\u7684\u7248\u672C\u53F7\u83B7\u53D6\u5931\u8D25!"),o(n)}})}).on("error",t=>{console.log("github\u4ED3\u5E93\u7684\u7248\u672C\u53F7\u83B7\u53D6\u5931\u8D25!"),o(t)})}),W=()=>{console.log("\u5F00\u59CB\u83B7\u53D6\u672C\u5730\u7248\u672C\u53F7...");try{let{version:e}=JSON.parse(B.readFileSync(M.resolve(c,"package.json"),"utf-8"));return console.log("\u672C\u5730\u7248\u672C\u53F7\u83B7\u53D6\u6210\u529F!"),e}catch{return console.log("\u672C\u5730\u7248\u672C\u53F7\u83B7\u53D6\u5931\u8D25!"),!1}},j=async()=>{let e=await z(),o=await _(),t=W();return{localVersion:t,npmVersion:e,githubVersion:o,isCliUpdate:e!==t,isGithubUpdate:o!==t}};import U from"inquirer";var C=()=>{let e=import.meta.url;return/etc\/checkEnv.js$/mi.test(e)?"project":"cli"};import{exec as E}from"child_process";import X from"inquirer";import Y from"https";import f from"fs";var L=async e=>{switch(e){case"cli":return await Z();case"project":return await ee();default:throw new Error(`Unsupported environment: ${e}`)}},Z=()=>new Promise((e,o)=>{E("npm install -g leetcode-practice",(t,s,n)=>{t?o(t):e()})}),ee=async()=>{async function e(o){return new Promise((t,s)=>{E(o,(n,r,a)=>{n?s(n):t(r.trim())})})}try{let o=await _(),{hasChanges:t}=await X.prompt([{type:"confirm",name:"hasChanges",message:"\u662F\u5426\u5B58\u5728\u81EA\u5DF1\u4FEE\u6539\u8FC7\u7684\u5185\u5BB9\uFF1F",default:!1}]);if(t){console.log("\u60A8\u6709\u672A\u63D0\u4EA4\u7684\u66F4\u6539\uFF0C\u8BF7\u5148\u5904\u7406\u540E\u518D\u66F4\u65B0\u3002");return}if(await e("git status --porcelain")){console.log("\u60A8\u6709\u672A\u63D0\u4EA4\u7684\u66F4\u6539\uFF0C\u8BF7\u5148\u63D0\u4EA4\u540E\u518D\u66F4\u65B0\u3002");return}let r=(await Y.get("https://raw.githubusercontent.com/wh131462/leetcode-practice")).data;for(let i in r)f.writeFileSync(i,r[i]),await e(`git add ${i}`);let a=JSON.parse(f.readFileSync("package.json","utf-8"));a.version=`${o}`,f.writeFileSync("package.json",JSON.stringify(a,null,2)),await e(`git commit -m "update:${o}"`),console.log("\u9879\u76EE\u66F4\u65B0\u5B8C\u6210\u3002")}catch(o){console.error("\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u9519\u8BEF:",o)}};var V=async()=>{let e=C(),o={type:"list",name:"choseEnv",message:`\u81EA\u52A8\u68C0\u6D4B\u5230\u7684\u73AF\u5883\u4E3A[ ${e} ],\u5982\u679C\u4E0D\u662F,\u8BF7\u8FDB\u884C\u9009\u62E9,\u5982\u662F,\u8BF7\u6309\u4E0B\u56DE\u8F66\u786E\u8BA4.`,choices:["cli","project"],default:e},{choseEnv:t}=await U.prompt(o,null),{localVersion:s,npmVersion:n,githubVersion:r,isCliUpdate:a,isGithubUpdate:i}=await j();console.log(`\u5F53\u524D\u7248\u672C:[ ${s} ] npm\u5305\u6700\u65B0\u7248\u672C:[ ${n} ] github\u7248\u672C:[ ${r} ]`);let u=!1,g="\u672A\u77E5";switch(t){case"project":u=i,g=r;break;case"cli":u=a,g=remoteVersion;break;default:console.log("\u672A\u77E5\u73AF\u5883:",t),process.exit(0);break}if(u){let Q={type:"confirm",name:"willUpdate",message:`\u68C0\u6D4B\u5230[ ${e} ]\u53EF\u66F4\u65B0\u7248\u672C[ ${g} ],\u662F\u5426\u8FDB\u884C\u66F4\u65B0?`},{willUpdate:J}=await U.prompt(Q,null);if(J){console.log("\u5F00\u59CB\u66F4\u65B0...");let le=await L(e);console.log("\u66F4\u65B0\u5B8C\u6210~\u795D\u4F60\u4F7F\u7528\u6109\u5FEB~")}else console.log("\u4F60\u9009\u62E9\u8DF3\u8FC7\u6B64\u6B21\u66F4\u65B0,\u5982\u679C\u60F3\u8981\u8FDB\u884C\u66F4\u65B0,\u968F\u65F6\u53EF\u4EE5\u4F7F\u7528\u53C2\u6570 -u \u8FDB\u884C\u66F4\u65B0\u68C0\u6D4B!\u795D\u4F60\u4F7F\u7528\u6109\u5FEB~");process.exit(0)}else console.log("\u5F53\u524D\u5DF2\u662F\u6700\u65B0\u7248\u672C!\u795D\u4F60\u4F7F\u7528\u6109\u5FEB~"),process.exit(0)};import oe from"realm";import O from"realm";var l=class extends O.Object{static schema={name:"Question",properties:{_id:{type:"objectId",default:()=>new O.BSON.ObjectId},id:"string",mode:"string",slug:"string",title:"string",detail:"string",lang:"string",code:"string",url:"string?",date:"string?",timestamp:{type:"date",default:()=>new Date}},primaryKey:"_id"}};import ne from"path";import te from"realm";var p=class extends te.Object{static schema={name:"Store",properties:{key:"string",value:"string",timestamp:{type:"date",default:()=>new Date}},primaryKey:"key"}};var se=ne.resolve(c,"resources/stores/store.realm"),re=async()=>await oe.open({schema:[l,p],path:se}),x=async e=>{let o=await re(),t=await e(o);return o.close(),t};import{UpdateMode as ae}from"realm";var G=(e,o)=>x(t=>{let s;return t.write(()=>{s=t.create("Store",{key:e,value:o},ae.Modified)}),s.toJSON()}),I=e=>x(o=>o.objects("Store").filtered("key=$0",e)?.[0]?.toJSON()?.value);var m="javascript";var P=async e=>{await G("language",e)},D=async()=>await I("language")??m;var F=[{id:0,name:"cpp",extension:".cpp"},{id:1,name:"java",extension:".java"},{id:2,name:"python",extension:".py"},{id:11,name:"python3",extension:".py"},{id:3,name:"mysql",extension:".sql"},{id:14,name:"mssql",extension:".sql"},{id:15,name:"oraclesql",extension:".sql"},{id:4,name:"c",extension:".c"},{id:5,name:"csharp",extension:".cs"},{id:6,name:"javascript",extension:".js"},{id:20,name:"typescript",extension:".ts"},{id:8,name:"bash",extension:".sh"},{id:19,name:"php",extension:".php"},{id:9,name:"swift",extension:".swift"},{id:13,name:"kotlin",extension:".kt"},{id:24,name:"dart",extension:".dart"},{id:10,name:"golang",extension:".go"},{id:7,name:"ruby",extension:".rb"},{id:12,name:"scala",extension:".scala"},{id:16,name:"html",extension:".html"},{id:17,name:"pythonml",extension:".py"},{id:18,name:"rust",extension:".rs"},{id:21,name:"racket",extension:".rkt"},{id:22,name:"erlang",extension:".erl"},{id:23,name:"elixir",extension:".ex"},{id:25,name:"pythondata",extension:".py"},{id:26,name:"react",extension:".jsx"},{id:27,name:"vanillajs",extension:".js"},{id:28,name:"postgresql",extension:".sql"}];import ie from"inquirer";var N=async(e=m)=>{let t=[{type:"list",name:"newSet",message:"\u8BF7\u786E\u8BA4\u4F60\u8981\u8BBE\u7F6ECLI\u7684\u8BED\u8A00\u73AF\u5883(\u5982\u679C\u9009\u9879\u5339\u914D\u6210\u529F\uFF0C\u90A3\u4E48\u6309\u4E0B\u56DE\u8F66\u786E\u8BA4\u5373\u53EF)",choices:F.map(n=>n.name),default:e}],{newSet:s}=await ie.prompt(t,null);console.log("\u8BBE\u7F6E\u8BED\u8A00\u73AF\u5883\u4E3A:",s),await P(s),process.exit(0)};var ce="1.0.3";y.version(ce).description(`${w}
${v}
${k}`).addHelpText("after",$+S).option("-l, --language [language]","Set/Get the code language of question.").option("-u, --update","Check the version to determine whether to update to the latest one.").parse(process.argv);var Gt=y.args,d=y.opts();if(d.language){if(d.language!==!0)await N(d.language);else{let e=await D();console.log("\u5F53\u524DCLI\u8BED\u8A00\u73AF\u5883\u4E3A:"+e)}process.exit(0)}d.update&&(await V(),process.exit(0));