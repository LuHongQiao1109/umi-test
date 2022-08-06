import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';


interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const tableComponent: React.FC = (props) => {
    console.log('%c 🇨🇳props🇨🇳:', 'color: DeepPink; background: Yellow; font-size: 20px;', props);
    const { tableList } = props
    const columns: ColumnsType<DataType> = [
        {
            title: '名字',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: '数字',
            dataIndex: 'value',
            key: 'age',
        },
        {
            title: '类型',
            dataIndex: 'type',
            key: 'address',
        },
        {
            title: '入学时间',
            dataIndex: 'time',
            key: 'address',
        },
        {
            title: '操作',
            dataIndex: 'time',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button>增加</Button>
                    <Button>删除</Button>
                </Space>
            ),
        },
    ];


    return (
        <Table columns={columns} dataSource={tableList} rowKey="id" />
    )
}

export default tableComponent