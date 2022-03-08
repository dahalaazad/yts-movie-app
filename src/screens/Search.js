import { useParams } from "react-router"

export const Search =()=>{
    const {keyword} = useParams();
    return (
        <section>
            this is the search section
            <h1>{keyword}</h1>
        </section>
    )
}