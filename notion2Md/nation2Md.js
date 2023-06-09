import { idToUuid } from "notion-utils";
import api from './server.js';
import dayjs from "dayjs";
import fs from 'fs-extra';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import getAllPageIds from './getAllPageIds.js';
import getPageProperties from './getPageProperties.js';
import filterPublishedPosts from './filterPublishedPosts.js';
import getSidebar from './getSidebar.js';
import createMd from './createMd.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

function findFirstLink (list) {
  if (!list || list.length === 0) return undefined;
  const first = list[0];
  return first.link || findFirstLink(first.items);
}

export default async ({ id, TOKEN, includePages = true }) => {
  const uid = idToUuid(id);
  const response = await api.getPage(uid);
  console.log('response', response);

  const collection = Object.values(response.collection)[0]?.value
  const collectionQuery = response.collection_query
  const block = response.block
  const schema = collection?.schema

  const rawMetadata = block[uid].value

  // console.log('rawMetadata', rawMetadata);

  if (
    rawMetadata?.type !== 'collection_view_page' &&
    rawMetadata?.type !== 'collection_view'
  ) {
    console.log(`pageId "${uid}" is not a database`)
    return null
  } else {
    // Construct Data
    const pageIds = getAllPageIds(collectionQuery)
    const data = []
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i]
      const properties = (await getPageProperties(id, block, schema)) || null
      console.log('properties', properties);

      properties.fullWidth = block[id].value?.format?.page_full_width ?? false
      properties.date = (
        properties.date?.start_date
          ? dayjs.tz(properties.date?.start_date)
          : dayjs(block[id].value?.created_time)
      ).valueOf()

      data.push(properties)
    }

    const posts = filterPublishedPosts({ posts: data, includePages })

    const createMdFlag = await createMd({
      list: posts,
      TOKEN
    });
    if (createMdFlag) {
      var sideConfig = getSidebar(posts);
      const firstLink = findFirstLink(sideConfig);
      const stringCfgJS = {"config": sideConfig, "redirectPath": firstLink };
      fs.writeJson(`${path.resolve(__dirname, '../config/index.json')}`, stringCfgJS, function (err) {
        if (err) {
          console.log('err', err);
          return;
        }
        console.log('配置写入成功!');
      })
    }
  }
}
