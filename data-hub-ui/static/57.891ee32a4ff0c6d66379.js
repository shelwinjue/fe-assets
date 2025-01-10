"use strict";(self.webpackChunk_zjlab_fe_data_hub_ui=self.webpackChunk_zjlab_fe_data_hub_ui||[]).push([[57],{23057:(r,e,n)=>{n.r(e),n.d(e,{default:()=>o});const o="# FileUploader 组件\r\n\r\n## 代码演示\r\n\r\n```code\r\n  <code src=\"@/components/FileUploader/demo/index.tsx\"></code>\r\n```\r\n\r\n## UploadStoreProvider 使用指南\r\n\r\n`UploadStoreProvider` 是一个用于管理文件上传状态的上下文提供者。它允许你在应用程序的任何地方访问和更新上传状态。\r\n***请在应用顶层使用***\r\n\r\n### 如何使用\r\n\r\n1. **导入 UploadStoreProvider**\r\n\r\n  在你的组件中导入 `UploadStoreProvider`：\r\n\r\n  ```jsx\r\n  import { UploadStoreProvider } from '@zjlab-lab/data-hub-ui';\r\n  ```\r\n\r\n2. **包裹你的组件**\r\n\r\n  使用 `UploadStoreProvider` 包裹需要访问上传状态的组件：\r\n\r\n  ```jsx\r\n  function App() {\r\n    return (\r\n      <UploadStoreProvider>\r\n        <YourComponent />\r\n      </UploadStoreProvider>\r\n    );\r\n  }\r\n  ```\r\n\r\n3. **设置语言环境**\r\n\r\n  `UploadStoreProvider` 提供了一个 `locale` 属性，用于设置应用的语言环境。你可以选择 `'zh'`（中文）或 `'en'`（英文）， 默认：`zh`\r\n\r\n  ```jsx\r\n  <UploadStoreProvider locale=\"en\">\r\n    <YourComponent />\r\n  </UploadStoreProvider>\r\n  ```\r\n\r\n## FileUploadModal 使用指南\r\n\r\n`FileUploadModal` 是一个用于文件上传的模态对话框组件。它依赖于 `UploadStoreProvider` 提供的上下文来管理上传状态，因此必须在 `UploadStoreProvider` 内部使用。\r\n\r\n### 如何使用\r\n\r\n1. **确保在 `UploadStoreProvider` 内使用**\r\n\r\n  `FileUploadModal` 需要在 `UploadStoreProvider` 内部使用，以便访问上传状态。如果没有在 `UploadStoreProvider` 内使用，将会显示一个警告信息。\r\n\r\n2. **导入 `FileUploadModal`**\r\n\r\n  在需要使用的组件中导入 `FileUploadModal`：\r\n\r\n  ```typescript\r\n  import { FileUploadModal } from '@zjlab-lab/data-hub-ui';\r\n  ```\r\n\r\n3. **配置 `FileUploadModal`**\r\n\r\n  `FileUploadModal` 接受多个配置参数：\r\n\r\n  - `config`: 包含 `modal` 和可选的 `dragArea` 配置。\r\n    - `modal`: `ModalProps`* 类型，用于配置模态对话框的属性。\r\n    - `dragArea`: 可选的 `FileDraggerProps`**，用于配置文件拖拽区域。\r\n  - `root`: 可选的字符串，表示根路径。\r\n  - `identifier`: 必须的字符串，用于标识上传。\r\n  - `showFinished`: 可选的布尔值，是否显示已完成的上传。\r\n  - `externalUploadContext`: 可选的 `FileInfo[]`，外部上传上下文。\r\n  - `onUploadSuccess`: 可选的回调函数，上传成功时调用。\r\n  - `extra`: 可选的 `React.ReactNode`，额外的节点。\r\n  - `getUploadUrls`: 一个函数，接受 `fileName` 和 `partCount`，返回 `UploadInfoResult` 的 Promise。\r\n  - `onCancelUpload`: 一个函数，接受 `fileName` 和 `uploadId`，返回 `UploadInfoErrorResult` 或 `{ status: true }` 的 Promise。\r\n  - `onOnePartDone`: 一个函数，接受 `fileName`、`uploadId` 和 `partNum`，返回 `UploadInfoErrorResult` 或 `{ status: true }` 的 Promise。\r\n  - `onAllPartDone`: 一个函数，接受 `fileName` 和 `uploadId`，返回 `UploadInfoErrorResult` 或 `{ status: true }` 的 Promise。\r\n  - `onDeleteFile`: 可选的函数，接受 `filePath`，返回 `boolean` 的 Promise。\r\n\r\n4. **使用 `FileUploadModal`**\r\n\r\n  在组件中使用 `FileUploadModal`，并传入必要的配置：\r\n\r\n  ```jsx\r\n  <FileUploadModal\r\n    config={{\r\n      modal: { visible: true, onCancel: handleCancel },\r\n      dragArea: { /* drag area configuration */ },\r\n    }}\r\n    identifier=\"unique-upload-id\"\r\n    onUploadSuccess={(file) => console.log('Upload successful:', file)}\r\n    getUploadUrls={async (fileName, partCount) => { /* implementation */ }}\r\n    onCancelUpload={async (fileName, uploadId) => { /* implementation */ }}\r\n    onOnePartDone={async (fileName, uploadId, partNum) => { /* implementation */ }}\r\n    onAllPartDone={async (fileName, uploadId) => { /* implementation */ }}\r\n    onDeleteFile={async (filePath) => { /* implementation */ }}\r\n  />\r\n  ```\r\n\r\n通过以上步骤，你可以在应用中集成 `FileUploadModal` 组件，实现文件上传功能。请确保在 `UploadStoreProvider` 内部使用，以避免警告信息。\r\n\r\n## FileUploader 使用指南\r\n\r\n`FileUploader` 是一个用于提供文件上传上下文的组件。它使用 `jotai` 库来管理上传状态，并提供给 `FileUploader` 组件使用。\r\n它依赖于 `UploadStoreProvider` 提供的上下文来管理上传状态，因此必须在 `UploadStoreProvider` 内部使用\r\n\r\n### 如何使用\r\n\r\n1. **导入 FileUploader**\r\n\r\n  在你的组件中导入 `FileUploader`：\r\n\r\n  ```typescript\r\n  import FileUploader from '@zjlab-lab/data-hub-ui';\r\n  ```\r\n\r\n2. **配置 FileUploader**\r\n\r\n  `FileUploader` 接受多个配置参数：\r\n\r\n  - `root`: 可选的字符串，表示根路径。\r\n  - `identifier`: 必须的字符串，用于标识上传。\r\n  - `showFinished`: 可选的布尔值，是否显示已完成的上传。\r\n  - `externalUploadContext`: 可选的 `FileInfo[]`，外部上传上下文。\r\n  - `onUploadSuccess`: 可选的回调函数，上传成功时调用。\r\n  - `extra`: 可选的 `React.ReactNode`，额外的节点。\r\n  - `dragAreaConfig`: 可选的 `FileDraggerProps`**，用于配置拖拽区域。\r\n  - `getUploadUrls`: 一个函数，接受 `fileName` 和 `partCount`，返回 `UploadInfoResult` 的 Promise。\r\n  - `onCancelUpload`: 一个函数，接受 `fileName` 和 `uploadId`，返回 `UploadInfoErrorResult` 或 `{ status: true }` 的 Promise。\r\n  - `onOnePartDone`: 一个函数，接受 `fileName`、`uploadId` 和 `partNum`，返回 `UploadInfoErrorResult` 或 `{ status: true }` 的 Promise。\r\n  - `onAllPartDone`: 一个函数，接受 `fileName` 和 `uploadId`，返回 `UploadInfoErrorResult` 或 `{ status: true }` 的 Promise。\r\n  - `onDeleteFile`: 可选的函数，接受 `filePath`，返回 `boolean` 的 Promise。\r\n\r\n3. **使用 FileUploader**\r\n\r\n  在组件中使用 `FileUploader`，并传入必要的配置：\r\n\r\n  ```jsx\r\n  <FileUploader\r\n    root=\"your-root-path\"\r\n    identifier=\"unique-upload-id\"\r\n    showFinished={true}\r\n    externalUploadContext={[]}\r\n    onUploadSuccess={(file) => console.log('Upload successful:', file)}\r\n    extra={<div>Extra content</div>}\r\n    dragAreaConfig={{ /* drag area configuration */ }}\r\n    getUploadUrls={async (fileName, partCount) => { /* implementation */ }}\r\n    onCancelUpload={async (fileName, uploadId) => { /* implementation */ }}\r\n    onOnePartDone={async (fileName, uploadId, partNum) => { /* implementation */ }}\r\n    onAllPartDone={async (fileName, uploadId) => { /* implementation */ }}\r\n    onDeleteFile={async (filePath) => { /* implementation */ }}\r\n  />\r\n  ```\r\n\r\n通过以上步骤，你可以在应用中集成 `FileUploaderContextProvider` 组件，实现文件上传功能。\r\n\r\n# 备注\r\n\r\n\\* `ModalProps` 是参考自 `antd` 的模态对话框属性配置。有关详细信息，请参阅 [Ant Design Modal API](https://ant.design/components/modal-cn/)。\r\n\r\n** `FileDraggerProps` 是用于配置 `FileUploaderFileDragger` 组件的属性接口。以下是 `FileDraggerProps` 的详细定义：\r\n\r\n- `accept`: 可选的字符串，指定允许上传的文件类型。\r\n- `directory`: 可选的布尔值，是否允许上传文件夹。默认为 `true`。\r\n- `dragAreaDescription`: 可选的 `ReactNode`，用于描述拖拽区域的内容。\r\n- `maxSizePerFile`: 可选的数字，指定每个文件的最大大小（以字节为单位）。默认为 `10 * GB`。\r\n- `className`: 可选的字符串，指定拖拽区域的自定义样式类。\r\n\r\n通过配置 `FileDraggerProps`，你可以自定义 `FileUploaderFileDragger` 组件的行为和外观。"}}]);