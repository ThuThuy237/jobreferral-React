import React from 'react';
import { Button, Card, Row, Col } from 'antd';
import myStyles from '../Styles/Home.module.scss';
import { ClockCircleOutlined, HighlightOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';




export default function JobCard(props) {
    return (
        <Link to={`/post/${props.id}`}>
            <Card hoverable='true' className={myStyles.cardItem}>
                <Row style={{ alignItems: 'center' }} justify="center">
                    <Col span={12}>
                        <h4>{props.title}</h4>
                        <p><EnvironmentOutlined style={{ fontSize: '15px', marginRight: '10px' }} />{props.location}</p>
                        <p ><HighlightOutlined style={{ fontSize: '15px', marginRight: '10px' }} />{props.subtitle}</p>
                        <p><ClockCircleOutlined style={{ fontSize: '15px', marginRight: '10px' }} />{props.created_date}</p>
                    </Col>
                    <Col span={4}>
                        <img alt="logo" src={props.image} />
                    </Col>
                    <Col span={4} offset={2}>
                        <Button style={{ backgroundColor: '#38b6ff', color: '#fff', marginBottom: '10px' }} size='large'>Detail</Button>
                        <Button style={{ backgroundColor: '#fa8914', color: '#fff' }} size='large'>Apply</Button>
                    </Col>
                </Row>
            </Card>
        </Link>
    )
}
