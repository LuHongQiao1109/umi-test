import React, { useState } from 'react';
import styles from './index.less';
import { Button, Form, Input, Select, Spin } from 'antd';
import { cateAdd } from '../../api/cake'
import { useRequest } from 'umi';

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
    console.log('%c 🐶嘿嘿64🐶:', 'color: Orchid; background: Yellow; font-size: 20px;',)
    return cateAdd(value)
  }, {
    manual: true
  })
  const onFinish = (values: any) => {
    run(values)
    // console.log(values);
    // cateAdd(values).then((res) => {
    //   console.log("发送请求");

    // })

  };

  const onReset = () => {
    form.resetFields();
  };


  return (
    <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="catename" label="分类名称" rules={[{ required: true }]}>
          <Input />
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
