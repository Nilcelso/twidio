import {v4 as uuid} from 'uuid'
import { Post } from '../entities/Post'

export const getMockPost = () => ({
    post_id: uuid(),
    author: 'author@email.com',
    content: 'Save content twit'
})