import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const meow = () => {
  console.log("loaded");
  console.log("meow");
}

export default function Home() {
  return (
    <div className="bg-black" >
      <Head>
        <title>Kyaliko Launcher</title>
        <meta name="description" content="A normal minecraft launcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen justify-center items-center">
        <Link href="/download" onLoad={meow()}>
          <a className="neon-button">meow meow</a>
        </Link>
        
          
      </div>
      <a className="uwu-text"></a>
    </div>
  )
}
