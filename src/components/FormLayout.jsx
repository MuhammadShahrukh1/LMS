import React from 'react';
import { Row, Col } from 'antd';

const FormLayout = ({ children }) => {
  return (
    <Row gutter={[16, 16]}>
      {
        children.map((child, index) => (
          <Col xs={24} sm={12} md={12} lg={8} key={index}>
            {child}
          </Col>
        ))
      }
    </Row>
  )
};

export default FormLayout;
