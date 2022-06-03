import { useEffect, useState } from "react";
import { EBMIResult } from "../utils/enum";

// ****** custom hook to calculate result of the score
const useBMIResult = (score: number) => {
  const [result, setResult] = useState<string>('')

  useEffect(() => {
    if (score < 30) setResult(EBMIResult.UNDERWEIGHT)
    if (score > 90) setResult(EBMIResult.OVERWEIGHT)
    else setResult(EBMIResult.NORMAL)
  },[score])

  return [result]
}

export default useBMIResult