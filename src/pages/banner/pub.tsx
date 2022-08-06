import React, { useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, Select, Spin, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { bannerAdd } from '../../api/banner'
import { useRequest } from 'umi';
import UpLoad from "../../components/upload"

const { Option } = Select;
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
};

const CategoryList = () => {

    const [form] = Form.useForm();


    let { data, loading, run } = useRequest((value) => {
        console.log('%c 🐶嘿嘿64🐶:', 'color: Orchid; background: Yellow; font-size: 20px;', value)
        return bannerAdd(value)
    }, {
        manual: true
    })
    const onFinish = (values: any) => {
        run(values)
    };

    const onReset = () => {
        form.resetFields();
    };


    return (
        <Spin spinning={loading}>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="bannerName" label="活动名称" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="bannerLink" label="活动链接" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="bannerUpload" label="活动图片" rules={[{ required: true }]}>
                    <UpLoad />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        重置
                    </Button>
                </Form.Item>
            </Form>
        </Spin>
    );
}

export default CategoryList
