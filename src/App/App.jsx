import '../global.css'
import './App.css'

import Header from '../components/Header/Header.jsx'
import Post from '../components/Post/Post.jsx'
import Sidebar from '../components/Siderbar/Sidebar.jsx'


const posts = [

  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rafael-vas.png",
      name: "Rafael Vasconcelos",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Eae pessoal!" },
      { type: "paragraph", content: "Minha primeira vez postando aqui!" },
      { type: "paragraph", content: "Me sigam no outro site" },
      { type: "link", content: "https://github.com/rafael-vas" },
    ],
    publishedAt: new Date('2023-08-15 16:55:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: undefined,
      name: "João Silva",
      role: "UX/UI Designer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraaa" },
      { type: "paragraph", content: "Acabei de subir um projetinho maneiro" },
      { type: "paragraph", content: "Vocês podem acessá-lo através do link" },
      { type: "link", content: "https://github.com/rafael-vas" },
    ],
    publishedAt: new Date('2023-08-14 23:15:00'),
  },

  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/girl.png",
      name: "Joana Souza",
      role: "Tech Leader"
    },
    content: [
      { type: "paragraph", content: "Oiii!!" },
      { type: "paragraph", content: "Sou nova aqui, cadê os devs dessa rede?" },
    ],
    publishedAt: new Date('2023-08-17 00:15:00'),
  },

  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/pedro.png",
      name: "Mário Soares",
      role: "Front-end Developer"
    },
    content: [
      { type: "paragraph", content: "Eae! Bora conversar?" },
      { type: "link", content: "#mundodev" },
    ],
    publishedAt: new Date('2023-08-11 09:20:00'),
  },
]



const App = () => {

  return (
    <>
      <Header />
      <div className="wrapper">
          <Sidebar />
          <main className="main">
              {posts.map(post => {
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
    </>
  )
}

export default App