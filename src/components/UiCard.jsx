export default function UiCard({ children, className }) {
	return (
		<div
			className={`inline-block w-full p-1 bg-white border border-2${
				className ? ' ' + className : ''
			}`}
		>
			{children}
		</div>
	);
}
