const docsToRequire = require.context(__TKC_SRC__, true, /\.md$/);
const docsRequired = docsToRequire.keys().map(docsToRequire);

console.log('[TKC] Toolkit loaded');
console.log('[TKC] Docs to require', docsToRequire);
console.log('[TKC] Docs required', docsRequired);
