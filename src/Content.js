import DataLine from "./DataLine"

const Content = ({currentItem, data}) => {
    return (
        <>
            <table>
                {
                    (currentItem === "users") ? (
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>address</th>
                            <th>phone</th>
                            <th>website</th>
                            <th>company</th>
                        </tr>
                    ) : ((currentItem === "posts") ? (
                        <tr>
                            <th>id</th>
                            <th>userId</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    ) : (
                        <tr>
                            <th>id</th>
                            <th>postId</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>
                        </tr>
                    ))
                }
                {
                    data.map(peaceOfData => (
                        <DataLine
                            key={peaceOfData.id}
                            currentItem={currentItem}
                            peaceOfData={peaceOfData}
                        />
                    ))
                }
            </table>
        </>
    )
}

export default Content