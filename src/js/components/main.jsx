
import React from 'react';

import { Form, Input, Button, Radio, message, Row, Col, InputNumber, Datepicker } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

var Main = React.createClass({
  render() {
    return (
      <div>
        <Form horizontal>
          <FormItem
            id="eventName"
            label="Event Name："
            labelCol={{span: 4}}
            wrapperCol={{span: 18}}>
            <Input placeholder="COSCUP 2015" id="eventName" name="eventName" />
          </FormItem>
          <FormItem
            id="eventID"
            label="Event ID："
            labelCol={{span: 4}}
            wrapperCol={{span: 20}}>
            <Row>
              <Col span="12">
                <Input placeholder="coscup2015" id="eventID" name="eventID" />
              </Col>
              <Col span="2">
                <span className="ant-form-split">Day</span>
              </Col>
              <Col span="4">
                <InputNumber size="large" placeholder="1" id="eventDay" name="eventDay" />
              </Col>
            </Row>
          </FormItem>
          <FormItem
            id="syncYesterday"
            label="Yesterday："
            labelCol={{span: 4}}
            wrapperCol={{span: 20}}>
            <RadioGroup id="syncYesterday" defaultValue="sync">
              <Radio value="sync">Sync</Radio>
              <Radio value="not-sync">skip</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem
            id="path"
            label="Save Path："
            labelCol={{span: 4}}
            wrapperCol={{span: 15}}>
            <Input placeholder="/tmp/" id="path" name="path" />
          </FormItem>
          <FormItem
            id="date"
            label="Today："
            labelCol={{span: 4}}
            wrapperCol={{span: 8}}>
            <Datepicker id="today" />
          </FormItem>
          <FormItem
            id="fileName"
            label="File Name："
            labelCol={{span: 4}}
            wrapperCol={{span: 20}}>
            <Row>
              <Col span="8">
                <Input placeholder="%a-%t-%n.%e" id="fileName" name="eventID" />
              </Col>
              <Col span="16">
                <span className="ant-form-text" style={{textIndent: '0.5em'}}>%a: author, %t: time, %n, sn, %e: extension</span>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
    );
  }
});

export default Main;
