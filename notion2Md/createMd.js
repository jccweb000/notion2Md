import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from 'fs-extra';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

var internalCreateMd = (pageId, slug, n2m) => {
  return new Promise((resolve, reject) => {
    n2m.pageToMarkdown(pageId).then(data => {
      const mdString = n2m.toMarkdownString(data);

      fs.outputFile(`${path.resolve(__dirname, `../Docs/${slug}.md`)}`, mdString.parent, function (err) {
        try {
          if (err) {
            console.log('err');
            reject();
          }
          resolve(true);
        } catch (_) {}
      })
    })
  })
}

export default function createMd ({
  TOKEN,
  list = []
}) {
  if (!list.length || !TOKEN) return;

  const notion = new Client({
    auth: TOKEN,
  });
  
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const promiseList = [];
  for (var i = 0; i < list.length; i++) {
    promiseList.push(internalCreateMd(list[i].id, list[i].slug, n2m))
  }

  return new Promise((resolve, reject) => {
    console.log('Clear Docs');
    fs.emptyDir("../Docs", function (err) {
      if (err) {
        console.log('Clear Docs Failed!:', err);
        return;
      }
      console.log('Create Docs...');
      Promise.all(promiseList).then(res => {
        console.log('Create Docs Success!');
        resolve(true);
      }).catch((err) => {
        console.log('Create Docs Failed!:', err);
        reject();
      })
    })
  })
}