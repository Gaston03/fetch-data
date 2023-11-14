import React from 'react'

const PostsData = ({peaceOfData}) => {
    return (
        <tr>
            <td>
                {peaceOfData.id}
            </td>
            <td>
                {peaceOfData.userId}
            </td>
            <td>
                {peaceOfData.title}
            </td>
            <td>
                {peaceOfData.body}
            </td>
        </tr>
    )
}

export default PostsData