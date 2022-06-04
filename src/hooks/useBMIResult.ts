import { useEffect, useState } from "react";
import { EBMIResult } from "../utils/enum";

// ****** custom hook to calculate result of the score
const useBMIResult = (score: number) => {
  const [result, setResult] = useState<string>('')

  useEffect(() => {
    if (score < 30) setResult(EBMIResult.UNDERWEIGHT)
    else if (score > 90 && score <= 120) setResult(EBMIResult.OVERWEIGHT)
    else if (score >= 30 && score <= 90) setResult(EBMIResult.NORMAL)
    else setResult('')
  },[score])

  return [result]
}

export default useBMIResult