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
