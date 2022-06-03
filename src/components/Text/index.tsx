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

const Text: FC<IProps> = (
	{
		size = ETextSize.S,
		color = ETextColor.WHITE,
		display = '',
		weight = '',
		children,
		className = ''
	}) => {
	return (
		<span
			className={`text text-size--${size} text-display--${display} text-color--${color} text-weight--${weight} ${className}`}
		>
			{children}
		</span>
	)
}

export default Text;