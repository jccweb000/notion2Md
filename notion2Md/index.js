import notion2Md from './nation2Md.js';

const pageId = "6782f2a7b4984f5c978ac30b626932ca";
const TOKEN = "secret_Ws38TbFvOCbo2AQDLZp1Tqke7nqUiVgUV9NfNFBkVXq";

notion2Md({ id: pageId, TOKEN, includePages: false });

