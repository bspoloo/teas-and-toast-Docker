
type ButtonProps = {
    text: string,
    onclick: ()=> void,
    classname: string
}

function Button({text, onclick, classname}: ButtonProps){
    return(
        <button className={classname} onClick={onclick}>
            {text}
        </button>
    );
}

export default Button;