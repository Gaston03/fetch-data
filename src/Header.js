import Button from "./Button"

const Header = ({currentItem, handleClick }) => {

    return (
        <header className="header">
            <Button
                buttonText = "users"
                currentItem={currentItem}
                handleClick = {handleClick}
            />
            <Button 
                buttonText = "posts"
                currentItem={currentItem}
                handleClick = {handleClick}
            />
            <Button             
                buttonText = "comments"
                currentItem={currentItem}
                handleClick = {handleClick}
            />
        </header>
    )
}

export default Header