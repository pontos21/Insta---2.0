import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'pontos',
        userImg: 'https://i.ibb.co/kKBBCMf/twitter-dp.jpg',
        img: 'https://i.ibb.co/kKBBCMf/twitter-dp.jpg',
        caption: 'this lit '
    },
    {
        id: '123',
        username: 'pontos',
        userImg: 'https://i.ibb.co/kKBBCMf/twitter-dp.jpg',
        img: 'https://i.ibb.co/kKBBCMf/twitter-dp.jpg',
        caption: 'this lit '
    },
]

function Posts() {
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id} 
            id={post.id} 
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption} />
        ))}
    </div>
  )
}

export default Posts