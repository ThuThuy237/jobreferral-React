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
                    {<div dangerouslySetInnerHTML={{ __html: Object.keys(postDetail).map(key => key+": "+postDetail[key]).join('<br/>') }} />}
                    {/* Post {postDetail.id} <br/>
                    Title: {postDetail.title} <br/>
                    <div dangerouslySetInnerHTML={{ __html: postDetail.description }} />
                    Location: {postDetail.location} <br/>
                    Created: {postDetail.created_date} <br/> */}
                </>
            }
        },[postDetail, loading, err,])
    return (
        <div>
            {renderPost()}
        </div>
    )
}
