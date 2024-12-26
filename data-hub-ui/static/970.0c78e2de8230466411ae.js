"use strict";(self.webpackChunk_zjlab_fe_data_hub_ui=self.webpackChunk_zjlab_fe_data_hub_ui||[]).push([[970],{6970:(n,o,r)=>{r.r(o),r.d(o,{default:()=>e});const e="import React, { useState } from 'react';\r\nimport ConfirmAgain from '@/components/confirm-again';\r\nimport { Button } from 'antd';\r\n\r\nexport default function Demo() {\r\n  const [open, setOpen] = useState(false);\r\n  const openModal = function () {\r\n    setOpen(true);\r\n  };\r\n  const handleOk = function () {\r\n    console.log('ok');\r\n  };\r\n  const handleCancel = function () {\r\n    console.log('cancel');\r\n    setOpen(false);\r\n  };\r\n  const openFunModal = function () {\r\n    ConfirmAgain.confirm({\r\n      title: '命令式-二次确认弹窗',\r\n      content: 'xxxxxxxx',\r\n      onOk: () => {\r\n        console.log('ok');\r\n      },\r\n      onCancel: () => {\r\n        console.log('cancel');\r\n      },\r\n      open: true,\r\n    });\r\n  };\r\n  return (\r\n    <>\r\n      <h1>二次确认弹窗使用方法</h1>\r\n      <h3>1. 组件式</h3>\r\n      <Button onClick={() => openModal()}>打开</Button>\r\n      <ConfirmAgain title=\"组件式-二次确认弹窗\" open={open} onOk={handleOk} onCancel={handleCancel}>\r\n        <div>xxxxxxxx</div>\r\n      </ConfirmAgain>\r\n      <h3>2. 命令式</h3>\r\n      <Button onClick={() => openFunModal()}>打开</Button>\r\n    </>\r\n  );\r\n}\r\n"}}]);