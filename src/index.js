import Post from './Post';
import './css/style.css';

const post = new Post('Webpack post title');

console.log('Post to string', post.toString());