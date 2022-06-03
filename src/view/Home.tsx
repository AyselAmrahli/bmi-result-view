import React, { FC } from 'react';
import { ETextColor, ETextDisplay, ETextSize, ETextWeight } from '../utils/enum';

import Text from '../components/Text';
import Whitebox from '../components/Whitebox';
import BMIBar from '../components/BMIBar';


const Home: FC = () => {
  return (
    <Whitebox>
      <div className="centered">
        <Text color={ETextColor.GREY_DARK} display={ETextDisplay.BLOCK}>
          Mr. Nash's BMI is
        </Text>
        <br />
        <br />
        <Text color={ETextColor.BLUE} size={ETextSize.XL} weight={ETextWeight.BOLD}>
          88.89
        </Text>

        <BMIBar score={89} />
      </div>
    </Whitebox>
  )
}

export default Home;