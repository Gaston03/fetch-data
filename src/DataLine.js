import UsersData from "./UsersData"
import PostsData from "./PostsData"
import CommentsData from "./CommentsData"

const DataLine = ({currentItem, peaceOfData}) => {
    return (
        (currentItem === "users") ? (
            <UsersData
                peaceOfData={peaceOfData} 
            />
        ) : ((currentItem === "posts") ? (
            <PostsData
                peaceOfData={peaceOfData} 
            />
        ) : (
            <CommentsData
                peaceOfData={peaceOfData} 
            />
        ))
    )
}

export default DataLine