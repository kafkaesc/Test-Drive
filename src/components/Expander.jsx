import { useState } from 'react';
import Button from '../elements/Button';

export default function Expander({ buttonText, children, className }) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleIsExpanded = () => {
		setIsExpanded((prev) => !prev);
	};

	return (
		<div>
			<div className="text-center">
				<Button
					className={`w-full mx-auto mb-2 md:w-1/3${
						className ? ' ' + className : ''
					}`}
					onClick={toggleIsExpanded}
				>
					{buttonText ? buttonText : 'Show More'}
				</Button>
			</div>
			<div
				className={`border border-x-0 border-y-2 transition-all duration-700 ${
					isExpanded ? 'max-h-80 overflow-auto' : 'max-h-0 overflow-hidden'
				}`}
			>
				{children}
			</div>
		</div>
	);
}
