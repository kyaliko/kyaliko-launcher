import Head from 'next/head'

const download = () => {
  return (
    <div className="bg-gradient-to-br from-slate-600 to-slate-900">
        <Head>
            <title>Kyaliko Launcher</title>
            <meta name="description" content="A normal minecraft launcher" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex h-screen items-center justify-center rounded-md text-center font-mono selection:bg-slate-700 selection:">
            <div>
                Isnt published yet..
            </div>
        </div>
    </div>
  )
}

export default download