import Post from './Post'
import './styles/styles.css'
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post('Webpack Post Titile', WebpackLogo)
console.log('Post to String:', post.toString())