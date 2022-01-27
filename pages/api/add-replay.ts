import type { NextApiRequest, NextApiResponse } from 'next'

type AddReplayRequest = {
    name: string
}

type AddReplayResponse = {
    name: string
}

export default function handler(
    req: NextApiRequest<AddReplayRequest>,
    res: NextApiResponse<AddReplayResponse>
) {
    // console.log(req.)

    res.status(200).json({ name: 'John Doe' })
}
