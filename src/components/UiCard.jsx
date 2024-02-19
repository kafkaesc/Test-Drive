export default function UiCard({ children, className }) {
	return className ? (
		<div className={`inline-block w-full p-1 border border-2 ${className}`}>
			{children}
		</div>
	) : (
		<div className="inline-block w-full p-1 border border-2">{children}</div>
	);
}
