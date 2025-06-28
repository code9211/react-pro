function TableData() {
    const dummyvalue = [
        {
            "id": 1,
            "body": "First Item",
            "severity": 1,
            "status": 0
        },
        {
            "id": 2,
            "body": "Second Item",
            "severity": 2,
            "status": 1
        }
    ]

    return (

        <>
            <h1>this is table data</h1>
            <table border={1}>

                <thead>
                    <tr>
                        <td>id</td>
                        <td>body</td>
                        <td>severity</td>
                        <td>status</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        dummyvalue.map((el) =>(
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.body}</td>
                                <td>{el.severity}</td>
                                <td>{el.status}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}
export default TableData