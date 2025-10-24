文档目标: 参考代码示例

# 生成代码要求

1. 严格按照截图，像素级还原UI
2. 请正确匹配antd组件，例如：Flex(布局)，Tabs、Table、Input、Search、Icon、Tag、Button、Select、Modal
3. 涉及到图表的UI，请正确匹配@ant-design/plots的饼图(Pie)、折线图(Line)、柱状图(Column)
4. 技术栈要求：
- 框架：React（Hooks模式）
- 组件库：antd、@ant-design/plots
- 语言：TypeScript
- 样式方案：CSS Modules
5. 如果截图中有蓝色虚线框，那么蓝色虚线框里面的UI才需要转换成代码，其中第一个蓝色虚线框里的是主UI，其他蓝色虚线框里的是弹框UI，其中箭头表示交互逻辑，表示点击出现
6. 代码中引入scss，应使用import * as styles
7. 增加路由配置时，确保新增的路由与{"path": "/"}保持同级，不应该添加到其他路由配置项的children中
8. 预览执行npm run start
9. 请再次与截图进行比对调整，确保UI和识别到的文本精确还原

# 代码示例

## Tabs组件说明

将Tabs的activeKey与页面状态绑定在一起，onChange时更新改状态


## Select组件说明

将Select的value与页面状态绑定在一起，onChange时更新改状态

## Table组件说明

一般在页面状态中维护一个与Table组件相关的状态，例如：

```tsx
const [tableDataParams, setTableDataParams] = useState<{
  pageIndex: number;
  pageSize: number;
}>({
  pageIndex: 1,
  pageSize: 10,
});
```

其中将pageIndex、pageSize与Table组件的pagination属性绑定在一起，onChange时更新改状态

如果截图中发现与table相近的有搜索框，需要在tableDataParams中添加searchText，类型是string，默认值是'',并将searchText与Search组件的value绑定在一起，onChange时更新改状态

```tsx
const [tableDataParams, setTableDataParams] = useState<{
  pageIndex: number;
  pageSize: number;
  searchText: string;
}>({
  pageIndex: 1,
  pageSize: 10,
  searchText: '',
});
```

如果截图中发现与table相近的有下拉框 ，需要在tableDataParams中添加相关的变量，变量名可以根据下拉框的功能命名，例如：status、type、language、subject等,并将该变量与Select组件的value绑定在一起，onChange时更新改状态
