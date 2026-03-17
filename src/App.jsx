import { Post } from "./components/Post"
import { Header } from "./components/Header"

import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/alinecascaes.png',
      name: 'Aline Cascaes',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'jane.design/doctorcare', url: '#'}
    ],
    publishedAt: new Date('2026-02-23 16:11:00')
  },
   {
    id: 2,
    author: {
      avatarUrl: 'https://i.pinimg.com/736x/75/38/ae/7538ae1d486ed38c6e10104676160c73.jpg',
      name: 'Lilly Moon',
      role: 'UI/UX Designer'
    },
    content: [
      {type: 'paragraph', content: 'Oii'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'jane.design/doctorcare', url: '#'}
    ],
    publishedAt: new Date('2026-02-10 16:11:00')
  }
]

export function App() {
  return (
    <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
        <main>
          {posts. map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}
