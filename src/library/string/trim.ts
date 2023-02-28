export const trimIncludingNewLinesChar = (text: string): string => {
	return text
		.trim()
		.replace(/^\n+|\n+$/g, '');
}
