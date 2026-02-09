文档目标: 辅助AI通过图片生成代码，给出图片示例和生成代码的说明

# 饼图示例

## 饼图示例1

![饼图示例](https://shelwinjue.github.io/fe-assets/images/pie-1.png)

说明: 
1. 这是一个简单的饼图示例，展示了不同类别数据的占比
2. 在生成代码时，引入@ant-design/plots库，使用Pie组件
3. 图中的图例UI部分展示了不同类别数据的名称和颜色，生成代码时，不需要单独生成，使用Pie组件的legend属性

# 表格示例

## 表格示例1

![表格示例](https://shelwinjue.github.io/fe-assets/images/table-1.png)

说明:
1. 这是一个简单的表格示例，展示了不同数据项的详细信息
2. 在生成代码时，引入antd库，使用Table组件
3. 图中的搜索框和下拉框与表格数据相关，需要在表格数据状态中添加相关变量，并将其与Search和Select组件的value绑定在一起，onChange时更新改状态

# 复制组件示例

## 复制组件示例1

![复制组件示例](https://shelwinjue.github.io/fe-assets/images/copy-1.png)

说明:
1. 这是一个简单的复制组件示例，展示了如何在页面中添加一个复制按钮，点击按钮后将相邻的文本复制到剪贴板
2. 在生成代码时，引入@zjlab-fe/data-hub-ui库，使用Copy组件，text参数，默认传入与它相邻的文本


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

### 包含排序、筛选的Table组件示例

如果某一列设定为可排序，那么在定义的时候给这一列加上属性sorter等于true;如果某一列设定为可筛选，那么在定义的时候给这一列加上filters属性，filters属性值是一个列表，列表的每一项包含text和value两个属性，如果这一列的筛选值是多选，那么再给这一列加上filterMultiple等于true;给Table加上onChange回调处理函数，该函数类型是TableProps['onChange']，onChange回调函数的代码逻辑参照下面的代码

```tsx
import { useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
export function Demo() {
  const [queryParams, setQueryParams] = useState<{
    pageNum: number;
    pageSize: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }>({
    pageNum: 1,
    pageSize: 20,
  });

  const columns: TableProps<T>['columns'] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      filters: [
        {
          text: '张三',
          value: '张三',
        },
        {
          text: '李四',
          value: '李四',
        },
      ],
      filterMultiple: true
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      sorter: true,
    },
  ];

   const onTableChange: TableProps<T>['onChange'] = (
    pagination,
    filters,
    sorter,
    extra,
  ) => {
    const { action } = extra;
    if (action === 'sort' && !Array.isArray(sorter)) {
      let newQueryParams = {
        ...queryParams,
        pageNum: 1,
        sortBy: sorter.columnKey,
        sortOrder: sorter.columnKey ? (sorter.order === 'ascend' ? 'asc' : 'desc') : undefined,
      };
      setQueryParams(newQueryParams);
    } else if (action === 'filter') {
      setQueryParams({
        ...queryParams,
        pageNum: 1,
        parseStatus: filters?.parseStatus?.[0],
      });
    }
  };

  return (
    <Table
      columns={columns}
      onChange={onChange}
    />
  );

}

```

