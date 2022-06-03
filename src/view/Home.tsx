import React, { FC } from 'react';
import { ETextColor, ETextDisplay, ETextSize, ETextWeight } from '../utils/enum';

import Text from '../components/Text';
import Whitebox from '../components/Whitebox';


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
      </div>
    </Whitebox>
  )
}

export default Home;