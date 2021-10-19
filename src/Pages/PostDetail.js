import React, { useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { gePostDetail } from '../reducers/PostJob/action';
import Loading from '../Components/Loading';
import Error from '../Components/Error';

export default function PostDetail() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const { err, loading, postDetail } = useSelector(state => state.PostJobReducer);

    useEffect(() => {
        const action = gePostDetail(id);
        dispatch(action);
    }, [dispatch, id])

    const renderPost = useCallback(
        () => {
            if (loading) { return <Loading /> }
            if (err) { return <Error /> }
            if (postDetail) {
                return <>
                    Post {postDetail.id}
                    Title: {postDetail.title}
                    <div dangerouslySetInnerHTML={{ __html: postDetail.description }} />
                    Location: {postDetail.location}
                    Created: {postDetail.created_date}
                </>
            }
        },[postDetail, loading, err,])
    return (
        <div>
            {renderPost()}
        </div>
    )
}
