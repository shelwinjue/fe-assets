"use strict";(self.webpackChunk_zjlab_fe_data_hub_ui=self.webpackChunk_zjlab_fe_data_hub_ui||[]).push([[666],{29666:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});const t="import React, { useState } from 'react';\r\nimport InputTag, { IProps } from '@/components/input-tag';\r\nexport default function Demo() {\r\n  const [value, setValue] = useState(['abc', 'def']);\r\n  const onChange: IProps['onChange'] = (v) => {\r\n    console.log('+++ value', v);\r\n    setValue(v as string[]);\r\n  };\r\n  return <InputTag valueType=\"array\" value={value} onChange={onChange} maxLength={5} placeholder=\"标签\" />;\r\n}\r\n"}}]);