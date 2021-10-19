import React, { useEffect, useCallback } from 'react';
import myStyles from '../Styles/Home.module.scss';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import { FcStatistics, FcPrevious, FcNext, FcBullish } from 'react-icons/fc';
import { Form, Input, Select, Button, Card, Row, Col } from 'antd';
import Loading from '../Components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getTopPost } from '../reducers/PostJob/action';
import JobCard from '../Components/JobCard';
import Error from '../Components/Error';

const { Option } = Select;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
    margin: '25px 40px',
    fontSize: '20px',
    display: 'flex',
    flexDirection: 'column',
};

export default function Home() {
    const dispatch = useDispatch();
    const { err, loading, listPost } = useSelector(state => state.PostJobReducer);

    useEffect(() => {
        const action = getTopPost();
        dispatch(action);
    }, [dispatch])

    const renderTopPost = useCallback(
        () => {
            if (loading) { return <Loading /> }
            if (err) { return <Error /> }
            if (listPost) {
                return <>
                    {listPost?.map(post => {
                        return <JobCard
                            id={post.id}
                            title={post.title}
                            location={post.location}
                            subtitle={post.subtitle}
                            image={post.image}
                            created_date={post.created_date}
                        />
                    })}
                </>
            }
        },
        [listPost, loading, err,]
    );
    return (
        <>
            <div className={myStyles.banner}>
                <div className={myStyles.content}>
                    <h1 className={myStyles.headers}>FIND YOUR DREAM <span style={{ color: '#fa8914' }}>JOB</span> WITH COMPORT</h1>
                    <p className={myStyles.subContent}>Wherein herb beginning. Moved after gathering. Sea hi crate fowl man replenish place divided likeness herb one two lnetn Winged moving saw, may over.</p>
                    <Link to='/' style={{ fontWeight: "bold" }}>EXPLORE NOW <ArrowRightOutlined /></Link>
                </div>
            </div>
            <div className={myStyles.itemContainer}>
                <div className={myStyles.search}>
                    <Form
                        name="search"
                        layout="inline"
                        style={{ justifyContent: 'center' }}
                    >
                        <Form.Item
                            name="category"
                        >
                            <Select placeholder="Select category" size="large" style={{ width: `250px` }}>
                                <Option value="All category">All category</Option>
                                <Option value="Part-time">Part-time</Option>
                                <Option value="Full-time">Full-time</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="location"
                        >
                            <Select placeholder="Select location" size="large" style={{ width: `250px` }}>
                                <Option value="Ho Chi Minh City">Ho Chi Minh City</Option>
                                <Option value="Ha Noi">Ha Noi</Option>
                                <Option value="Da Dang">Da Dang</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="kw">
                            <Input placeholder='Key word' size="large" style={{ width: `250px` }} />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ borderRadius: '10px' }} size="large">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className={myStyles.itemContainer}>
                <h1 className={myStyles.headers}>Top Concern</h1>
                <Card bordered="false" className={myStyles.cardContainer}>
                    <Card.Grid style={gridStyle}><span style={{ fontSize: '40px' }}><FcStatistics /></span>Markettings</Card.Grid>
                    <Card.Grid style={gridStyle}><span style={{ fontSize: '40px' }}><FcPrevious /><FcNext /></span>Infomation Teachnology</Card.Grid>
                    <Card.Grid style={gridStyle}><span style={{ fontSize: '40px' }}><FcBullish /></span>Data Analytics</Card.Grid>
                </Card>
            </div>
            <div className={myStyles.darkItemContainer}>
                <h1 className={myStyles.headers}>Get job information daily</h1>
                <p className={myStyles.headers}>Subscribe to our newsletter and get a coupon code!</p>
                <Row justify="center">
                    <Col span={8}><Input style={{ borderRadius: '40px' }} size="large" placeholder="Your email here" /></Col>
                    <Col offset={1} span={2}><Button style={{ backgroundColor: '#fa8914', color: '#fff' }} shape="round" size='large'>Send</Button></Col>
                </Row>
            </div>
            <div className={myStyles.itemContainer}>
                <h1 className={myStyles.headers}>Browse recent jobs</h1>
                {renderTopPost()}
                <Link to='/find-job' className={myStyles.btnNext} >Show More....</Link>
            </div>
        </>
    )
}
