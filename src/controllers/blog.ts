import { Response, Request } from "express";
import { handleHttp } from "../utils/error.handle";


const getBlog = ( res: Response, req: Request ) => {
    try {
        
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG")
    }
}

const getBlogs = (res: Response, req: Request ) => {
    try {
        
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOGS")
    }
}

const postBlog = ({body}: Request, res: Response) => {
    try {
        res.send(body);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM')
    }
}

const updateBlog = (res: Response, req: Request ) => {
    try {
        
    } catch (e) {
        handleHttp(res, "ERROR_UPDATE_BLOG")
    }
}

const deleteBlog = (res: Response, req: Request ) => {
    try {
        
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_BLOG')
    }
}


export {getBlog, getBlogs, updateBlog, postBlog, deleteBlog};
