import type { NextPage } from 'next'
import GoPlayer from 'components/GoPlayer';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const Home: NextPage = () => {
  const router = useRouter();

  const id = useMemo(() => (router.query.gameId as string) || null, [router]);

  const [sgf, setSgf] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (id) {
      setLoading(true)
      axios.get(`/api/matches/${id}/sgf`).then(res => {
        setSgf(res.data?.sgf)
      })
        .finally(() => setLoading(false))
    }
  }, [id])

  return (
    loading
      ? <> загрузка </>
      : sgf
        ? <GoPlayer sgf={sgf} />
        : <> нет данных </>

  )
}

export default Home
