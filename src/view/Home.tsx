import React, { FC, useState } from 'react';
import { ETextColor, ETextDisplay, ETextSize, ETextWeight } from '../utils/enum';

import Text from '../components/Text';
import Whitebox from '../components/Whitebox';
import BMIBar from '../components/BMIBar';


const Home: FC = () => {
  const [score, setScore] = useState<number>(88.89)
  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Set your friend's bmi score"
        className="just-for-test"
        onChange={(e) => setScore(Number(e.target.value))}
      />
    </div>
    <Whitebox>
      <div className="centered">
        <Text color={ETextColor.GREY_DARK} display={ETextDisplay.BLOCK}>
          Mr. Nash's BMI is
        </Text>
        <br />
        <br />
        <Text color={ETextColor.BLUE} size={ETextSize.XL} weight={ETextWeight.BOLD}>
          {score}
        </Text>

        <BMIBar {...{score}} />
      </div>
    </Whitebox>
    </>
  )
}

export default Home;