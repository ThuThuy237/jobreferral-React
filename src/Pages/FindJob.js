import { Row, Col } from 'antd';
import React, { useEffect, useCallback } from 'react';
import JobCard from '../Components/JobCard';
import { useDispatch, useSelector } from 'react-redux';
import { getListPost } from '../reducers/PostJob/action';
import Loading from '../Components/Loading';
import Error from '../Components/Error';


export default function FindJob() {

    const dispatch = useDispatch();

    const {err, loading, listPost } = useSelector(state => state.PostJobReducer);

    useEffect(() => {
        const action = getListPost();
        dispatch(action);
    }, [dispatch])

    const renderListPost = useCallback(
        () => {
            if (loading) { return <Loading /> }
            if(err) { return <Error/>}
            if (listPost) {
                return <>
                    <Row>
                        <Col span={16}>
                            {listPost.results?.map(post => {
                                return <JobCard
                                    id={post.id}
                                    title={post.title}
                                    location={post.location}
                                    subtitle={post.subtitle}
                                    image={post.image}
                                    created_date={post.created_date}
                                />
                            })}
                        </Col>
                        <Col span={8}>filter</Col>
                    </Row>
                </>
            }
        },
        [listPost, loading, err, ]
    );
    return (
        <>
            {renderListPost()}
        </>
    )
}
