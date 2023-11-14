const Button = ({buttonText, currentItem, handleClick }) => {
    return (
        <button
            type='submit'
            className={currentItem === buttonText ? 'selectedItem' : null}
            onClick={handleClick}
        >
            {buttonText}
        </button>
    )
}

export default Button