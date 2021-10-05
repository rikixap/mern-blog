import React,{useEffect,useState} from 'react';
import {Button, BlogItem, Gap} from '../../components';
import "./home.scss";
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    // const [dataBlog,setDataBlog] = useState([]);
    // const stateGlobal = useSelector(state => state);
    const {dataBlogs, name} = useSelector(state => state);
    const dispatch = useDispatch();

    // console.log('state global', stateGlobal);
    console.log('data blog global:', dataBlogs)
    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'UPDATE_NAME'})
        }, 3000)

        Axios.get('http://localhost:4000/v1/blog/posts')
        .then(result => {
            console.log('data API',result.data);
            const responseAPI = result.data;
            // setDataBlog(responseAPI.data)
            dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
        })
        .catch(err => {
            console.log('error',err);
        })
    },[])
    const history = useHistory();
    return(
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="create blog" onClick={() => history.push('./create-blog')}/>
            </div>
            <p>{name}</p>
            <Gap height={20}/>
            <div className="content-wrapper">
                {dataBlogs.map(blog => {
                 return  <BlogItem 
                 key={blog._id} 
                 image={`http://localhost:4000/${blog.image}`} 
                 title={blog.title}
                 body={blog.body}y
                 name={blog.author.name}
                 date={blog.createdAt}
                 /> 
                 
                })}
            </div>
            <div className="pagination">
                <Button title="Previous"/>
                <Gap width={20}/>
                <Button title="Next"/>
            </div>
            <Gap height={20}/>
        </div>
    )
}
export default Home;