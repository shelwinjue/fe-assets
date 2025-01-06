"use strict";(self.webpackChunk_zjlab_fe_data_hub_ui=self.webpackChunk_zjlab_fe_data_hub_ui||[]).push([[662],{40662:(e,n,r)=>{r.r(n),r.d(n,{default:()=>s});const s="import FilePreview from '@/components/file-preview';\r\nimport { useState } from 'react';\r\nimport { Tabs } from 'antd';\r\nimport type { TabsProps } from 'antd';\r\nexport default function Demo() {\r\n  const [show, setShow] = useState(true);\r\n\r\n  const fileMap = {\r\n    // 'xlsx/csv': 'https://shelwinjue.github.io/fe-assets/test.xlsx',\r\n    'xlsx/csv': 'https://shelwinjue.github.io/fe-assets/method_Caledonian.csv',\r\n    pdf: 'https://shelwinjue.github.io/fe-assets/1.pdf',\r\n    image: 'https://shelwinjue.github.io/fe-assets/figure9.png',\r\n    markdown: 'https://shelwinjue.github.io/fe-assets/test.md',\r\n    txt: 'https://shelwinjue.github.io/fe-assets/test.txt',\r\n    json: 'https://shelwinjue.github.io/fe-assets/test.json',\r\n    // json: 'https://shelwinjue.github.io/fe-assets/jsonl.jsonl',\r\n  };\r\n  const items: TabsProps['items'] = [\r\n    {\r\n      key: 'xlsx/csv',\r\n      label: 'xlsx/csv',\r\n      children: (\r\n        <div style={{ width: '80%', height: '500px' }}>\r\n          <FilePreview\r\n            openInModal={false}\r\n            modalProps={{ show, onCancel: () => setShow(false) }}\r\n            filePath={fileMap['xlsx/csv']}\r\n          />\r\n        </div>\r\n      ),\r\n    },\r\n    {\r\n      key: 'pdf',\r\n      label: 'pdf',\r\n      children: (\r\n        <div style={{ width: '80%', height: '500px' }}>\r\n          <FilePreview\r\n            openInModal={false}\r\n            modalProps={{ show, onCancel: () => setShow(false) }}\r\n            filePath={fileMap['pdf']}\r\n          />\r\n        </div>\r\n      ),\r\n    },\r\n    {\r\n      key: 'image',\r\n      label: '图片',\r\n      children: (\r\n        <div style={{ width: '80%', height: '500px' }}>\r\n          <FilePreview\r\n            openInModal={false}\r\n            modalProps={{ show, onCancel: () => setShow(false) }}\r\n            filePath={fileMap['image']}\r\n          />\r\n        </div>\r\n      ),\r\n    },\r\n    {\r\n      key: 'markdown',\r\n      label: 'markdown',\r\n      children: (\r\n        <div style={{ width: '80%', height: '500px' }}>\r\n          <FilePreview\r\n            openInModal={false}\r\n            modalProps={{ show, onCancel: () => setShow(false) }}\r\n            filePath={fileMap['markdown']}\r\n          />\r\n        </div>\r\n      ),\r\n    },\r\n    {\r\n      key: 'txt',\r\n      label: 'txt',\r\n      children: (\r\n        <div style={{ width: '80%', height: '500px' }}>\r\n          <FilePreview\r\n            openInModal={false}\r\n            modalProps={{ show, onCancel: () => setShow(false) }}\r\n            filePath={fileMap['txt']}\r\n          />\r\n        </div>\r\n      ),\r\n    },\r\n    {\r\n      key: 'json',\r\n      label: 'json',\r\n      children: (\r\n        <div style={{ width: '80%', height: '500px' }}>\r\n          <FilePreview\r\n            openInModal={false}\r\n            modalProps={{ show, onCancel: () => setShow(false) }}\r\n            filePath={fileMap['json']}\r\n          />\r\n        </div>\r\n      ),\r\n    },\r\n  ];\r\n  return <Tabs items={items} destroyInactiveTabPane />;\r\n}\r\n"}}]);