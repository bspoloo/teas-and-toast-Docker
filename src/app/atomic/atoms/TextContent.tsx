interface TextProps{
    text: string;
    className: string;
}
function TextContent({ text, className }: TextProps){
    return <p className={className}>{text}</p>
}
export default TextContent;