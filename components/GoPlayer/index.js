import { Button } from '@mui/material';
import React, { useEffect, useMemo, useRef, useState } from 'react';


const GoPlayer = (props) => {

  const { sgf } = props
  const ref = useRef(null)
  const [player, setPlayer] = useState(null)
  useEffect(() => {
    if (sgf)
      setPlayer(new WGo.BasicPlayer(ref.current, { sgf }))
  }, [sgf])
  console.log('player', player);
  return <>
    {/* <Button onClick={() => {
      setPlayer(new WGo.BasicPlayer(ref.current, { sgf }))
    }}>Start</Button> */}
    <div ref={ref} style={{height: "80vh"}}/>
  </>
};

export default GoPlayer;
