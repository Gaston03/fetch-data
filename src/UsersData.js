import React from 'react'

const UsersData = ({peaceOfData}) => {
    return (
        <tr>
            <td>
                {peaceOfData.id}
            </td>
            <td>
                {peaceOfData.name}
            </td>
            <td>
                {peaceOfData.username}
            </td>
            <td>
                {JSON.stringify(peaceOfData.address)}
            </td>
            <td>
                {peaceOfData.phone}
            </td>
            <td>
                {peaceOfData.website}
            </td>
            <td>
                {JSON.stringify(peaceOfData.company)}
            </td>
        </tr>
    )
}

export default UsersData