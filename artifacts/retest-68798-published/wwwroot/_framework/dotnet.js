//! Licensed to the .NET Foundation under one or more agreements.
//! The .NET Foundation licenses this file to you under the MIT license.

const e=()=>(async()=>{try{return new WebAssembly.Module(Uint8Array.from(atob("AGFzbQEAAAABBAFgAAADAgEAChABDgACaR9AAQMAAAsACxoL"),e=>e.codePointAt(0))),!0}catch(e){return!1}})(),o=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,15,1,13,0,65,1,253,15,65,2,253,15,253,128,2,11])),t=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11])),n=Symbol.for("wasm promise_control");function r(e,o){let t=null;const r=new Promise(function(n,r){t={isDone:!1,promise:null,resolve:o=>{t.isDone||(t.isDone=!0,n(o),e&&e())},reject:e=>{t.isDone||(t.isDone=!0,r(e),o&&o())}}});t.promise=r;const s=r;return s[n]=t,{promise:s,promise_control:t}}function s(e){return e[n]}function i(e){e&&function(e){return void 0!==e[n]}(e)||We(!1,"Promise is not controllable")}const a="__mono_message__",l=["debug","log","trace","warn","info","error"],c="MONO_WASM: ";let d,u,f,m,g,p;function h(e){m=e}function b(e){if(ke.diagnosticTracing){const o="function"==typeof e?e():e;console.debug(c+o)}}function w(e,...o){console.info(c+e,...o)}function y(e,...o){console.info(e,...o)}function v(e,...o){console.warn(c+e,...o)}function _(e,...o){if(o&&o.length>0&&o[0]&&"object"==typeof o[0]){if(o[0].silent)return;if(o[0].toString)return void console.error(c+e,o[0].toString())}console.error(c+e,...o)}function A(e,o,t){return function(...n){try{let r=n[0];if(void 0===r)r="undefined";else if(null===r)r="null";else if("function"==typeof r)r=r.toString();else if("string"!=typeof r)try{r=JSON.stringify(r)}catch(e){r=r.toString()}o(t?JSON.stringify({method:e,payload:r,arguments:n.slice(1)}):[e+r,...n.slice(1)])}catch(e){f.error(`proxyConsole failed: ${e}`)}}}function x(e,o,t){u=o,m=e,f={...o};const n=`${t}/console`.replace("https://","wss://").replace("http://","ws://");d=new WebSocket(n),d.addEventListener("error",E),d.addEventListener("close",j),function(){for(const e of l)u[e]=A(`console.${e}`,R,!0)}()}function T(e){let o=30;const t=()=>{d?0==d.bufferedAmount||0==o?(e&&y(e),function(){for(const e of l)u[e]=A(`console.${e}`,f.log,!1)}(),d.removeEventListener("error",E),d.removeEventListener("close",j),d.close(1e3,e),d=void 0):(o--,globalThis.setTimeout(t,100)):e&&f&&f.log(e)};t()}function R(e){d&&d.readyState===WebSocket.OPEN?d.send(e):f.log(e)}function E(e){f.error(`[${m}] proxy console websocket error: ${e}`,e)}function j(e){f.debug(`[${m}] proxy console websocket closed: ${e}`,e)}function D(){ke.preferredIcuAsset=C(ke.config);let e="invariant"==ke.config.globalizationMode;if(!e)if(ke.preferredIcuAsset)ke.diagnosticTracing&&b("ICU data archive(s) available, disabling invariant mode");else{if("custom"===ke.config.globalizationMode||"all"===ke.config.globalizationMode||"sharded"===ke.config.globalizationMode){const e="invariant globalization mode is inactive and no ICU data archives are available";throw _(`ERROR: ${e}`),new Error(e)}ke.diagnosticTracing&&b("ICU data archive(s) not available, using invariant globalization mode"),e=!0,ke.preferredIcuAsset=null}const o="DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",t=ke.config.environmentVariables;if(void 0===t[o]&&e&&(t[o]="1"),void 0===t.TZ)try{const e=Intl.DateTimeFormat().resolvedOptions().timeZone||null;e&&(t.TZ=e)}catch(e){w("failed to detect timezone, will fallback to UTC")}}function C(e){var o;if((null===(o=e.resources)||void 0===o?void 0:o.icu)&&"invariant"!=e.globalizationMode){const o=e.applicationCulture||(Me?globalThis.navigator&&globalThis.navigator.languages&&globalThis.navigator.languages[0]:Intl.DateTimeFormat().resolvedOptions().locale);e.applicationCulture||(e.applicationCulture=o);const t=e.resources.icu;let n=null;if("custom"===e.globalizationMode){if(t.length>=1)return t[0].name}else o&&"all"!==e.globalizationMode?"sharded"===e.globalizationMode&&(n=function(e){const o=e.split("-")[0];return"en"===o||["fr","fr-FR","it","it-IT","de","de-DE","es","es-ES"].includes(e)?"icudt_EFIGS.dat":["zh","ko","ja"].includes(o)?"icudt_CJK.dat":"icudt_no_CJK.dat"}(o)):n="icudt.dat";if(n)for(let e=0;e<t.length;e++){const o=t[e];if(o.virtualPath===n)return o.name}}return e.globalizationMode="invariant",null}(new Date).valueOf();const M=class{constructor(e){this.url=e}toString(){return this.url}};async function S(e){if(Se&&"function"!=typeof globalThis.atob){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";globalThis.atob=o=>{const t=String(o).replace(/=+$/,"");let n="";for(let o=0,r=0,s=0;s<t.length;s++){const i=e.indexOf(t.charAt(s));-1!==i&&(r=o%4?64*r+i:i,o++%4&&(n+=String.fromCharCode(255&r>>(-2*o&6))))}return n}}if(Ee){const e=await import(/*! webpackIgnore: true */"process"),o=14;if(e.versions.node.split(".")[0]<o)throw new Error(`NodeJS at '${e.execPath}' has too low version '${e.versions.node}', please use at least ${o}.`)}const o=/*! webpackIgnore: true */import.meta.url,t=o.indexOf("?");var n;if(t>0&&(ke.modulesUniqueQuery=o.substring(t)),ke.scriptUrl=o.replace(/\\/g,"/").replace(/[?#].*/,""),ke.scriptDirectory=(n=ke.scriptUrl).slice(0,n.lastIndexOf("/"))+"/",ke.locateFile=e=>"URL"in globalThis&&globalThis.URL!==M?new URL(e,ke.scriptDirectory).toString():I(e)?e:ke.scriptDirectory+e,ke.fetch_like=U,ke.out=console.log,ke.err=console.error,ke.onDownloadResourceProgress=e.onDownloadResourceProgress,Me&&globalThis.navigator){const e=globalThis.navigator,o=e.userAgentData&&e.userAgentData.brands;o&&o.length>0?ke.isChromium=o.some(e=>"Google Chrome"===e.brand||"Microsoft Edge"===e.brand||"Chromium"===e.brand):e.userAgent&&(ke.isChromium=e.userAgent.includes("Chrome"),ke.isFirefox=e.userAgent.includes("Firefox"))}void 0===globalThis.URL&&(globalThis.URL=M)}async function U(e,o){try{const t="function"==typeof globalThis.fetch;if(Ee){const n=e.startsWith("file://");if(!n&&t)return globalThis.fetch(e,o||{credentials:"same-origin"});g||(p=await import(/*! webpackIgnore: true */"url"),g=await import(/*! webpackIgnore: true */"fs")),n&&(e=p.fileURLToPath(e));const r=await g.promises.readFile(e);return{ok:!0,headers:{length:0,get:()=>null},url:e,arrayBuffer:()=>r,json:()=>JSON.parse(r),text:()=>{throw new Error("NotImplementedException")}}}if(t)return globalThis.fetch(e,o||{credentials:"same-origin"});if("function"==typeof read)return{ok:!0,url:e,headers:{length:0,get:()=>null},arrayBuffer:()=>new Uint8Array(read(e,"binary")),json:()=>JSON.parse(read(e,"utf8")),text:()=>read(e,"utf8")}}catch(o){return{ok:!1,url:e,status:500,headers:{length:0,get:()=>null},statusText:"ERR28: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o},text:()=>{throw o}}}throw new Error("No fetch implementation available")}const P=/^[a-zA-Z][a-zA-Z\d+\-.]*?:\/\//,k=/[a-zA-Z]:[\\/]/;function I(e){return Ee||Se?e.startsWith("/")||e.startsWith("\\")||-1!==e.indexOf("///")||k.test(e):P.test(e)}let O,$=0;const L=[],N=[],z=new Map,F={"js-module-runtime":!0,"js-module-dotnet":!0,"js-module-native":!0,"js-module-diagnostics":!0},W={...F,"js-module-library-initializer":!0},V={...F,dotnetwasm:!0,heap:!0,manifest:!0},B={...W,manifest:!0},J={...W,dotnetwasm:!0},H={dotnetwasm:!0,symbols:!0},Q={...W,dotnetwasm:!0,symbols:!0},q={symbols:!0};function G(e){return!("icu"==e.behavior&&e.name!=ke.preferredIcuAsset)}function Z(e,o,t){null!=o||(o=[]),We(1==o.length,`Expect to have one ${t} asset in resources`);const n=o[0];return n.behavior=t,K(n),e.push(n),n}function K(e){V[e.behavior]&&z.set(e.behavior,e)}function X(e){We(V[e],`Unknown single asset behavior ${e}`);const o=z.get(e);if(o&&!o.resolvedUrl)if(o.resolvedUrl=ke.locateFile(o.name),F[o.behavior]){const e=me(o);e?("string"!=typeof e&&We(!1,"loadBootResource response for 'dotnetjs' type should be a URL string"),o.resolvedUrl=e):o.resolvedUrl=le(o.resolvedUrl,o.behavior)}else if("dotnetwasm"!==o.behavior)throw new Error(`Unknown single asset behavior ${e}`);return o}function Y(e){const o=X(e);return We(o,`Single asset for ${e} not found`),o}let ee=!1;async function oe(){if(!ee){ee=!0,ke.diagnosticTracing&&b("mono_download_assets");try{const e=[],o=[],t=(e,o)=>{!Q[e.behavior]&&G(e)&&ke.expected_instantiated_assets_count++,!J[e.behavior]&&G(e)&&(ke.expected_downloaded_assets_count++,o.push(se(e)))};for(const o of L)t(o,e);for(const e of N)t(e,o);ke.allDownloadsQueued.promise_control.resolve(),Promise.all([...e,...o]).then(()=>{ke.allDownloadsFinished.promise_control.resolve()}).catch(e=>{throw ke.err("Error in mono_download_assets: "+e),Xe(1,e),e}),await ke.runtimeModuleLoaded.promise;const n=async e=>{const o=await e;if(H[o.behavior])return"symbols"===o.behavior&&(await Pe.instantiate_symbols_asset(o),ge(o)),void++ke.actual_downloaded_assets_count;if(o.buffer){if(!Q[o.behavior]){o.buffer&&"object"==typeof o.buffer||We(!1,"asset buffer must be array-like or buffer-like or promise of these"),"string"!=typeof o.resolvedUrl&&We(!1,"resolvedUrl must be string");const e=o.resolvedUrl,t=await o.buffer,n=new Uint8Array(t);ge(o),await Pe.beforeOnRuntimeInitialized.promise,await Pe.afterInstantiateWasm.promise,Pe.instantiate_asset(o,e,n)}}else o.isOptional||We(!1,"Expected asset to have the downloaded buffer"),!J[o.behavior]&&G(o)&&ke.expected_downloaded_assets_count--,!Q[o.behavior]&&G(o)&&ke.expected_instantiated_assets_count--},r=[],s=[];for(const o of e)r.push(n(o));for(const e of o)s.push(n(e));Promise.all(r).then(()=>{Ce||Pe.coreAssetsInMemory.promise_control.resolve()}).catch(e=>{throw ke.err("Error in mono_download_assets: "+e),Xe(1,e),e}),Promise.all(s).then(async()=>{Ce||(await Pe.coreAssetsInMemory.promise,Pe.allAssetsInMemory.promise_control.resolve())}).catch(e=>{throw ke.err("Error in mono_download_assets: "+e),Xe(1,e),e})}catch(e){throw ke.err("Error in mono_download_assets: "+e),e}}}let te=!1;function ne(){if(te)return;te=!0;const e=ke.config,o=[];if(e.assets)for(const o of e.assets)"object"!=typeof o&&We(!1,`asset must be object, it was ${typeof o} : ${o}`),"string"!=typeof o.behavior&&We(!1,"asset behavior must be known string"),"string"!=typeof o.name&&We(!1,"asset name must be string"),o.resolvedUrl&&"string"!=typeof o.resolvedUrl&&We(!1,"asset resolvedUrl could be string"),o.hash&&"string"!=typeof o.hash&&We(!1,"asset resolvedUrl could be string"),o.pendingDownload&&"object"!=typeof o.pendingDownload&&We(!1,"asset pendingDownload could be object"),o.isCore?L.push(o):N.push(o),K(o);else if(e.resources){const t=e.resources;t.wasmNative||We(!1,"resources.wasmNative must be defined"),t.jsModuleNative||We(!1,"resources.jsModuleNative must be defined"),t.jsModuleRuntime||We(!1,"resources.jsModuleRuntime must be defined"),Z(N,t.wasmNative,"dotnetwasm"),Z(o,t.jsModuleNative,"js-module-native"),Z(o,t.jsModuleRuntime,"js-module-runtime"),t.jsModuleDiagnostics&&Z(o,t.jsModuleDiagnostics,"js-module-diagnostics");const n=(e,o,t)=>{const n=e;n.behavior=o,t?(n.isCore=!0,L.push(n)):N.push(n)};if(t.coreAssembly)for(let e=0;e<t.coreAssembly.length;e++)n(t.coreAssembly[e],"assembly",!0);if(t.assembly)for(let e=0;e<t.assembly.length;e++)n(t.assembly[e],"assembly",!t.coreAssembly);if(0!=e.debugLevel&&ke.isDebuggingSupported()){if(t.corePdb)for(let e=0;e<t.corePdb.length;e++)n(t.corePdb[e],"pdb",!0);if(t.pdb)for(let e=0;e<t.pdb.length;e++)n(t.pdb[e],"pdb",!t.corePdb)}if(e.loadAllSatelliteResources&&t.satelliteResources)for(const e in t.satelliteResources)for(let o=0;o<t.satelliteResources[e].length;o++){const r=t.satelliteResources[e][o];r.culture=e,n(r,"resource",!t.coreAssembly)}if(t.coreVfs)for(let e=0;e<t.coreVfs.length;e++)n(t.coreVfs[e],"vfs",!0);if(t.vfs)for(let e=0;e<t.vfs.length;e++)n(t.vfs[e],"vfs",!t.coreVfs);const r=C(e);if(r&&t.icu)for(let e=0;e<t.icu.length;e++){const o=t.icu[e];o.name===r&&n(o,"icu",!1)}if(t.wasmSymbols)for(let e=0;e<t.wasmSymbols.length;e++)n(t.wasmSymbols[e],"symbols",!1)}if(e.appsettings)for(let o=0;o<e.appsettings.length;o++){const t=e.appsettings[o],n=pe(t);"appsettings.json"!==n&&n!==`appsettings.${e.applicationEnvironment}.json`||N.push({name:t,behavior:"vfs",cache:"no-cache",useCredentials:!0})}e.assets=[...L,...N,...o]}async function re(e){const o=await se(e);return await o.pendingDownloadInternal.response,o.buffer}async function se(e){try{return await ie(e)}catch(o){if(!ke.enableDownloadRetry)throw o;if(Se||Ee)throw o;if(e.pendingDownload&&e.pendingDownloadInternal==e.pendingDownload)throw o;if(e.resolvedUrl&&-1!=e.resolvedUrl.indexOf("file://"))throw o;if(o&&404==o.status)throw o;e.pendingDownloadInternal=void 0,await ke.allDownloadsQueued.promise;try{return ke.diagnosticTracing&&b(`Retrying download '${e.name}'`),await ie(e)}catch(o){return e.pendingDownloadInternal=void 0,await new Promise(e=>globalThis.setTimeout(e,100)),ke.diagnosticTracing&&b(`Retrying download (2) '${e.name}' after delay`),await ie(e)}}}async function ie(e){for(;O;)await O.promise;try{++$,$==ke.maxParallelDownloads&&(ke.diagnosticTracing&&b("Throttling further parallel downloads"),O=r());const o=await async function(e){if(e.pendingDownload&&(e.pendingDownloadInternal=e.pendingDownload),e.pendingDownloadInternal&&e.pendingDownloadInternal.response)return e.pendingDownloadInternal.response;if(e.buffer){const o=await e.buffer;return e.resolvedUrl||(e.resolvedUrl="undefined://"+e.name),e.pendingDownloadInternal={url:e.resolvedUrl,name:e.name,response:Promise.resolve({ok:!0,arrayBuffer:()=>o,json:()=>JSON.parse(new TextDecoder("utf-8").decode(o)),text:()=>new TextDecoder("utf-8").decode(o),headers:{get:()=>{}}})},e.pendingDownloadInternal.response}const o=e.loadRemote&&ke.config.remoteSources?ke.config.remoteSources:[""];let t;for(let n of o){n=n.trim(),"./"===n&&(n="");const o=ae(e,n);e.name===o?ke.diagnosticTracing&&b(`Attempting to download '${o}'`):ke.diagnosticTracing&&b(`Attempting to download '${o}' for ${e.name}`);try{e.resolvedUrl=o;const n=ue(e);if(e.pendingDownloadInternal=n,t=await n.response,!t||!t.ok)continue;return t}catch(e){t||(t={ok:!1,url:o,status:0,statusText:""+e});continue}}const n=e.isOptional||e.name.match(/\.pdb$/)&&ke.config.ignorePdbLoadErrors;if(t||We(!1,`Response undefined ${e.name}`),!n){const o=new Error(`download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`);throw o.status=t.status,o}w(`optional download '${t.url}' for ${e.name} failed ${t.status} ${t.statusText}`)}(e);return o?(H[e.behavior]||(e.buffer=await o.arrayBuffer(),++ke.actual_downloaded_assets_count),e):e}finally{if(--$,O&&$==ke.maxParallelDownloads-1){ke.diagnosticTracing&&b("Resuming more parallel downloads");const e=O;O=void 0,e.promise_control.resolve()}}}function ae(e,o){let t;return null==o&&We(!1,`sourcePrefix must be provided for ${e.name}`),e.resolvedUrl?t=e.resolvedUrl:(t=""===o?"assembly"===e.behavior||"pdb"===e.behavior?e.name:"resource"===e.behavior&&e.culture&&""!==e.culture?`${e.culture}/${e.name}`:e.name:o+e.name,t=le(ke.locateFile(t),e.behavior)),t&&"string"==typeof t||We(!1,"attemptUrl need to be path or url string"),t}function le(e,o){return ke.modulesUniqueQuery&&B[o]&&(e+=ke.modulesUniqueQuery),e}let ce=0;const de=new Set;function ue(e){try{e.resolvedUrl||We(!1,"Request's resolvedUrl must be set");const o=function(e){let o=e.resolvedUrl;if(ke.loadBootResource){const t=me(e);if(t instanceof Promise)return t;"string"==typeof t&&(o=t)}const t={};return e.cache?t.cache=e.cache:ke.config.disableNoCacheFetch||(t.cache="no-cache"),e.useCredentials?t.credentials="include":!ke.config.disableIntegrityCheck&&e.hash&&(t.integrity=e.hash),ke.fetch_like(o,t)}(e),t={name:e.name,url:e.resolvedUrl,response:o};return de.add(e.name),t.response.then(()=>{"assembly"==e.behavior&&ke.loadedAssemblies.push(e.name),ce++,ke.onDownloadResourceProgress&&ke.onDownloadResourceProgress(ce,de.size)}),t}catch(o){const t={ok:!1,url:e.resolvedUrl,status:500,statusText:"ERR29: "+o,arrayBuffer:()=>{throw o},json:()=>{throw o}};return{name:e.name,url:e.resolvedUrl,response:Promise.resolve(t)}}}const fe={resource:"assembly",assembly:"assembly",pdb:"pdb",icu:"globalization",vfs:"configuration",manifest:"manifest",dotnetwasm:"dotnetwasm","js-module-dotnet":"dotnetjs","js-module-native":"dotnetjs","js-module-runtime":"dotnetjs"};function me(e){var o;if(ke.loadBootResource){const t=null!==(o=e.hash)&&void 0!==o?o:"",n=e.resolvedUrl,r=fe[e.behavior];if(r){const o=ke.loadBootResource(r,e.name,n,t,e.behavior);return"string"==typeof o?function(e){return"string"!=typeof e&&We(!1,"url must be a string"),!I(e)&&0!==e.indexOf("./")&&0!==e.indexOf("../")&&globalThis.URL&&globalThis.document&&globalThis.document.baseURI&&(e=new URL(e,globalThis.document.baseURI).toString()),e}(o):o}}}function ge(e){e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null}function pe(e){let o=e.lastIndexOf("/");return o>=0&&o++,e.substring(o)}async function he(e){e&&await Promise.all((null!=e?e:[]).map(e=>async function(e){try{const o=e.name;if(!e.moduleExports){const t=le(ke.locateFile(o),"js-module-library-initializer");ke.diagnosticTracing&&b(`Attempting to import '${t}' for ${e}`),e.moduleExports=await import(/*! webpackIgnore: true */t)}ke.libraryInitializers.push({scriptName:o,exports:e.moduleExports})}catch(o){v(`Failed to import library initializer '${e}': ${o}`)}}(e)))}async function be(e,o){if(!ke.libraryInitializers)return;const t=[];for(let n=0;n<ke.libraryInitializers.length;n++){const r=ke.libraryInitializers[n];r.exports[e]&&t.push(we(r.scriptName,e,()=>r.exports[e](...o)))}await Promise.all(t)}async function we(e,o,t){try{await t()}catch(t){throw v(`Failed to invoke '${o}' on library initializer '${e}': ${t}`),Xe(1,t),t}}function ye(e,o){if(e===o)return e;const t={...o};return void 0!==t.assets&&t.assets!==e.assets&&(t.assets=[...e.assets||[],...t.assets||[]]),void 0!==t.resources&&(t.resources=_e(e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[]},t.resources)),void 0!==t.environmentVariables&&(t.environmentVariables={...e.environmentVariables||{},...t.environmentVariables||{}}),void 0!==t.runtimeOptions&&t.runtimeOptions!==e.runtimeOptions&&(t.runtimeOptions=[...e.runtimeOptions||[],...t.runtimeOptions||[]]),Object.assign(e,t)}function ve(e,o){if(e===o)return e;const t={...o};return t.config&&(e.config||(e.config={}),t.config=ye(e.config,t.config)),Object.assign(e,t)}function _e(e,o){if(e===o)return e;const t={...o};return void 0!==t.coreAssembly&&(t.coreAssembly=[...e.coreAssembly||[],...t.coreAssembly||[]]),void 0!==t.assembly&&(t.assembly=[...e.assembly||[],...t.assembly||[]]),void 0!==t.lazyAssembly&&(t.lazyAssembly=[...e.lazyAssembly||[],...t.lazyAssembly||[]]),void 0!==t.corePdb&&(t.corePdb=[...e.corePdb||[],...t.corePdb||[]]),void 0!==t.pdb&&(t.pdb=[...e.pdb||[],...t.pdb||[]]),void 0!==t.jsModuleNative&&(t.jsModuleNative=[...e.jsModuleNative||[],...t.jsModuleNative||[]]),void 0!==t.jsModuleDiagnostics&&(t.jsModuleDiagnostics=[...e.jsModuleDiagnostics||[],...t.jsModuleDiagnostics||[]]),void 0!==t.jsModuleRuntime&&(t.jsModuleRuntime=[...e.jsModuleRuntime||[],...t.jsModuleRuntime||[]]),void 0!==t.wasmSymbols&&(t.wasmSymbols=[...e.wasmSymbols||[],...t.wasmSymbols||[]]),void 0!==t.wasmNative&&(t.wasmNative=[...e.wasmNative||[],...t.wasmNative||[]]),void 0!==t.icu&&(t.icu=[...e.icu||[],...t.icu||[]]),void 0!==t.satelliteResources&&(t.satelliteResources=function(e,o){if(e===o)return e;for(const t in o)e[t]=[...e[t]||[],...o[t]||[]];return e}(e.satelliteResources||{},t.satelliteResources||{})),void 0!==t.modulesAfterConfigLoaded&&(t.modulesAfterConfigLoaded=[...e.modulesAfterConfigLoaded||[],...t.modulesAfterConfigLoaded||[]]),void 0!==t.modulesAfterRuntimeReady&&(t.modulesAfterRuntimeReady=[...e.modulesAfterRuntimeReady||[],...t.modulesAfterRuntimeReady||[]]),void 0!==t.extensions&&(t.extensions={...e.extensions||{},...t.extensions||{}}),void 0!==t.vfs&&(t.vfs=[...e.vfs||[],...t.vfs||[]]),Object.assign(e,t)}function Ae(){const e=ke.config;if(e.environmentVariables=e.environmentVariables||{},e.runtimeOptions=e.runtimeOptions||[],e.resources=e.resources||{assembly:[],jsModuleNative:[],jsModuleRuntime:[],wasmNative:[],vfs:[],satelliteResources:{}},e.assets){ke.diagnosticTracing&&b("config.assets is deprecated, use config.resources instead");for(const o of e.assets){const t={};switch(o.behavior){case"assembly":t.assembly=[o];break;case"pdb":t.pdb=[o];break;case"resource":t.satelliteResources={},t.satelliteResources[o.culture]=[o];break;case"icu":t.icu=[o];break;case"symbols":t.wasmSymbols=[o];break;case"vfs":t.vfs=[o];break;case"dotnetwasm":t.wasmNative=[o];break;case"js-module-runtime":t.jsModuleRuntime=[o];break;case"js-module-native":t.jsModuleNative=[o];break;case"js-module-diagnostics":t.jsModuleDiagnostics=[o];break;case"js-module-dotnet":break;default:throw new Error(`Unexpected behavior ${o.behavior} of asset ${o.name}`)}_e(e.resources,t)}}e.debugLevel,void 0===e.virtualWorkingDirectory&&(e.virtualWorkingDirectory=Ue),e.applicationEnvironment||(e.applicationEnvironment="Production"),e.applicationCulture&&(e.environmentVariables.LANG=`${e.applicationCulture}.UTF-8`),Pe.diagnosticTracing=ke.diagnosticTracing=!!e.diagnosticTracing,Pe.waitForDebugger=e.waitForDebugger,ke.maxParallelDownloads=e.maxParallelDownloads||ke.maxParallelDownloads,ke.enableDownloadRetry=void 0!==e.enableDownloadRetry?e.enableDownloadRetry:ke.enableDownloadRetry}let xe=!1;async function Te(e){var o;if(xe)await ke.afterConfigLoaded.promise;else try{if(xe=!0,Ae(),await he(null===(o=ke.config.resources)||void 0===o?void 0:o.modulesAfterConfigLoaded),await be("onRuntimeConfigLoaded",[ke.config]),e.onConfigLoaded)try{await e.onConfigLoaded(ke.config,Oe),Ae()}catch(e){throw _("onConfigLoaded() failed",e),e}Ae(),ke.afterConfigLoaded.promise_control.resolve(ke.config)}catch(o){const t=`Failed to initialize config ${o} ${null==o?void 0:o.stack}`;throw ke.config=e.config=Object.assign(ke.config,{message:t,error:o,isError:!0}),Xe(1,new Error(t)),o}}function Re(){return!!globalThis.navigator&&(ke.isChromium||ke.isFirefox)}"function"==typeof importScripts&&(globalThis.dotnetSidecar=!0);const Ee="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,je="function"==typeof importScripts,De=je&&"undefined"!=typeof dotnetSidecar,Ce=je&&!De,Me="object"==typeof window||je&&!Ee,Se=!Me&&!Ee,Ue="/";let Pe={},ke={},Ie={},Oe={},$e={},Le=!1;const Ne={},ze={config:Ne},Fe={mono:{},binding:{},internal:$e,module:ze,loaderHelpers:ke,runtimeHelpers:Pe,diagnosticHelpers:Ie,api:Oe};function We(e,o){if(e)return;const t="Assert failed: "+("function"==typeof o?o():o),n=new Error(t);_(t,n),Pe.nativeAbort(n)}function Ve(){return void 0!==ke.exitCode}function Be(){return Pe.runtimeReady&&!Ve()}function Je(){Ve()&&We(!1,`.NET runtime already exited with ${ke.exitCode} ${ke.exitReason}. You can use dotnet.runMain() which doesn't exit the runtime.`),Pe.runtimeReady||We(!1,".NET runtime didn't start yet. Please call dotnet.create() first.")}function He(){Me&&(globalThis.addEventListener("unhandledrejection",eo),globalThis.addEventListener("error",oo))}let Qe,qe;function Ge(){Qe=ze.onAbort,qe=ze.onExit,ze.onAbort=Ke,ze.onExit=Ze}function Ze(e){qe&&qe(e),Xe(e,ke.exitReason)}function Ke(e){Qe&&Qe(e||ke.exitReason),Xe(1,e||ke.exitReason)}function Xe(e,o){var t;const n=o&&"object"==typeof o;e=n&&"number"==typeof o.status?o.status:void 0===e?-1:e;const r=n&&"string"==typeof o.message?o.message:""+o;(o=n?o:Pe.ExitStatus?function(e,o){const t=new Pe.ExitStatus(e);return t.message=o,t.toString=()=>o,t}(e,r):new Error("Exit with code "+e+" "+r)).status=e,o.message||(o.message=r);const s=""+(o.stack||(new Error).stack);try{Object.defineProperty(o,"stack",{get:()=>s})}catch(e){}const i=!!o.silent;if(o.silent=!0,Ve())ke.diagnosticTracing&&b("mono_exit called after exit");else{try{ze.onAbort==Ke&&(ze.onAbort=Qe),ze.onExit==Ze&&(ze.onExit=qe),Me&&(globalThis.removeEventListener("unhandledrejection",eo),globalThis.removeEventListener("error",oo)),Pe.runtimeReady?(Pe.jiterpreter_dump_stats&&Pe.jiterpreter_dump_stats(!1),0===e&&(null===(t=ke.config)||void 0===t?void 0:t.interopCleanupOnExit)&&Pe.forceDisposeProxies(!0,!0)):(ke.diagnosticTracing&&b(`abort_startup, reason: ${o}`),function(e){ke.allDownloadsQueued.promise_control.reject(e),ke.allDownloadsFinished.promise_control.reject(e),ke.afterConfigLoaded.promise_control.reject(e),ke.wasmCompilePromise.promise_control.reject(e),ke.runtimeModuleLoaded.promise_control.reject(e),Pe.dotnetReady&&(Pe.dotnetReady.promise_control.reject(e),Pe.afterInstantiateWasm.promise_control.reject(e),Pe.afterPreRun.promise_control.reject(e),Pe.beforeOnRuntimeInitialized.promise_control.reject(e),Pe.afterOnRuntimeInitialized.promise_control.reject(e),Pe.afterPostRun.promise_control.reject(e))}(o))}catch(e){v("mono_exit A failed",e)}try{i||(function(e,o){if(0!==e&&o){const e=Pe.ExitStatus&&o instanceof Pe.ExitStatus?b:_;"string"==typeof o?e(o):(void 0===o.stack&&(o.stack=(new Error).stack+""),o.message?e(Pe.stringify_as_error_with_stack?Pe.stringify_as_error_with_stack(o.message+"\n"+o.stack):o.message+"\n"+o.stack):e(JSON.stringify(o)))}!Ce&&ke.config&&(ke.config.logExitCode?ke.config.forwardConsole?T("WASM EXIT "+e):y("WASM EXIT "+e):ke.config.forwardConsole&&T())}(e,o),function(e){if(Me&&!Ce&&ke.config&&ke.config.appendElementOnExit&&document){const o=document.createElement("label");o.id="tests_done",0!==e&&(o.style.background="red"),o.innerHTML=""+e,document.body.appendChild(o)}}(e))}catch(e){v("mono_exit B failed",e)}ke.exitCode=e,ke.exitReason||(ke.exitReason=o),!Ce&&Pe.runtimeReady&&ze.runtimeKeepalivePop()}if(ke.config&&ke.config.asyncFlushOnExit&&0===e)throw(async()=>{try{await async function(){if(Ee)try{const e=await import(/*! webpackIgnore: true */"process"),o=e=>new Promise((o,t)=>{e.on("error",t),e.end("","utf8",o)}),t=o(e.stderr),n=o(e.stdout);let r;const s=new Promise(e=>{r=setTimeout(()=>e("timeout"),1e3)});await Promise.race([Promise.all([n,t]),s]),clearTimeout(r)}catch(e){_(`flushing std* streams failed: ${e}`)}}()}finally{Ye(e,o)}})(),o;Ye(e,o)}function Ye(e,o){if(Pe.runtimeReady&&Pe.nativeExit)try{Pe.nativeExit(e)}catch(e){!Pe.ExitStatus||e instanceof Pe.ExitStatus||v("set_exit_code_and_quit_now failed: "+e.toString())}if(0!==e||!Me)throw Ee?process.exit(e):Pe.quit&&Pe.quit(e,o),o}function eo(e){to(e,e.reason,"rejection")}function oo(e){to(e,e.error,"error")}function to(e,o,t){e.preventDefault();try{o||(o=new Error("Unhandled "+t)),void 0===o.stack&&(o.stack=(new Error).stack),o.stack=o.stack+"",o.silent||(_("Unhandled error:",o),Xe(1,o))}catch(e){}}!function(n){if(Le)throw new Error("Loader module already loaded");Le=!0,Pe=n.runtimeHelpers,ke=n.loaderHelpers,Ie=n.diagnosticHelpers,Oe=n.api,$e=n.internal,Object.assign(Oe,{INTERNAL:$e,invokeLibraryInitializers:be}),Object.assign(n.module,{config:ye(Ne,{environmentVariables:{}})});const a={mono_wasm_bindings_is_ready:!1,config:n.module.config,diagnosticTracing:!1,nativeAbort:e=>{throw e||new Error("abort")},nativeExit:e=>{throw new Error("exit:"+e)}},l={gitHash:"1764f3933fefec396a352f4472a7781d96bb88d4",config:n.module.config,diagnosticTracing:!1,maxParallelDownloads:16,enableDownloadRetry:!0,_loaded_files:[],loadedFiles:[],loadedAssemblies:[],libraryInitializers:[],workerNextNumber:1,actual_downloaded_assets_count:0,actual_instantiated_assets_count:0,expected_downloaded_assets_count:0,expected_instantiated_assets_count:0,afterConfigLoaded:r(),allDownloadsQueued:r(),allDownloadsFinished:r(),wasmCompilePromise:r(),runtimeModuleLoaded:r(),loadingWorkers:r(),is_exited:Ve,is_runtime_running:Be,assert_runtime_running:Je,mono_exit:Xe,createPromiseController:r,getPromiseController:s,assertIsControllablePromise:i,mono_download_assets:oe,resolve_single_asset_path:Y,setup_proxy_console:x,set_thread_prefix:h,installUnhandledErrorHandler:He,retrieve_asset_download:re,invokeLibraryInitializers:be,isDebuggingSupported:Re,exceptionsFinal:e,simd:t,relaxedSimd:o};Object.assign(Pe,a),Object.assign(ke,l)}(Fe);let no,ro,so,io=!1,ao=!1;async function lo(e){if(!ao){if(ao=!0,Me&&ke.config.forwardConsole&&void 0!==globalThis.WebSocket&&x("main",globalThis.console,globalThis.location.origin),ze||We(!1,"Null moduleConfig"),ke.config||We(!1,"Null moduleConfig.config"),"function"==typeof e){const o=e(Fe.api);if(o.ready)throw new Error("Module.ready couldn't be redefined.");Object.assign(ze,o),ve(ze,o)}else{if("object"!=typeof e)throw new Error("Can't use moduleFactory callback of createDotnetRuntime function.");ve(ze,e)}await S(ze)}}async function co(e){return await lo(e),ke.config.exitOnUnhandledError&&He(),Ge(),async function(){var e;await Te(ze),ne();const o=uo();(async function(){try{const e=Y("dotnetwasm");await se(e),e&&e.pendingDownloadInternal&&e.pendingDownloadInternal.response||We(!1,"Can't load dotnet.native.wasm");const o=await e.pendingDownloadInternal.response,t=o.headers&&o.headers.get?o.headers.get("Content-Type"):void 0;let n;if("function"==typeof WebAssembly.compileStreaming&&"application/wasm"===t)n=await WebAssembly.compileStreaming(o);else{Me&&"application/wasm"!==t&&v('WebAssembly resource does not have the expected content type "application/wasm", so falling back to slower ArrayBuffer instantiation.');const e=await o.arrayBuffer();ke.diagnosticTracing&&b("instantiate_wasm_module buffered"),n=Se?await Promise.resolve(new WebAssembly.Module(e)):await WebAssembly.compile(e)}e.pendingDownloadInternal=null,e.pendingDownload=null,e.buffer=null,e.moduleExports=null,ke.wasmCompilePromise.promise_control.resolve(n)}catch(e){ke.wasmCompilePromise.promise_control.reject(e)}})(),setTimeout(async()=>{try{D(),await oe()}catch(e){Xe(1,e)}},0);const t=await Promise.all(o);return await fo(t),await Pe.dotnetReady.promise,await he(null===(e=ke.config.resources)||void 0===e?void 0:e.modulesAfterRuntimeReady),await be("onRuntimeReady",[Fe.api]),Oe}()}function uo(){const e=Y("js-module-runtime"),o=Y("js-module-native");if(no&&ro)return[no,ro,so];"object"==typeof e.moduleExports?no=e.moduleExports:(ke.diagnosticTracing&&b(`Attempting to import '${e.resolvedUrl}' for ${e.name}`),no=import(/*! webpackIgnore: true */e.resolvedUrl)),"object"==typeof o.moduleExports?ro=o.moduleExports:(ke.diagnosticTracing&&b(`Attempting to import '${o.resolvedUrl}' for ${o.name}`),ro=import(/*! webpackIgnore: true */o.resolvedUrl));const t=X("js-module-diagnostics");return t&&("object"==typeof t.moduleExports?so=t.moduleExports:(ke.diagnosticTracing&&b(`Attempting to import '${t.resolvedUrl}' for ${t.name}`),so=import(/*! webpackIgnore: true */t.resolvedUrl))),[no,ro,so]}async function fo(e){const{initializeExports:o,initializeReplacements:t,configureRuntimeStartup:n,configureEmscriptenStartup:r,configureWorkerStartup:s,setRuntimeGlobals:i,passEmscriptenInternals:a}=e[0],{default:l}=e[1],c=e[2];i(Fe),o(Fe),c&&c.setRuntimeGlobals(Fe),await n(ze),ke.runtimeModuleLoaded.promise_control.resolve(),l(()=>(Object.assign(ze,{__dotnet_runtime:{initializeReplacements:t,configureEmscriptenStartup:r,configureWorkerStartup:s,passEmscriptenInternals:a}}),ze)).catch(e=>{if(e.message&&e.message.toLowerCase().includes("out of memory"))throw new Error(".NET runtime has failed to start, because too much memory was requested. Please decrease the memory by adjusting EmccMaximumHeapSize.");throw e})}Ce&&async function(){(function(){const e=new MessageChannel,o=e.port1,t=e.port2;o.addEventListener("message",e=>{!function(e){const o=JSON.parse(e.config),t=JSON.parse(e.monoThreadInfo);ze.config=o,ze.wasmModule=e.wasmModule,ze.wasmMemory=e.wasmMemory,ze.handlers=e.handlers,io?ke.diagnosticTracing&&b("mono config already received"):(ye(ke.config,o),Pe.monoThreadInfo=t,Ae(),ke.diagnosticTracing&&b("mono config received"),io=!0,ke.afterConfigLoaded.promise_control.resolve(ke.config),Me&&o.forwardConsole&&void 0!==globalThis.WebSocket&&ke.setup_proxy_console("worker-idle",console,globalThis.location.origin))}(e.data),o.close(),t.close()},{once:!0}),o.start(),self.postMessage({[a]:{monoCmd:"preload",port:t}},[t])})(),await ke.afterConfigLoaded.promise,function(){const e=ke.config;e.assets||We(!1,"config.assets must be defined");for(const o of e.assets)K(o),q[o.behavior]&&N.push(o)}();const e=uo(),o=await Promise.all(e);return globalThis.name="em-pthread",await fo(o),ke.config.exitOnUnhandledError&&He(),Ge(),Me&&ke.config.forwardConsole&&void 0!==globalThis.WebSocket&&x("main",globalThis.console,globalThis.location.origin),await S(ze),await oe(),self.dispatchEvent(new MessageEvent("message",{data:{cmd:1,handlers:ze.handlers,wasmMemory:ze.wasmMemory,wasmModule:ze.wasmModule}})),ze}().catch(e=>Xe(1,e));const mo=new class{withModuleConfig(e){try{return ve(ze,e),this}catch(e){throw Xe(1,e),e}}withInterpreterPgo(e,o){try{return ye(Ne,{interpreterPgo:e,interpreterPgoSaveDelay:o}),Ne.runtimeOptions?Ne.runtimeOptions.push("--interp-pgo-recording"):Ne.runtimeOptions=["--interp-pgo-recording"],this}catch(e){throw Xe(1,e),e}}withConfig(e){try{return ye(Ne,e),this}catch(e){throw Xe(1,e),e}}withConfigSrc(e){return this}withVirtualWorkingDirectory(e){try{return e&&"string"==typeof e||We(!1,"must be directory path"),ye(Ne,{virtualWorkingDirectory:e}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariable(e,o){try{const t={};return t[e]=o,ye(Ne,{environmentVariables:t}),this}catch(e){throw Xe(1,e),e}}withEnvironmentVariables(e){try{return e&&"object"==typeof e||We(!1,"must be dictionary object"),ye(Ne,{environmentVariables:e}),this}catch(e){throw Xe(1,e),e}}withDiagnosticTracing(e){try{return"boolean"!=typeof e&&We(!1,"must be boolean"),ye(Ne,{diagnosticTracing:e}),this}catch(e){throw Xe(1,e),e}}withDebugging(e){try{return null!=e&&"number"==typeof e||We(!1,"must be number"),ye(Ne,{debugLevel:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArguments(...e){try{return e&&Array.isArray(e)||We(!1,"must be array of strings"),ye(Ne,{applicationArguments:e}),this}catch(e){throw Xe(1,e),e}}withRuntimeOptions(e){try{return e&&Array.isArray(e)||We(!1,"must be array of strings"),Ne.runtimeOptions?Ne.runtimeOptions.push(...e):Ne.runtimeOptions=e,this}catch(e){throw Xe(1,e),e}}withMainAssembly(e){try{return ye(Ne,{mainAssemblyName:e}),this}catch(e){throw Xe(1,e),e}}withApplicationArgumentsFromQuery(){try{if(!globalThis.window)throw new Error("Missing window to the query parameters from");if(void 0===globalThis.URLSearchParams)throw new Error("URLSearchParams is supported");const e=new URLSearchParams(globalThis.window.location.search).getAll("arg");return this.withApplicationArguments(...e)}catch(e){throw Xe(1,e),e}}withApplicationEnvironment(e){try{return ye(Ne,{applicationEnvironment:e}),this}catch(e){throw Xe(1,e),e}}withApplicationCulture(e){try{return ye(Ne,{applicationCulture:e}),this}catch(e){throw Xe(1,e),e}}withResourceLoader(e){try{return ke.loadBootResource=e,this}catch(e){throw Xe(1,e),e}}async download(){try{await async function(){lo(ze),await Te(ze),ne(),D(),oe(),await ke.allDownloadsFinished.promise}()}catch(e){throw Xe(1,e),e}}async create(){try{return this.instance||(this.instance=await async function(){return await co(ze),Fe.api}()),this.instance}catch(e){throw Xe(1,e),e}}run(){return this.runMainAndExit()}async runMainAndExit(){try{return ze.config||We(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMainAndExit()}catch(e){throw Xe(1,e),e}}async runMain(){try{return ze.config||We(!1,"Null moduleConfig.config"),this.instance||await this.create(),this.instance.runMain()}catch(e){throw Xe(1,e),e}}},go=Xe,po=co;Se||"function"==typeof globalThis.URL||We(!1,"This browser/engine doesn't support URL API. Please use a modern version."),"function"!=typeof globalThis.BigInt64Array&&We(!1,"This browser/engine doesn't support BigInt64Array API. Please use a modern version. See also https://learn.microsoft.com/aspnet/core/blazor/supported-platforms"),globalThis.performance&&"function"==typeof globalThis.performance.now||We(!1,"This browser/engine doesn't support performance.now. Please use a modern version."),Se||globalThis.crypto&&"object"==typeof globalThis.crypto.subtle||We(!1,"This engine doesn't support crypto.subtle. Please use a modern version."),Se||globalThis.crypto&&"function"==typeof globalThis.crypto.getRandomValues||We(!1,"This engine doesn't support crypto.getRandomValues. Please use a modern version."),Ee&&"function"!=typeof process.exit&&We(!1,"This engine doesn't support process.exit. Please use a modern version."),mo.withConfig(/*json-start*/{
  "mainAssemblyName": "UnionValidationApp.Client",
  "resources": {
    "hash": "sha256-PE/Qv5HdHaugRvj3NnGiyFPlwHBErQ4ggfG7sMXaiww=",
    "jsModuleNative": [
      {
        "name": "dotnet.native.3ls8y6r4kq.js"
      }
    ],
    "jsModuleRuntime": [
      {
        "name": "dotnet.runtime.73xrdzpk9k.js"
      }
    ],
    "wasmNative": [
      {
        "name": "dotnet.native.ngja94d8ux.wasm",
        "hash": "sha256-B4qwdZQ5txIfRV/PTaEkv4EJdherzmS4DjWyagbcMy0=",
        "cache": "force-cache"
      }
    ],
    "icu": [
      {
        "virtualPath": "icudt_CJK.dat",
        "name": "icudt_CJK.5lgyv9xn0b.dat",
        "hash": "sha256-eZuX0pntrUwNrAmFCMwpxJjFA3/Myi/rW2x9mEZ+Mbg=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_EFIGS.dat",
        "name": "icudt_EFIGS.xyuimhy3ww.dat",
        "hash": "sha256-SQcxb+bdx2UXUCU9tFdOWCr4Ctk64xghCnr0JGLWWKQ=",
        "cache": "force-cache"
      },
      {
        "virtualPath": "icudt_no_CJK.dat",
        "name": "icudt_no_CJK.h0en30vv0c.dat",
        "hash": "sha256-T8YllylpxyWp9Aq4AiF+BMAxKXqYyzWB9RA5RqY19vs=",
        "cache": "force-cache"
      }
    ],
    "coreAssembly": [
      {
        "payloadSize": 5411920,
        "virtualPath": "System.Private.CoreLib.wasm",
        "name": "System.Private.CoreLib.rpift9ztde.wasm",
        "hash": "sha256-f32Dg/aYu88Lax4FyhBAdU5GVBk6V+V3lFgA1TkWALE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 80464,
        "virtualPath": "System.Runtime.InteropServices.JavaScript.wasm",
        "name": "System.Runtime.InteropServices.JavaScript.ujesfwwojk.wasm",
        "hash": "sha256-VtgrgWyKTHiB1/ubltrT+1QPNZSKS5D7sfS3fpaV8jo=",
        "cache": "force-cache"
      }
    ],
    "assembly": [
      {
        "payloadSize": 47184,
        "virtualPath": "Microsoft.AspNetCore.Authorization.wasm",
        "name": "Microsoft.AspNetCore.Authorization.90wmdi691o.wasm",
        "hash": "sha256-d1+3glQWBfrZwgjeKQIJ2v2jVDomWr4XUWLzQW20WJQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 51280,
        "virtualPath": "Microsoft.AspNetCore.Components.Forms.wasm",
        "name": "Microsoft.AspNetCore.Components.Forms.ga4s3vi0z5.wasm",
        "hash": "sha256-SBwva8AMoIikuw7ddtociaPGaeeXZakwKysXPWGsWBM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 216144,
        "virtualPath": "Microsoft.AspNetCore.Components.Web.wasm",
        "name": "Microsoft.AspNetCore.Components.Web.cupwwbzia4.wasm",
        "hash": "sha256-LNkFG5Q6G9WZHA9WlX5fA9atxCoKXLnQuR62UzAx5jU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 190032,
        "virtualPath": "Microsoft.AspNetCore.Components.WebAssembly.wasm",
        "name": "Microsoft.AspNetCore.Components.WebAssembly.0fhsw9lujp.wasm",
        "hash": "sha256-1ATZrvSTgK72w+Ijx0jkblqYK9ubv6+R1ko4hyGRvTQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 428112,
        "virtualPath": "Microsoft.AspNetCore.Components.wasm",
        "name": "Microsoft.AspNetCore.Components.9fhy3y7uw8.wasm",
        "hash": "sha256-S9jLz+E9zYLCvTeZZG+u8HiLEBgFRGnpQJ4reDDhXbU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "Microsoft.AspNetCore.Metadata.wasm",
        "name": "Microsoft.AspNetCore.Metadata.cmuloacd92.wasm",
        "hash": "sha256-RA4QYu8pHFVHEzs1Ky2fVv3OH8XF9Wm08oUZog2rBLU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 300624,
        "virtualPath": "Microsoft.CSharp.wasm",
        "name": "Microsoft.CSharp.uyv4rgl096.wasm",
        "hash": "sha256-KvrA+krnjT7cbPTFTR8uwStAzzi98af+uQJVoSBl0Pg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 32848,
        "virtualPath": "Microsoft.Extensions.Caching.Abstractions.wasm",
        "name": "Microsoft.Extensions.Caching.Abstractions.569maih91m.wasm",
        "hash": "sha256-7fkYyfemA4cM2Rz4zSNQnY3MKr6UCTVIYmF5iwLGs1g=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 16464,
        "virtualPath": "Microsoft.Extensions.Configuration.Abstractions.wasm",
        "name": "Microsoft.Extensions.Configuration.Abstractions.m52s3jznzu.wasm",
        "hash": "sha256-6vhsaNneClkX1DGiqsDBZEq1fB2FkYgaJgsRPyKLm7A=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 32848,
        "virtualPath": "Microsoft.Extensions.Configuration.Binder.wasm",
        "name": "Microsoft.Extensions.Configuration.Binder.d6ncoy7uc2.wasm",
        "hash": "sha256-qy99q7RdrsyPk2JOWCOWY7JscvWA16LVaUMFknwx0ic=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 16976,
        "virtualPath": "Microsoft.Extensions.Configuration.EnvironmentVariables.wasm",
        "name": "Microsoft.Extensions.Configuration.EnvironmentVariables.yqmwmqqzku.wasm",
        "hash": "sha256-KhlGakTMSTcnsWFnZn4emKIsElcDQaBjFlLxsd8fEzM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 19024,
        "virtualPath": "Microsoft.Extensions.Configuration.FileExtensions.wasm",
        "name": "Microsoft.Extensions.Configuration.FileExtensions.6ypcfn1o7v.wasm",
        "hash": "sha256-XkmGkPsZ5c8ErM13YuQ9h53+YFsefthjqbMmJyvAS9A=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 16976,
        "virtualPath": "Microsoft.Extensions.Configuration.Json.wasm",
        "name": "Microsoft.Extensions.Configuration.Json.n0ab2t5s28.wasm",
        "hash": "sha256-idKTIlvIrPPQnCXQE188LQIx9V4HXfrG5WXsPRjxfjA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 34384,
        "virtualPath": "Microsoft.Extensions.Configuration.wasm",
        "name": "Microsoft.Extensions.Configuration.3mb1jj5sje.wasm",
        "hash": "sha256-9Z8IB01KLYnpZ7hX5nqtnucXAbuwkUR8mtj1wl0NPG8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 57424,
        "virtualPath": "Microsoft.Extensions.DependencyInjection.Abstractions.wasm",
        "name": "Microsoft.Extensions.DependencyInjection.Abstractions.h61na5gi4p.wasm",
        "hash": "sha256-R5xQYXt7mRCk3eyjIrxi1RIGv20X/1YadBqwsF2/Qdk=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 86608,
        "virtualPath": "Microsoft.Extensions.DependencyInjection.wasm",
        "name": "Microsoft.Extensions.DependencyInjection.cejh2zo10x.wasm",
        "hash": "sha256-jBWwxzcx8OKGbp1VpcYbu1Jjugszhu28ezeqwj3RrqY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 17488,
        "virtualPath": "Microsoft.Extensions.Diagnostics.Abstractions.wasm",
        "name": "Microsoft.Extensions.Diagnostics.Abstractions.s5bod50qxw.wasm",
        "hash": "sha256-gNCoRSxLsTX4wNnS16r1naoi+RToJErGcw4OZfR/r+M=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 37968,
        "virtualPath": "Microsoft.Extensions.Diagnostics.wasm",
        "name": "Microsoft.Extensions.Diagnostics.3hfnv9hxbd.wasm",
        "hash": "sha256-6b7Pu+oyNaaUkTEqC3FbXtukWvG6jjXdr+Qfed9YEG8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 11344,
        "virtualPath": "Microsoft.Extensions.FileProviders.Abstractions.wasm",
        "name": "Microsoft.Extensions.FileProviders.Abstractions.hhlnh8bckl.wasm",
        "hash": "sha256-e7L9zxrpH1bFOkHJOODiYRIHMdiS9r7eXz04FudzMj4=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 40528,
        "virtualPath": "Microsoft.Extensions.FileProviders.Physical.wasm",
        "name": "Microsoft.Extensions.FileProviders.Physical.euffuz90up.wasm",
        "hash": "sha256-9te5fqa7a9lHjTuTdcOEH9rdabg6JrMxw7enxEHjdI8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 36944,
        "virtualPath": "Microsoft.Extensions.FileSystemGlobbing.wasm",
        "name": "Microsoft.Extensions.FileSystemGlobbing.ej27qmw71z.wasm",
        "hash": "sha256-ZsWjrqgqrX3Nz5y+jF2ycfvPG37Ki8wxSUQIhNCOkIw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 22096,
        "virtualPath": "Microsoft.Extensions.Hosting.Abstractions.wasm",
        "name": "Microsoft.Extensions.Hosting.Abstractions.yt8a6gxfz1.wasm",
        "hash": "sha256-yt4mP3neFgjObByLeZXBro2KsLTNgvebijJkUQ2QqBY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 8784,
        "virtualPath": "Microsoft.Extensions.Localization.Abstractions.wasm",
        "name": "Microsoft.Extensions.Localization.Abstractions.99dk2f0irp.wasm",
        "hash": "sha256-4yF/MExH5iqMVFcJmCR6jpTU+PPArxylA25v2vIITJ8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 56400,
        "virtualPath": "Microsoft.Extensions.Logging.Abstractions.wasm",
        "name": "Microsoft.Extensions.Logging.Abstractions.8a8fxjl80v.wasm",
        "hash": "sha256-UOsyXl+bGsaMcXL7TyPdcKPcGGk9VZe6Nl0SuvdcO80=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 41040,
        "virtualPath": "Microsoft.Extensions.Logging.wasm",
        "name": "Microsoft.Extensions.Logging.nr0mpl7cfn.wasm",
        "hash": "sha256-nbUw9DdmftzMf1ZHqj3dJ1z7o/q0d2RHQvHgD4xD7GA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 11344,
        "virtualPath": "Microsoft.Extensions.Options.ConfigurationExtensions.wasm",
        "name": "Microsoft.Extensions.Options.ConfigurationExtensions.usz0p2wsyg.wasm",
        "hash": "sha256-wkmWloc3CD6PDX8VOfTIhtAOiPsLGEYykCcEIdMbtlc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 97872,
        "virtualPath": "Microsoft.Extensions.Options.wasm",
        "name": "Microsoft.Extensions.Options.3rwyjjtoz6.wasm",
        "hash": "sha256-T8l/aM60fhMpvO1MVEfZn5KurcchoyUatyztFbDUFOs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 35408,
        "virtualPath": "Microsoft.Extensions.Primitives.wasm",
        "name": "Microsoft.Extensions.Primitives.urwsdia1nz.wasm",
        "hash": "sha256-6ikZwIrcKEVSvsTaWx/EfvVBRds4Rfo5gxEgW8TN/hE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 12880,
        "virtualPath": "Microsoft.Extensions.Validation.wasm",
        "name": "Microsoft.Extensions.Validation.7jewl9ulpa.wasm",
        "hash": "sha256-kyqxv/TV4HBeNXO7JMa0LSUn+097j1LHkFe/Z4blXWU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 13904,
        "virtualPath": "Microsoft.JSInterop.WebAssembly.wasm",
        "name": "Microsoft.JSInterop.WebAssembly.amauww5tze.wasm",
        "hash": "sha256-QsHBFxz1m1hItccdzhU5BwIl5PDHlW7z5w8fFhcmlBg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 67664,
        "virtualPath": "Microsoft.JSInterop.wasm",
        "name": "Microsoft.JSInterop.dwe4o8kdti.wasm",
        "hash": "sha256-bdxKOcUKl9MBzYhRaoFKdNSRU/9it3c9brTnvBqqyB4=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 418384,
        "virtualPath": "Microsoft.VisualBasic.Core.wasm",
        "name": "Microsoft.VisualBasic.Core.37nhshsluq.wasm",
        "hash": "sha256-UfDZsHgglwuwDpWHEmw8KWFskQYwfNmu0OY3FMskoXU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6736,
        "virtualPath": "Microsoft.VisualBasic.wasm",
        "name": "Microsoft.VisualBasic.ldlr82sqg4.wasm",
        "hash": "sha256-B8sBG5qA8cSLXW9Ptv7w2jSEAW6t9YMNEq8DPe1xk8k=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "Microsoft.Win32.Primitives.wasm",
        "name": "Microsoft.Win32.Primitives.dq6rspsc3u.wasm",
        "hash": "sha256-1bq2/2awzC4yayWFI20WNXoHmaJ3JCDozEbHtUVI0u0=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 22608,
        "virtualPath": "Microsoft.Win32.Registry.wasm",
        "name": "Microsoft.Win32.Registry.m2zqog52p3.wasm",
        "hash": "sha256-DlwRM4v+i459Kp8G9useIKeC9gQKQywD420CdPtYuKg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.AppContext.wasm",
        "name": "System.AppContext.cabi8levam.wasm",
        "hash": "sha256-XNqHrbhNZZrT4gzADuowdd7oLnHwDAQqStna4DFnDvg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Buffers.wasm",
        "name": "System.Buffers.uv8s712up7.wasm",
        "hash": "sha256-BjkfZdjmnIf7/UxCG7zj0TNWc3KUr62s8Vcoay6Xe/A=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 53328,
        "virtualPath": "System.Collections.Concurrent.wasm",
        "name": "System.Collections.Concurrent.xjypr7234k.wasm",
        "hash": "sha256-LdLdt0FeqA9kvJEugPuVLGhU9iqj+VDT/yakURm2XVM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 242256,
        "virtualPath": "System.Collections.Immutable.wasm",
        "name": "System.Collections.Immutable.8dg6lt4z49.wasm",
        "hash": "sha256-pJ4FFbdNd/WPlp3cj0kFuFaeakS1UZ6AICh1ru/IaGQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 37456,
        "virtualPath": "System.Collections.NonGeneric.wasm",
        "name": "System.Collections.NonGeneric.mnwkdrahox.wasm",
        "hash": "sha256-rsT/zQ6tLEra2PIr1cMxOYT9CfbkWrGxkZ5nhDGY6Fo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 37456,
        "virtualPath": "System.Collections.Specialized.wasm",
        "name": "System.Collections.Specialized.s1k0kwmpja.wasm",
        "hash": "sha256-gBmwfZiErvpCQ3ILgRRW9JdkLIvmURAAEJc2aSS/d2A=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 102480,
        "virtualPath": "System.Collections.wasm",
        "name": "System.Collections.qtmuofl24h.wasm",
        "hash": "sha256-8qzyH5DaGz7BZactCp5LlY/l4NaXHa2LunzN4VCOtoA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 109136,
        "virtualPath": "System.ComponentModel.Annotations.wasm",
        "name": "System.ComponentModel.Annotations.mhkf6h1751.wasm",
        "hash": "sha256-eo81nxCBmhgagZBuE61TsIhNRx1JmHp0lcO1Dp5E8Sw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6224,
        "virtualPath": "System.ComponentModel.DataAnnotations.wasm",
        "name": "System.ComponentModel.DataAnnotations.tq1y7z32s0.wasm",
        "hash": "sha256-VcClG6h9X8QUL6AIlyzTTPWYZDKRt8XajsnqPfeunrI=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 15952,
        "virtualPath": "System.ComponentModel.EventBasedAsync.wasm",
        "name": "System.ComponentModel.EventBasedAsync.669tt4gshp.wasm",
        "hash": "sha256-Ul/0WSh6Qv/33a5AWhmlw9hOrSy8MznFg2q38ejF+bw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 31824,
        "virtualPath": "System.ComponentModel.Primitives.wasm",
        "name": "System.ComponentModel.Primitives.2g0vonsvi9.wasm",
        "hash": "sha256-AmiXfCs5pGIVZd1+HpXrAk/nzVwy2//Ad/bYZn2OlpE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 307280,
        "virtualPath": "System.ComponentModel.TypeConverter.wasm",
        "name": "System.ComponentModel.TypeConverter.yowzmbex9w.wasm",
        "hash": "sha256-vm0777BwFKj3yf0qkrJNLgYOU9XYiKYW5mF2xMtmHus=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.ComponentModel.wasm",
        "name": "System.ComponentModel.jv9rs5goub.wasm",
        "hash": "sha256-vzq3mOSfOYsTZ1Qki7BnFH9y9b+tkAQes2hWb/2Yq0o=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 8784,
        "virtualPath": "System.Configuration.wasm",
        "name": "System.Configuration.7s45l6mavq.wasm",
        "hash": "sha256-d5T+qAdgmyYhKVoR3VrIysHCi2IFlsugLU5lNSg1Jiw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 43088,
        "virtualPath": "System.Console.wasm",
        "name": "System.Console.i28zoai1da.wasm",
        "hash": "sha256-mvOstSuhVpNb7UF3GAJu4g3gX5dVgZJGeRQd32nUNIs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 12880,
        "virtualPath": "System.Core.wasm",
        "name": "System.Core.v3bx7bfswt.wasm",
        "hash": "sha256-heaaiBm6v4vhBuK4LFLiwMuCn0OHrSSYjT1N+sbTRTQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 1007184,
        "virtualPath": "System.Data.Common.wasm",
        "name": "System.Data.Common.rbz8pndkf0.wasm",
        "hash": "sha256-16nrUyCkYqg8bzqsw46AxODG8N6FHL1ijm9b0C51log=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Data.DataSetExtensions.wasm",
        "name": "System.Data.DataSetExtensions.0k2pcvltk0.wasm",
        "hash": "sha256-MNFMKXJrsmwrbCMfAaRFq3vg4laudiGf58ewpHiEmXY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 14928,
        "virtualPath": "System.Data.wasm",
        "name": "System.Data.war88rvm6y.wasm",
        "hash": "sha256-OACNQM4wTeIzRoR3vUc2jwukY4wCtWS6A733AWc2Q/4=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Diagnostics.Contracts.wasm",
        "name": "System.Diagnostics.Contracts.fsbrv51115.wasm",
        "hash": "sha256-kYgKbE82ENGTDY3Bd7DTRK/1+SGI2c/jcJs+aG6FPMA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Diagnostics.Debug.wasm",
        "name": "System.Diagnostics.Debug.qobub91p81.wasm",
        "hash": "sha256-VmrRXe8GdxiMM0yqZ4UJ2hELmrheQB3sz48VKpy0DKQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 198224,
        "virtualPath": "System.Diagnostics.DiagnosticSource.wasm",
        "name": "System.Diagnostics.DiagnosticSource.v4y3qi0n05.wasm",
        "hash": "sha256-j3GYLCqPTV5RFW0rsoafpkwYno4xGlCsro6q3QGA3xc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 11856,
        "virtualPath": "System.Diagnostics.FileVersionInfo.wasm",
        "name": "System.Diagnostics.FileVersionInfo.k9z5wkrgjy.wasm",
        "hash": "sha256-OB7dUBf9b+GzJJsbghK7pDEaxzroHS3ys15Od6AvJGA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 58448,
        "virtualPath": "System.Diagnostics.Process.wasm",
        "name": "System.Diagnostics.Process.qhdzc9rbla.wasm",
        "hash": "sha256-Du8MigdsV/VkCAY1/ev15B5UBtLLRUuh7/KaVEvXsCY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 15440,
        "virtualPath": "System.Diagnostics.StackTrace.wasm",
        "name": "System.Diagnostics.StackTrace.53g77ohvnr.wasm",
        "hash": "sha256-zxt77KhO+gyGAFh+0wZaEybA0I5G5x5choAypMhracI=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 21072,
        "virtualPath": "System.Diagnostics.TextWriterTraceListener.wasm",
        "name": "System.Diagnostics.TextWriterTraceListener.f2q7p4clc7.wasm",
        "hash": "sha256-t8i4m53DHhswmBqxNHEvS7TpeBUkWodFSbZ68znZLBM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Diagnostics.Tools.wasm",
        "name": "System.Diagnostics.Tools.zeycjoz0fa.wasm",
        "hash": "sha256-xUM6RSmt7fK4htnbJn85afD7Io9vrS1ft7+zuD+Lf94=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 48208,
        "virtualPath": "System.Diagnostics.TraceSource.wasm",
        "name": "System.Diagnostics.TraceSource.ve48sdd9om.wasm",
        "hash": "sha256-V8gRkZ4xyoYIpuhEyOa8ATHYrhxP3RYX01vmxraq1jM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Diagnostics.Tracing.wasm",
        "name": "System.Diagnostics.Tracing.9k5qe07022.wasm",
        "hash": "sha256-VyPDle+5OLbEdo9Yz4Xu4M25HHWE75LchMfMaAobMmw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 54352,
        "virtualPath": "System.Drawing.Primitives.wasm",
        "name": "System.Drawing.Primitives.5fyulyer0a.wasm",
        "hash": "sha256-P1kaJ5K82NuZCYdZ4f1Eo2uOfoP5VapPP2hw1JcxXeo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 9808,
        "virtualPath": "System.Drawing.wasm",
        "name": "System.Drawing.fqtitxdtw2.wasm",
        "hash": "sha256-B9jcZ8Xj+gFIWMAuDknW5NjcbVjTfTLp7Uo2eiwsLZM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Dynamic.Runtime.wasm",
        "name": "System.Dynamic.Runtime.8o311ccgfk.wasm",
        "hash": "sha256-KCY+yKa7t7vH3ZYRZa/ftyxfFLJ/sahUJVuLxlXosgI=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 96848,
        "virtualPath": "System.Formats.Asn1.wasm",
        "name": "System.Formats.Asn1.zlp4w3tuyc.wasm",
        "hash": "sha256-p7Z5eBlDZxY43gGq+I7qsIpRWst6Fy9PEqlz+WHkKIU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 30288,
        "virtualPath": "System.Formats.Tar.wasm",
        "name": "System.Formats.Tar.vbw557eee1.wasm",
        "hash": "sha256-FcwkLEPO2Ley/SfkgXHG6jCK0+pF6xt3DMwGxL+GlzI=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Globalization.Calendars.wasm",
        "name": "System.Globalization.Calendars.t6wjrstv41.wasm",
        "hash": "sha256-S1t9wevMrYabifCrfuvhMZn8adlLzUJ5xudOs5Q02+Q=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Globalization.Extensions.wasm",
        "name": "System.Globalization.Extensions.jl00ihy7me.wasm",
        "hash": "sha256-BxnEY8k0NalRTXnyINbTkphJ8p++YPS0aGlfOVxYwxs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Globalization.wasm",
        "name": "System.Globalization.ofz11kxyf0.wasm",
        "hash": "sha256-pGrkssyqwD4iDIw7VHmJ7lj2IFTLjkKnnJoV0Q4x47k=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 17488,
        "virtualPath": "System.IO.Compression.Brotli.wasm",
        "name": "System.IO.Compression.Brotli.jt18bvhdmw.wasm",
        "hash": "sha256-N9LoITKtugIIdD3nsy+1xE5+7aN4QE6Nvm8icZBISrY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.IO.Compression.FileSystem.wasm",
        "name": "System.IO.Compression.FileSystem.5zfm0466a6.wasm",
        "hash": "sha256-YWpci/UCxOk7KRwwjVBSVOhi3CNugGVXk3AW+d1KJIg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 56400,
        "virtualPath": "System.IO.Compression.ZipFile.wasm",
        "name": "System.IO.Compression.ZipFile.0kob8udp03.wasm",
        "hash": "sha256-EKGIV309aRtcAFt5gV3fa4TXkwo5GdkMNyNKEOXQWF0=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 210512,
        "virtualPath": "System.IO.Compression.wasm",
        "name": "System.IO.Compression.13sty1fmt6.wasm",
        "hash": "sha256-k1bYLPDsKl3/rwcLR8qvSXwmg5DK+f0YMblPXGLnabw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 21584,
        "virtualPath": "System.IO.FileSystem.AccessControl.wasm",
        "name": "System.IO.FileSystem.AccessControl.015kw4ixvp.wasm",
        "hash": "sha256-jJkqVI5evfn5XIxXo48/JOMImcc/8U/jPSa9AeCbftA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 13392,
        "virtualPath": "System.IO.FileSystem.DriveInfo.wasm",
        "name": "System.IO.FileSystem.DriveInfo.v38txyye9i.wasm",
        "hash": "sha256-S/cEQbr7MXsJL29CVTHHm+jbF3PjnrGzoFjIA8au/7Q=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.IO.FileSystem.Primitives.wasm",
        "name": "System.IO.FileSystem.Primitives.wq22t3nadq.wasm",
        "hash": "sha256-mGxppAFbKq3qk1RigCg2EkYSpFk1WoFK3DQC5YitKJU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 22608,
        "virtualPath": "System.IO.FileSystem.Watcher.wasm",
        "name": "System.IO.FileSystem.Watcher.cpf0819522.wasm",
        "hash": "sha256-gMuwfAT2bP5rxKbscle9gKaA5R7tZYlHSKWVypx+uZ8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.IO.FileSystem.wasm",
        "name": "System.IO.FileSystem.b2ser3eneb.wasm",
        "hash": "sha256-kwxj1DoGJDcW17V+QxoNEBhi1KZrvVp9PWu2/FErpjs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 24144,
        "virtualPath": "System.IO.IsolatedStorage.wasm",
        "name": "System.IO.IsolatedStorage.vpxyj4hdlv.wasm",
        "hash": "sha256-M7KkPd+o7S1r255142Ag4YEpvXCoOncSEwf8Max0Adg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 38480,
        "virtualPath": "System.IO.MemoryMappedFiles.wasm",
        "name": "System.IO.MemoryMappedFiles.6vgotcix0o.wasm",
        "hash": "sha256-nkeimdiM37yUgZ6jHmTT3bPzh22FRK4cXeh9vvxLh40=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 73296,
        "virtualPath": "System.IO.Pipelines.wasm",
        "name": "System.IO.Pipelines.d93pv1bamz.wasm",
        "hash": "sha256-wS/9AGdY0L9MXt/W+mgDCTYjmIaJdYcaaH5B361LtL0=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 12880,
        "virtualPath": "System.IO.Pipes.AccessControl.wasm",
        "name": "System.IO.Pipes.AccessControl.175xxdahz2.wasm",
        "hash": "sha256-c3IcZOcPhwTRWp7YxtNHxF7JByZQPw//TG3UfGs/6vY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 32336,
        "virtualPath": "System.IO.Pipes.wasm",
        "name": "System.IO.Pipes.hwu43l1j60.wasm",
        "hash": "sha256-cZzDKCufD5A9nRc1zuGPKqESRbi7hbpHUvVBYngKRUA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.IO.UnmanagedMemoryStream.wasm",
        "name": "System.IO.UnmanagedMemoryStream.fzw962daea.wasm",
        "hash": "sha256-xZJB3Fb3CCu3mYyO4JYVxiWnx3eVz8gw3CEncs+tiIs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.IO.wasm",
        "name": "System.IO.bka801rer8.wasm",
        "hash": "sha256-hUR2h2OGK9/GbJWk6eESf9st4ry+feDBZ4EGx6Bz0/I=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 503888,
        "virtualPath": "System.Linq.AsyncEnumerable.wasm",
        "name": "System.Linq.AsyncEnumerable.5zylbfmzx6.wasm",
        "hash": "sha256-r7SviRDAoTe0rr9Q89W4URwYrJq04JGZBoJ0vqJLC8E=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 565328,
        "virtualPath": "System.Linq.Expressions.wasm",
        "name": "System.Linq.Expressions.n41xe2ryrc.wasm",
        "hash": "sha256-CTZWQouDAOXL9XdGuauGhR3jeCWxTWsboitXmDC+EbE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 214608,
        "virtualPath": "System.Linq.Parallel.wasm",
        "name": "System.Linq.Parallel.artponc2ej.wasm",
        "hash": "sha256-GonG7gz4bASIdTqRbD8LSrscWeQQg+hNOM/7+ip1TcY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 71248,
        "virtualPath": "System.Linq.Queryable.wasm",
        "name": "System.Linq.Queryable.k8bsq7khvl.wasm",
        "hash": "sha256-HIJkEg4JsVyOmB7Y0IDxuu8MQS/E3rvxxaYw/AysfGQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 202832,
        "virtualPath": "System.Linq.wasm",
        "name": "System.Linq.f19ujuufop.wasm",
        "hash": "sha256-Q1QRLFDJTSMu1ewSLUZOhfD3N6Fm4S8OGfxPKigEEv8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 49232,
        "virtualPath": "System.Memory.wasm",
        "name": "System.Memory.sd2ia0bwf7.wasm",
        "hash": "sha256-cCm6Dtk4fdC1Q2/8u4s+h1pnVCavZ2MwITVj7vUxqjM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 45648,
        "virtualPath": "System.Net.Http.Json.wasm",
        "name": "System.Net.Http.Json.dq857lfdvn.wasm",
        "hash": "sha256-izkTzssXS8SE8cDPhbVoEyNvw6y1b0n4vIez541BYSo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 293456,
        "virtualPath": "System.Net.Http.wasm",
        "name": "System.Net.Http.6mwm119jsn.wasm",
        "hash": "sha256-Yhx9MgS2xKz0UKzsBVcaLezDloNZh/343ndrUmlXoC8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 45648,
        "virtualPath": "System.Net.HttpListener.wasm",
        "name": "System.Net.HttpListener.qs5rcptr5q.wasm",
        "hash": "sha256-GnaDjThwb6M1Y0+8KUJrc1wjO0yQqcoyRXB3nypDjQk=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 126032,
        "virtualPath": "System.Net.Mail.wasm",
        "name": "System.Net.Mail.2qkr8oo87k.wasm",
        "hash": "sha256-qomCB6dhOxNo+OIW0vSOI1vpc7DUXZIKNtQl9+WXPOU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 21072,
        "virtualPath": "System.Net.NameResolution.wasm",
        "name": "System.Net.NameResolution.kh7yawkyez.wasm",
        "hash": "sha256-aOT439tB0PxOhs1LKc6QBbUFjxgyOMX8Jm+ndJiLkIU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 31824,
        "virtualPath": "System.Net.NetworkInformation.wasm",
        "name": "System.Net.NetworkInformation.yx35gxep4c.wasm",
        "hash": "sha256-yghon0b8XCqRDrFQntM0qC0NuJckdqE7ODqHlAc8B8U=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 17488,
        "virtualPath": "System.Net.Ping.wasm",
        "name": "System.Net.Ping.muwpl3zs1q.wasm",
        "hash": "sha256-jsPjot9/P7hbItIAigzN5FiRCWalSYLdeMGyqVWCz1U=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 97872,
        "virtualPath": "System.Net.Primitives.wasm",
        "name": "System.Net.Primitives.vombk4hh5u.wasm",
        "hash": "sha256-YUQ9slwh9PrDU0fwC0MBwDD85FeN3CIXBY+Iy/s5BPU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 28752,
        "virtualPath": "System.Net.Quic.wasm",
        "name": "System.Net.Quic.plar32ds3a.wasm",
        "hash": "sha256-bWlD9jfVuwh5eOm6+yORkBPN4tPFtNb0L5byzCsLH+A=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 55376,
        "virtualPath": "System.Net.Requests.wasm",
        "name": "System.Net.Requests.h7z4ni9mer.wasm",
        "hash": "sha256-PZq7vu6f/XED4vsQST0/IWo+05yRd1uNyLaKcs5nYJQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 113744,
        "virtualPath": "System.Net.Security.wasm",
        "name": "System.Net.Security.2bvygnn7bw.wasm",
        "hash": "sha256-AjFv2cVSgQeNo3SfTGd3MB4rjLA3jTNGTde9Gf8sNJ4=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 31312,
        "virtualPath": "System.Net.ServerSentEvents.wasm",
        "name": "System.Net.ServerSentEvents.f96swu5tbp.wasm",
        "hash": "sha256-s/bew2wi+ZZdJmGTwr4+wiEMpK3DUlYHcWmIHXitsI4=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Net.ServicePoint.wasm",
        "name": "System.Net.ServicePoint.avomq9uck9.wasm",
        "hash": "sha256-mtqOHjSwOCfMC1O7CNvL0BMwF3R0UKcbd5d2VxIDS8s=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 64080,
        "virtualPath": "System.Net.Sockets.wasm",
        "name": "System.Net.Sockets.s9t07ldwkj.wasm",
        "hash": "sha256-0MDg6OxQ1BC16fxnjKNsIAu3mtCez+SUJ9iZez4rNMc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 46672,
        "virtualPath": "System.Net.WebClient.wasm",
        "name": "System.Net.WebClient.im5eo8l2ps.wasm",
        "hash": "sha256-+hs4F4WEANclbMv1kHereQFc2IKohFkWt/hWmD6PYQU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 22608,
        "virtualPath": "System.Net.WebHeaderCollection.wasm",
        "name": "System.Net.WebHeaderCollection.t1ah6qf7o3.wasm",
        "hash": "sha256-IWvU2Lz8UJIlsXw5gT+HGK/O/O2HVM72Jo8+cXmPXU4=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 11856,
        "virtualPath": "System.Net.WebProxy.wasm",
        "name": "System.Net.WebProxy.18i5fv3tcf.wasm",
        "hash": "sha256-f1mP6hxYluacSdWCw7COJGRYsRpCGMEZx+9qoAeWoIo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 41552,
        "virtualPath": "System.Net.WebSockets.Client.wasm",
        "name": "System.Net.WebSockets.Client.9f6hu7da6d.wasm",
        "hash": "sha256-OxtMN6Gdsv3EjfHKuclj8575MGFxtyblT05AVKofFvw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 100432,
        "virtualPath": "System.Net.WebSockets.wasm",
        "name": "System.Net.WebSockets.arr1vjj5a2.wasm",
        "hash": "sha256-OqLi2bv62ly9zCPvVVFVlZRkdLJhgw+t/EU+jCwcrLk=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6736,
        "virtualPath": "System.Net.wasm",
        "name": "System.Net.59zgridvbp.wasm",
        "hash": "sha256-h9az+3Rhc8mzycHxys0xbwZsdYP6MkDLxIlvXYuzSRQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Numerics.Vectors.wasm",
        "name": "System.Numerics.Vectors.z830qt8m6u.wasm",
        "hash": "sha256-c/4uX1bhibo3xePUwFEb4rMvKoXNivZ/26VD+/sB98g=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Numerics.wasm",
        "name": "System.Numerics.bcyop4b5h4.wasm",
        "hash": "sha256-2/yaohedPQ5bCKx1VLhN2262VeCT3pK1ioKRXEsuOOo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 30800,
        "virtualPath": "System.ObjectModel.wasm",
        "name": "System.ObjectModel.3s0ut8rb6q.wasm",
        "hash": "sha256-cyxjeVh1KbZjQlb/vnHeq4ac4+Sc3d+96L15UzeOH5E=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 848976,
        "virtualPath": "System.Private.DataContractSerialization.wasm",
        "name": "System.Private.DataContractSerialization.38ua993htj.wasm",
        "hash": "sha256-fWu59c9+/EWAecbKJk5VUKqelXbGspveiKOAohWGphQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 92752,
        "virtualPath": "System.Private.Uri.wasm",
        "name": "System.Private.Uri.v4ol1rtbde.wasm",
        "hash": "sha256-kRXhxyOEsAf7LeZBAXTP7Vvm6K+rfXyXlEkx7WAexJk=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 144464,
        "virtualPath": "System.Private.Xml.Linq.wasm",
        "name": "System.Private.Xml.Linq.wuoc5v4sh0.wasm",
        "hash": "sha256-KLYQuUksK+GIp+yOklVX615+xFBiEMiOhJ/9fVgjk5Q=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 3108944,
        "virtualPath": "System.Private.Xml.wasm",
        "name": "System.Private.Xml.fp4zaub86i.wasm",
        "hash": "sha256-bcvBIw1H+BW8TJbzRKeQNXCEBxBLoOLykHDOxgYvglE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 27728,
        "virtualPath": "System.Reflection.DispatchProxy.wasm",
        "name": "System.Reflection.DispatchProxy.hggj1vhmoq.wasm",
        "hash": "sha256-EedaKjMTQj03vcds5hMcYsvO73O/ZHGECY01YS4Snvc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Reflection.Emit.ILGeneration.wasm",
        "name": "System.Reflection.Emit.ILGeneration.av2xg7eljo.wasm",
        "hash": "sha256-Osey+/FQaJSdajIjDlp9I5y74k86y2Wrdv7tHD6tfuw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Reflection.Emit.Lightweight.wasm",
        "name": "System.Reflection.Emit.Lightweight.aoigrzr3cw.wasm",
        "hash": "sha256-ipnR6JE8i80uKfsLESnyMM4KxUMX1VGWiw8jbXJXUmc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 123984,
        "virtualPath": "System.Reflection.Emit.wasm",
        "name": "System.Reflection.Emit.q2mzxse9m4.wasm",
        "hash": "sha256-ftQlZVYHATOtKpUYUNY1Pb2bOj1qgpJCu8xOCtlUiWs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Reflection.Extensions.wasm",
        "name": "System.Reflection.Extensions.fa23bd7lqs.wasm",
        "hash": "sha256-Vx2VZS3bxj4EBHByft11T2GrIC7roPk8swAGE1+5u4Y=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 494160,
        "virtualPath": "System.Reflection.Metadata.wasm",
        "name": "System.Reflection.Metadata.7mkbhsbr9s.wasm",
        "hash": "sha256-4bHK2VYDLJjN0+b8NObT6libpN3rQQbsU2G09WYUcws=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Reflection.Primitives.wasm",
        "name": "System.Reflection.Primitives.1dccmvfi9m.wasm",
        "hash": "sha256-axSm6tmr65DsZowSFfBT/oUrCr/OHEMPEkAfRhTpzRQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 13904,
        "virtualPath": "System.Reflection.TypeExtensions.wasm",
        "name": "System.Reflection.TypeExtensions.1tov2ltkpt.wasm",
        "hash": "sha256-VRVIIYaQ4AxxjRF3iMCqLOoMrZyRFcp0g6UKNA3QJlI=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Reflection.wasm",
        "name": "System.Reflection.q12w300e27.wasm",
        "hash": "sha256-oso2dJrLw2zsdEBAHVnPZwC5owFH2jTL470DSOPjJWA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Resources.Reader.wasm",
        "name": "System.Resources.Reader.yabbxcdvow.wasm",
        "hash": "sha256-+g5rAOWTTikmIS/HGKQtYeT55agC8wzHsh4XBtsQ3eY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Resources.ResourceManager.wasm",
        "name": "System.Resources.ResourceManager.m0rqvh6qti.wasm",
        "hash": "sha256-Rk6Ug0az+484ZXmcMN172HuLxwUC68UC25L6DE8ZWpE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 16464,
        "virtualPath": "System.Resources.Writer.wasm",
        "name": "System.Resources.Writer.dju9zf3yzg.wasm",
        "hash": "sha256-J67j6G2Y1pGsmfyySsqgBg+t1QgyLHQHyhemb8QZV0g=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Runtime.CompilerServices.Unsafe.wasm",
        "name": "System.Runtime.CompilerServices.Unsafe.17gk4z1u9g.wasm",
        "hash": "sha256-/Q4dF9NeWR4vWS3L7XqeaEgYMRlpC9pcqL2dFiOIIso=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6736,
        "virtualPath": "System.Runtime.CompilerServices.VisualC.wasm",
        "name": "System.Runtime.CompilerServices.VisualC.60uys9qr74.wasm",
        "hash": "sha256-Zox1RHGNSogSAGCVlVYeUhbNI+P8pMGAPwOk4q1bqt0=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 7248,
        "virtualPath": "System.Runtime.Extensions.wasm",
        "name": "System.Runtime.Extensions.rcimf2oako.wasm",
        "hash": "sha256-lULO7HrEC2i6pNRVLbquRA6kMlgd6bBZBt67RIucOVw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Runtime.Handles.wasm",
        "name": "System.Runtime.Handles.7sjhdc5cgy.wasm",
        "hash": "sha256-Z6uXePs1zEBFO9awzydA5w79W+CwVRMgKuHRIKOK78g=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Runtime.InteropServices.RuntimeInformation.wasm",
        "name": "System.Runtime.InteropServices.RuntimeInformation.1bza4ik7lh.wasm",
        "hash": "sha256-wyKYktMWHdnOExg5EyWuUO2oDJxex4T+sUjlsjWHjrU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 53840,
        "virtualPath": "System.Runtime.InteropServices.wasm",
        "name": "System.Runtime.InteropServices.zuscf5g2xj.wasm",
        "hash": "sha256-G0CZ7sgqgZI+j/Tn4t+F6pyBoocctpvILNkZZ5v9LoY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 8272,
        "virtualPath": "System.Runtime.Intrinsics.wasm",
        "name": "System.Runtime.Intrinsics.7si5zryyu5.wasm",
        "hash": "sha256-V91Kw7d/zSgAjiYhhZ1uQRiPGHgvTdTn07MaT/LB4Y0=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Runtime.Loader.wasm",
        "name": "System.Runtime.Loader.e6lvu1ncdn.wasm",
        "hash": "sha256-9m6wFpLPowFBs+yRZzraNJcmlAZz227NluGwirj1Zv8=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 180304,
        "virtualPath": "System.Runtime.Numerics.wasm",
        "name": "System.Runtime.Numerics.3shzrfmz4k.wasm",
        "hash": "sha256-w/s+WwYoVx51LDe1viYH4dMwR3vBcscNQsr640nlruc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 55376,
        "virtualPath": "System.Runtime.Serialization.Formatters.wasm",
        "name": "System.Runtime.Serialization.Formatters.nju4wyey06.wasm",
        "hash": "sha256-o7vAXWMqHUknnTIo0n+E3ZB+3DFJOyTBNc5Y7m83kvo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Runtime.Serialization.Json.wasm",
        "name": "System.Runtime.Serialization.Json.agi6ki424s.wasm",
        "hash": "sha256-6n4xa6sE1DgCZ0Y546iGA7z9AWm/+6aZ733fhLUYRbc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 12880,
        "virtualPath": "System.Runtime.Serialization.Primitives.wasm",
        "name": "System.Runtime.Serialization.Primitives.srgw2cri1f.wasm",
        "hash": "sha256-6D5uHYBy8sB9ykKDl/e0L2ArfGpT6AeIJIx6fFBP+68=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6224,
        "virtualPath": "System.Runtime.Serialization.Xml.wasm",
        "name": "System.Runtime.Serialization.Xml.0fyen4f7o8.wasm",
        "hash": "sha256-RKNflTci+BzrAYiC7WrvuMvMut+YFc3YMEGFss929hA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6736,
        "virtualPath": "System.Runtime.Serialization.wasm",
        "name": "System.Runtime.Serialization.n5hs1742fh.wasm",
        "hash": "sha256-Jd0rQcUX7irq8zXj6Gmnmp65shwRNYQwM/2KTNRp8AU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 35408,
        "virtualPath": "System.Runtime.wasm",
        "name": "System.Runtime.5w6gkcyihl.wasm",
        "hash": "sha256-5WpRz1HLMuZCVxfX2c/ttv762yiiY5ebsyc483VyCsg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 47184,
        "virtualPath": "System.Security.AccessControl.wasm",
        "name": "System.Security.AccessControl.ossuwh5iwe.wasm",
        "hash": "sha256-SMFSGAKyvRQjY2Pz+FqKiLw6n8z3g/mwoURnIDYXJTU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 44112,
        "virtualPath": "System.Security.Claims.wasm",
        "name": "System.Security.Claims.oowq5l1vmw.wasm",
        "hash": "sha256-+JCha7PubjQb4oZjjfAUpy3Nxxa1NRdl9X/9bfU+T2I=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6736,
        "virtualPath": "System.Security.Cryptography.Algorithms.wasm",
        "name": "System.Security.Cryptography.Algorithms.6xy0fsvtpc.wasm",
        "hash": "sha256-NsAbL8lYxuLVKSLYCfRj+wfFolP3o2xvWCPfzkd3WhU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Security.Cryptography.Cng.wasm",
        "name": "System.Security.Cryptography.Cng.olpon4qk3j.wasm",
        "hash": "sha256-nD4tR0TpvdE46EFdm74rP7CSCjJ4Nuxq1XFzlsAt5NE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Security.Cryptography.Csp.wasm",
        "name": "System.Security.Cryptography.Csp.qxvp864np2.wasm",
        "hash": "sha256-ErK7MmCshVi+9d/2bR/V4gCGfBk66Ebbs8dcgKy1NZM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Security.Cryptography.Encoding.wasm",
        "name": "System.Security.Cryptography.Encoding.5moebyhxlk.wasm",
        "hash": "sha256-44gWRMCgvKWzjRcWCfyAGYMCSSFlpSwo2BjUsdiyRds=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Security.Cryptography.OpenSsl.wasm",
        "name": "System.Security.Cryptography.OpenSsl.2933n6ubnu.wasm",
        "hash": "sha256-yt0gZcc+b9LHUC8oHYFgJbQluE764VN40lkY5wCHhsk=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Security.Cryptography.Primitives.wasm",
        "name": "System.Security.Cryptography.Primitives.lh7v2t9mpe.wasm",
        "hash": "sha256-V+LPXFQ0FsDC1BeipenmyShOQuoUbdj1W4U2oZntH+w=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6736,
        "virtualPath": "System.Security.Cryptography.X509Certificates.wasm",
        "name": "System.Security.Cryptography.X509Certificates.cxadkbl6fq.wasm",
        "hash": "sha256-cBcYH3G4J67hGIc+y70E66lb+Z1WLuinaLuAfe+TuCo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 714320,
        "virtualPath": "System.Security.Cryptography.wasm",
        "name": "System.Security.Cryptography.2pc68xlawk.wasm",
        "hash": "sha256-On5UnEUMPxP2r0OlGFa4r8qHTtEb2rIIdl/Fc7Stt88=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 27216,
        "virtualPath": "System.Security.Principal.Windows.wasm",
        "name": "System.Security.Principal.Windows.9idexbfoes.wasm",
        "hash": "sha256-4fiyNeIBq9wZxyjo1BQHIllHysIgIKiMpeooh2UnNcY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Security.Principal.wasm",
        "name": "System.Security.Principal.w7aws2rzaa.wasm",
        "hash": "sha256-RLDa2g9Z1MqIjOSvd1hEK+HkYmVumK8ulljBrJnmuRM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Security.SecureString.wasm",
        "name": "System.Security.SecureString.y5gozzjy7j.wasm",
        "hash": "sha256-KnkDbZhlGC6zFPnf1Y1XnbQ01Z2s8SXPHcgpQ5lLPlE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 7760,
        "virtualPath": "System.Security.wasm",
        "name": "System.Security.jon9bopc6g.wasm",
        "hash": "sha256-I7vpXj3/4kkipWOiuNhYowpdGTjuZu6gyJxHEFcdLYA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6224,
        "virtualPath": "System.ServiceModel.Web.wasm",
        "name": "System.ServiceModel.Web.y7gpuhblui.wasm",
        "hash": "sha256-XtBOsgwFg444A5uHiyzsA/PQghfiJkuWkR8zUrBMVgg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.ServiceProcess.wasm",
        "name": "System.ServiceProcess.garkdfegun.wasm",
        "hash": "sha256-2I+Tna34A6WA1A+GzJkQmsvc2aesa5D4v4BG2Pjb8DM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 731728,
        "virtualPath": "System.Text.Encoding.CodePages.wasm",
        "name": "System.Text.Encoding.CodePages.z82mlzpgua.wasm",
        "hash": "sha256-4+WQHXAvnvI1Pu+5zMs3233lmTPd3L7IrJ/9D819gMM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Text.Encoding.Extensions.wasm",
        "name": "System.Text.Encoding.Extensions.qurpinagmh.wasm",
        "hash": "sha256-vvjGB5X87GiO9BwAq7vnmOZ1bHSmY3MSVTnBb7+kfBc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Text.Encoding.wasm",
        "name": "System.Text.Encoding.oywpkvj6ya.wasm",
        "hash": "sha256-4GwVKtGs7ajdN+Ff4/UzJMTxNIMX21+XgBDKL/KW0sc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 55888,
        "virtualPath": "System.Text.Encodings.Web.wasm",
        "name": "System.Text.Encodings.Web.f91zxu6gqb.wasm",
        "hash": "sha256-I0qqJP7Lc3kMJghKScTLAVqr53Yl1QFy0+33J1+0rJs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 726608,
        "virtualPath": "System.Text.Json.wasm",
        "name": "System.Text.Json.e2t9laf3vi.wasm",
        "hash": "sha256-ZkhvTdmEiQcpZ0zNZxw9jtjrX8huxaHkqKDBsyV2Puc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 384592,
        "virtualPath": "System.Text.RegularExpressions.wasm",
        "name": "System.Text.RegularExpressions.7znzn92td9.wasm",
        "hash": "sha256-I/8Sx/SIRkIN8ssk49xZJZz9C4mg5FBoXu7js5bOMtY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 23120,
        "virtualPath": "System.Threading.AccessControl.wasm",
        "name": "System.Threading.AccessControl.fy4j5flagd.wasm",
        "hash": "sha256-1zCM7nC1YN0GulHE8BHzuRZK8xB+W7cR7zeSm1PzKBM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 55888,
        "virtualPath": "System.Threading.Channels.wasm",
        "name": "System.Threading.Channels.eugiivx7s8.wasm",
        "hash": "sha256-OtzqB5aqeef10oFz1oWJhI8OgiF5XMo2nG1Y5Ov5Dao=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Threading.Overlapped.wasm",
        "name": "System.Threading.Overlapped.2wgaz7f1oq.wasm",
        "hash": "sha256-AiPzzNzyuzcdrU1b6/rD3kA1WclBW2qGt1zKBAhoXuk=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 175696,
        "virtualPath": "System.Threading.Tasks.Dataflow.wasm",
        "name": "System.Threading.Tasks.Dataflow.cpry5l8io3.wasm",
        "hash": "sha256-wFkF3YAwoFoAGrFVgA8G75mB/m5r6sIBEUfM6XDsl2Y=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Threading.Tasks.Extensions.wasm",
        "name": "System.Threading.Tasks.Extensions.bkwsz2nel8.wasm",
        "hash": "sha256-285R7coupZtrX1Au0X7nq0X6XakgoXG1LA0QMxYPxLM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 51280,
        "virtualPath": "System.Threading.Tasks.Parallel.wasm",
        "name": "System.Threading.Tasks.Parallel.066c5dze6q.wasm",
        "hash": "sha256-yCyIMOULNaG7MARGqFrBKBIBPkxEDkw4MKzJWiuk+yg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6224,
        "virtualPath": "System.Threading.Tasks.wasm",
        "name": "System.Threading.Tasks.80dyk1w0qg.wasm",
        "hash": "sha256-qFHA4zUtKpLCdjRdWvkKwsGjzxI5j1/gRZQrzOk8eFA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Threading.Thread.wasm",
        "name": "System.Threading.Thread.jvig5aaqo2.wasm",
        "hash": "sha256-cY9ANCTQ43eFJduCGINsgwSbLXx30jn8oufiEZVF5CE=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Threading.ThreadPool.wasm",
        "name": "System.Threading.ThreadPool.p8ago1cxdx.wasm",
        "hash": "sha256-J6ymdqWtgWbruVYpYtYxa6nYEQP4/hYKXs8UfcB2GIo=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Threading.Timer.wasm",
        "name": "System.Threading.Timer.tx1w4q6e8o.wasm",
        "hash": "sha256-LyJ0mmpSF/DlmJ6M0DcRBix1zkE6X5agh9tMKtKtp8Q=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 34384,
        "virtualPath": "System.Threading.wasm",
        "name": "System.Threading.ure5gs6hbb.wasm",
        "hash": "sha256-CnrLQ30k5Xsbz+RdAp+Y194xTgh+9ZC2E3lNcRzSdLs=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 164432,
        "virtualPath": "System.Transactions.Local.wasm",
        "name": "System.Transactions.Local.op3xiby7pr.wasm",
        "hash": "sha256-9DBtq0wvp+msgJQRHcBDhRHbTS564+HnQ2N8RDg3rdc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 6224,
        "virtualPath": "System.Transactions.wasm",
        "name": "System.Transactions.12zo4oc3g4.wasm",
        "hash": "sha256-h9SI4lHsBBefkAvFNeVbRFyZFcWnOiy3ZZM1MUjm6UM=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.ValueTuple.wasm",
        "name": "System.ValueTuple.u5klx3862i.wasm",
        "hash": "sha256-UgZVi+Y/q1RhNzRIesiEugzTe/xKDSxH5Fg1IfpHATQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 19536,
        "virtualPath": "System.Web.HttpUtility.wasm",
        "name": "System.Web.HttpUtility.fc55kuxd4b.wasm",
        "hash": "sha256-T8ZdTrycrNYB2ZDBy6LAguQKxwLQ/u44TmN8CiKFSZY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 4688,
        "virtualPath": "System.Web.wasm",
        "name": "System.Web.o5ka406s59.wasm",
        "hash": "sha256-jGgQsI0MS2AOcd+C5ztZOqU+1IrvOmC4tQ+fX4lUYJg=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Windows.wasm",
        "name": "System.Windows.1x8qke6ypz.wasm",
        "hash": "sha256-pRtMaIZmB80DCiuc1lpnPv8qZuhakYyMxViNgdu9YNI=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Xml.Linq.wasm",
        "name": "System.Xml.Linq.l3we2gsx2f.wasm",
        "hash": "sha256-/+OtFF7ASILm7vfcYyekomePPgAw/wuWVTGRwr96f9E=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 11344,
        "virtualPath": "System.Xml.ReaderWriter.wasm",
        "name": "System.Xml.ReaderWriter.rt9eytwjqj.wasm",
        "hash": "sha256-wSBDk/TNqQ/evneflS+LCdM2lldQYtz7KyZfW8klEDQ=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Xml.Serialization.wasm",
        "name": "System.Xml.Serialization.57qp0bgeiw.wasm",
        "hash": "sha256-HyPOcJ72yqqK8rZP3lHpReEn1MAdC2O7CFRwJjA3cww=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Xml.XDocument.wasm",
        "name": "System.Xml.XDocument.t1vr4ywzai.wasm",
        "hash": "sha256-Dx71M0wwny/zrQOt+2tRxaq/7DFMa26Wee2gsQ3iVNw=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "System.Xml.XPath.XDocument.wasm",
        "name": "System.Xml.XPath.XDocument.swvmw6g04p.wasm",
        "hash": "sha256-DENdTTHL+rMEDaVHWMu4yP/Rio9Yv4AkVAql8RR8G0c=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Xml.XPath.wasm",
        "name": "System.Xml.XPath.8r9l057gj9.wasm",
        "hash": "sha256-pMi4JwqVdvdVqV7FWDqqayFSuIsOIUWNxRY07Relb9I=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5200,
        "virtualPath": "System.Xml.XmlDocument.wasm",
        "name": "System.Xml.XmlDocument.xxoez0vgf3.wasm",
        "hash": "sha256-O5eSZi7uBmTOYeHMKFP1ThRGNtkslFV1/Pjg3sBR6NA=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 7248,
        "virtualPath": "System.Xml.XmlSerializer.wasm",
        "name": "System.Xml.XmlSerializer.iaffup8kxg.wasm",
        "hash": "sha256-1qITuL4EyIubJMN4mdHRI7KvihbcBqWNYODEqmNwOGc=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 12880,
        "virtualPath": "System.Xml.wasm",
        "name": "System.Xml.ps711g2o34.wasm",
        "hash": "sha256-RyFEq/olFQDnTnY4KN93CQOXJiL1+8wdobgnvwC/8Js=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 39504,
        "virtualPath": "System.wasm",
        "name": "System.g06kn563ct.wasm",
        "hash": "sha256-kNl5m6RKpfCLBvaTLOVPagDKfb9ECRAPfwM8jz4jw7c=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 62544,
        "virtualPath": "UnionValidationApp.Client.wasm",
        "name": "UnionValidationApp.Client.epziooq472.wasm",
        "hash": "sha256-Qp1D158qXitT7olHmE8TOOIkUCsxUnGo37eTtsBVYNU=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 5712,
        "virtualPath": "WindowsBase.wasm",
        "name": "WindowsBase.q440p15iwg.wasm",
        "hash": "sha256-Fr5Iuffcpa6Y7Fj9CblMNFxvb4vaYNSyrDPpdvXb1VY=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 49232,
        "virtualPath": "mscorlib.wasm",
        "name": "mscorlib.znpx4m3gab.wasm",
        "hash": "sha256-0TPwwtFt1NmOIR9kyc6HVfBuWKErnAOn6p+LWblcJo0=",
        "cache": "force-cache"
      },
      {
        "payloadSize": 90704,
        "virtualPath": "netstandard.wasm",
        "name": "netstandard.tfipahszrw.wasm",
        "hash": "sha256-Zyj1VWRbYXWW4pUiPleb+1T1UqAyPt8Un6M7JUDZZ6A=",
        "cache": "force-cache"
      }
    ]
  },
  "debugLevel": 0,
  "appsettings": [
    "../appsettings.Development.json",
    "../appsettings.json"
  ],
  "globalizationMode": "sharded",
  "extensions": {
    "blazor": {}
  },
  "runtimeConfig": {
    "runtimeOptions": {
      "configProperties": {
        "Microsoft.AspNetCore.Components.Routing.RegexConstraintSupport": false,
        "System.Diagnostics.Debugger.IsSupported": false,
        "System.Diagnostics.Metrics.Meter.IsSupported": true,
        "System.Diagnostics.Tracing.EventSource.IsSupported": true,
        "System.GC.Server": true,
        "System.Globalization.Invariant": false,
        "System.TimeZoneInfo.Invariant": false,
        "System.Linq.Enumerable.IsSizeOptimized": true,
        "System.Net.Http.EnableActivityPropagation": true,
        "System.Net.Http.WasmEnableStreamingResponse": true,
        "System.Net.SocketsHttpHandler.Http3Support": false,
        "System.Reflection.Metadata.MetadataUpdater.IsSupported": false,
        "System.Resources.UseSystemResourceKeys": true,
        "System.Runtime.Serialization.EnableUnsafeBinaryFormatterSerialization": false,
        "System.Text.Encoding.EnableUnsafeUTF7Encoding": false,
        "System.Text.Json.JsonSerializer.IsReflectionEnabledByDefault": true,
        "Microsoft.AspNetCore.Components.Endpoints.NavigationManager.DisableThrowNavigationException": true,
        "System.Diagnostics.StackTrace.IsLineNumberSupported": false,
        "System.Runtime.CompilerServices.RuntimeFeature.IsMultithreadingSupported": false
      }
    }
  }
}/*json-end*/);export{po as default,mo as dotnet,go as exit};
