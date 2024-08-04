type CheatWordDisplayProps = {
	word: string;
	debugMode: boolean;
};

const CheatWordDisplay = ({ word, debugMode }: CheatWordDisplayProps) => {
	return (
		<i
			className={`${
				!debugMode ? 'filter blur-sm' : 'filter-none'
			} font-normal transition-all`}
		>
			{!!word ? word : '(n/a)'}
		</i>
	);
};

export default CheatWordDisplay;
