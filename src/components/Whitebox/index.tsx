import React, { FC, ReactNode } from 'react';

import './index.scss';

interface IProps {
	children: ReactNode,
	className?: string
}

const Whitebox: FC<IProps> = ({children, className}) =>
	<div className={`whitebox ${className || ''}`}>
		{children}
	</div>

export default Whitebox;