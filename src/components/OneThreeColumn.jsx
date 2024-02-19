export default function OneThreeColumn({ className, children }) {
	return className ? (
		<div className={`inline-block w-full sm:w-1/3 ${className}`}>
			{children}
		</div>
	) : (
		<div className="inline-block w-full sm:w-1/3">{children}</div>
	);
}
