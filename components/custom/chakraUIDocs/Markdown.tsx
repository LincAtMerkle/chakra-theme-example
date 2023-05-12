import {ReactMarkdown} from "react-markdown/lib/react-markdown";

export default function Markdown(props: {markdown?: string}) {
    const defaultMarkdown =`# Hello *world*!`;

    return (
            <ReactMarkdown
            children={props.markdown || defaultMarkdown}
            />
    )

}