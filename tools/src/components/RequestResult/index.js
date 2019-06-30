import React from 'react' ;
import { Table } from 'antd';

const columns = [
  { title: '系统', dataIndex: 'sysCode', key: 'sysname' },
  { title: '来源', dataIndex: 'fromCode', key: 'fromCode' },
  { title: '序号', dataIndex: 'sequence', key: 'sequence' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a href="javascript:;">Delete</a>,
  },
];

const data = [
  {
    key: 1,
    sysCode: 'Dshop',
    fromCode: '生产机搜索',
    sequence: 'RequestXML 001',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    sysCode: 'Dprice',
    fromCode: '复制粘贴',
    sequence: 'RequestXML 002',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    sysCode: 'Dreprice',
    fromCode: '手动构造',
    sequence: 'RequestXML 003',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

class Demo extends React.Component{
    render(){
        return (
            <Table style ={{marginTop:"20px"}}
                columns={columns}
                expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                dataSource={data}
            />
        ) ;
    }
}

export default Demo ;