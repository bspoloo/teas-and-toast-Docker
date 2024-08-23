
type Prop = {
    content: String[],
    className?: string,
}
const RecipeInstructions = ({content, className}: Prop) => {
    return (
        <div className={`font-sans ${className}`}>
            <ul className="list-decimal list-inside">
                {content.map(line=> { 
                    if(line === "") return
                    return(<li>{line}</li>)
                })}
            </ul>
        </div>
    )
}

export default RecipeInstructions;