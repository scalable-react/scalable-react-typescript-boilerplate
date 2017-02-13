export default function shortenText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return `${text.substr(0, maxLength - 3)}...`;
  }
  return text;
};
