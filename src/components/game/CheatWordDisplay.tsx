function isFirefox() {
	return (
		typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent)
	);
}

function censorClass(cheatModeEnabled: boolean) {
	if (isFirefox()) return cheatModeEnabled ? 'visible' : 'invisible';
	else return cheatModeEnabled ? ' filter-none' : 'filter blur-sm';
}

type CheatWordDisplayProps = {
	word: string;
	debugMode: boolean;
};

const CheatWordDisplay = ({ word, debugMode }: CheatWordDisplayProps) => {
	const className = `${censorClass(debugMode)} font-normal transition-all`;

	return <i className={className}>{word || '(n/a)'}</i>;
};

export default CheatWordDisplay;
