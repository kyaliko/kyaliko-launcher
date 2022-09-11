import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-600 to-slate-900" >
      <Head>
        <title>Kyaliko Launcher</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen justify-center items-center">
        <Link href="/download">
          <button className="transition ease-in-out duration-500 p-2 bg-slate-700 rounded-md hover:scale-125 hover:bg-gray-800 font-semibold">
            Download
          </button>
        </Link>
          
      </div>
    </div>
  )
}
