import { Button } from './elements/Button';

import './App.css';
import './output.css';

function App() {
	return (
		<div className="App">
			<h1 className="text-3xl font-bold text-center mb-2">Test Drive</h1>
			<div className="text-center">
				<Button className="mx-1" size="large">
					Step 1
				</Button>
				<Button className="mx-1" size="large">
					Step 2
				</Button>
				<Button className="mx-1" size="large">
					Step 3
				</Button>
				<Button className="mx-1" size="large">
					Step 4
				</Button>
			</div>
		</div>
	);
}

export default App;
