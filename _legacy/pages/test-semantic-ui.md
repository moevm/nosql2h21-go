```tsx

// http://localhost:3000/test-semantic-ui


import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from 'semantic-ui-react'






const Page: NextPage = () => {
    const [ activeItem, setActiveItem ] = useState('')

    return (
        <Menu>
            <Menu.Item header>Our Company</Menu.Item>
            <Menu.Item
                name='aboutUs'
                active={activeItem === 'aboutUs'}
                onClick={() => setActiveItem('aboutUs')}
            />
            <Menu.Item
                name='jobs'
                active={activeItem === 'jobs'}
                onClick={() => setActiveItem('jobs')}
            />
            <Menu.Item
                name='locations'
                active={activeItem === 'locations'}
                onClick={() => setActiveItem('locations')}
            />
        </Menu>
        // <div className={styles.container}>
        //   <Head>
        //     <title>Go viewer</title>
        //     <meta name="description" content="Go viewer for replays" />
        //     <link rel="icon" href="/favicon.ico" />
        //   </Head>

        //   <main className={styles.main}>
        //     <nav></nav>
        //     <h1 className={styles.title}>
        //       Fuck y  ou
        //     </h1>

        //     <p className={styles.description}>
        //       Get started by editing{' '}
        //       <code className={styles.code}>pages/index.js</code>
        //     </p>

        //     <div className={styles.grid}>
        //       <a href="https://nextjs.org/docs" className={styles.card}>
        //         <h2>Documentation &rarr;</h2>
        //         <p>Find in-depth information about Next.js features and API.</p>
        //       </a>

        //       <a href="https://nextjs.org/learn" className={styles.card}>
        //         <h2>Learn &rarr;</h2>
        //         <p>Learn about Next.js in an interactive course with quizzes!</p>
        //       </a>

        //       <a
        //         href="https://github.com/vercel/next.js/tree/master/examples"
        //         className={styles.card}
        //       >
        //         <h2>Examples &rarr;</h2>
        //         <p>Discover and deploy boilerplate example Next.js projects.</p>
        //       </a>

        //       <a
        //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //         className={styles.card}
        //       >
        //         <h2>Deploy &rarr;</h2>
        //         <p>
        //           Instantly deploy your Next.js site to a public URL with Vercel.
        //         </p>
        //       </a>
        //     </div>
        //   </main>

        //   <footer className={styles.footer}>
        //     <a
        //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Powered by{' '}
        //       <span className={styles.logo}>
        //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        //       </span>
        //     </a>
        //   </footer>
        // </div>
    )
}

export default Page


```


