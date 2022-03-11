import { useParams } from "react-router"

export const Search =()=>{
    const {keyword} = useParams();
    return (
        <section>
            this is the search sectionsdfsdf
            <h1>{keyword}</h1>
        </section>
    )
}