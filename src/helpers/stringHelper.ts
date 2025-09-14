export function sliceText(text: string, length: number): string {
    if (!text || length <= 0) return '';

    const trimmed = text.trim();

    if (trimmed.length <= length) return trimmed;

    const sliced = trimmed.slice(0, length);
    const lastSpace = sliced.lastIndexOf(' ');
    const result = lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced;

    return result + '...';
}