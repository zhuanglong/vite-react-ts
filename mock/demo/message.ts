import { MockMethod } from 'vite-plugin-mock';

import { resultSuccess } from '../_util';

export default [
  {
    url: '/dev-api/message/list',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({
        code: 0,
        'data|5-10': [
          {
            id: '@id',
            title: '@ctitle',
            content: '@cparagraph',
            image: "@image('200x100', '#4A7BF7', 'Hello')",
            date: '@datetime',
          },
        ],
      });
    },
  },
  {
    url: '/dev-api/message/demo',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({
        code: 0,
        'data|5-10': [
          {
            id: '@id',
            title: '@ctitle',
            content: '@cparagraph',
            image: "@image('200x100', '#4A7BF7', 'Hello')",
            date: '@datetime',
          },
        ],
      });
    },
  },
] as MockMethod[];
