import React from 'react'

const CommentsData = ({peaceOfData}) => {
    return (
        <tr>
            <td>
                {peaceOfData.id}
            </td>
            <td>
                {peaceOfData.postId}
            </td>
            <td>
                {peaceOfData.name}
            </td>
            <td>
                {peaceOfData.email}
            </td>
            <td>
                {peaceOfData.body}
            </td>
        </tr>
    )
}

export default CommentsData