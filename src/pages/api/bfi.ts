import { NextApiRequest, NextApiResponse } from 'next'

interface BfiAnswers {
  answers: number[]
}

interface BfiScores {
  extraversion: number
  agreeableness: number
  conscientiousness: number
  neuroticism: number 
  openness: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BfiScores>
) {

  const { answers } = req.body as BfiAnswers

  const extraversion = [1, 6, 11, 16, 21, 26, 31, 36]
  const extraversionReverse = [6, 21, 31]

  const agreeableness = [2, 7, 12, 17, 22, 27, 32, 37, 42] 
  const agreeablenessReverse = [2, 12, 27, 37]  

  const conscientiousness = [3, 8, 13, 18, 23, 28, 33, 38, 43]
  const conscientiousnessReverse = [8, 18, 23]

  const neuroticism = [4, 9, 14, 19, 24, 29, 34, 39]
  const neuroticismReverse = [9, 24]

  const openness = [5, 10, 15, 20, 25, 30, 35, 40, 41, 44]
  const opennessReverse = [35, 41]

  function getScore(answers: number[], keys: number[], reverse: number[]) {
    let score = 0
    keys.forEach(key => {
      if (reverse.includes(key)) {
        score += 6 - answers[key-1]  
      } else {
        score += answers[key-1]
      }
    })
    return score
  }

  const extraversionScore = getScore(answers, extraversion, extraversionReverse)
  const agreeablenessScore = getScore(answers, agreeableness, agreeablenessReverse)
  const conscientiousnessScore = getScore(answers, conscientiousness, conscientiousnessReverse)
  const neuroticismScore = getScore(answers, neuroticism, neuroticismReverse)
  const opennessScore = getScore(answers, openness, opennessReverse)

  res.status(200).json({
    extraversion: extraversionScore,
    agreeableness: agreeablenessScore,
    conscientiousness: conscientiousnessScore,
    neuroticism: neuroticismScore,
    openness: opennessScore
  })
}