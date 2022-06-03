import React, { FC, ReactNode } from 'react';

import { ETextSize, ETextColor, ETextWeight, ETextDisplay } from '../../utils/enum';

import './index.scss';

interface IProps {
	size?: ETextSize,
	color?: ETextColor,
	weight?: ETextWeight;
	display?: ETextDisplay,
	children: string | ReactNode,
	className?: string
}

const BMIBar: FC = (
	{

	}) => {
	return (
		<div className="bmi-bar">
			<div className="bmi-bar_sector underweight"></div>
			<div className="bmi-bar_sector normal active"></div>
			<div className="bmi-bar_sector overweight"></div>
		</div>
	)
}

export default BMIBar;