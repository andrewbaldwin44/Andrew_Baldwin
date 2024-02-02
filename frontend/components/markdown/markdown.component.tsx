import ReactMarkdown from 'react-markdown';

export default function Markdown({ content }: { content: string }) {
  return <ReactMarkdown className='markdown'>{content}</ReactMarkdown>;
}
