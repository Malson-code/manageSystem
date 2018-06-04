/**
 *   Create by Malson on 2018/6/1
 */
import React from 'react';
import {Table,Select,Button} from 'antd';


class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  componentDidMount() {
  }
  render() {
    const columns = [
      {
        title: '名称',
        dataIndex: 'a',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '年龄（岁）',
        dataIndex: 'b',
      },
      {
        title: '地址',
        dataIndex: 'c',
      },
      {
        title: '地址',
        dataIndex: 'd',
      },
      {
        title: 'dafsaf',
        dataIndex: 'e',
      },
    ];
    let operaCol = {
      title:'操作',
      dataIndex:'operaCol',
      render:(text,record)=>{
        return (
            <div>
              <Button size='small' onClick={()=>this.props.edit(record)}>修改</Button>
            </div>
            )
      }
    };
    columns.push(operaCol);
    let pageSet = {
      pagination:{
        showQuickJumper:true,
        showSizeChanger:true,
        pageSizeOptions:['10','30','50','100','300'],
        size:'large'
      }
    }
    return (
        <Table  {...this.props} columns={columns}  size='middle' {...pageSet} />
    )
  }
}

export default TablePage;