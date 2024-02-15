import H1 from './elements/H1';
import Link from './elements/Link';

export default function Error() {
	return (
		<>
			<H1 className="mb-2">Error</H1>
			<p>
				That page doesn't exist, check the URL or{' '}
				<Link href="/">return home</Link>
			</p>
		</>
	);
}
