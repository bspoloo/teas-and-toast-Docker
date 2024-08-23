type IngredientsListProps = {
    ingredients: String[],
    measures: String[],
    className?: string
}

const IngredientsList = ({ ingredients, measures, className }: IngredientsListProps) => {

    return(
        <div className={className}>
            <ol className="list-decimal sm:columns-2 sm:gap-x-10 list-inside">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient} {"  "} {measures[index]}</li>
                ))}
            </ol>
        </div>
    )
}

export default IngredientsList;