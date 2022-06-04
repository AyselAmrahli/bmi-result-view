import React, { FC } from 'react';
import useBMIResult from '../../hooks/useBMIResult';
import bmiSlideFrom from '../../utils/bmi-slider';
import { EBMIResult } from '../../utils/enum';

import './index.scss';
interface IProps {
	score: number,
}

const BMIBar: FC<IProps> = ({score}) => {
	const [result] = useBMIResult(score);

	return (
	<section className="bmi-bar--wrapper">
		<div className="bmi-bar">
			<div className={`bmi-bar_sector underweight ${result === EBMIResult.UNDERWEIGHT ? 'active': ''}`}></div>
			<div className={`bmi-bar_sector normal ${result === EBMIResult.NORMAL ? 'active' : ''}`}></div>
			<div className={`bmi-bar_sector overweight ${result === EBMIResult.OVERWEIGHT ? 'active': ''}`}></div>
		</div>
		<span
			className="bmi-indicator"
			style={{left: bmiSlideFrom(score)}}
		/>
	</section>
	)
}

export default BMIBar;