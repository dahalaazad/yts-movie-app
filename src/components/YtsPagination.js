import {Pagination} from "@mui/material";
import {useState} from "react";

export const YtsPagination = ({page,setPage}) => {

    return (
        <div className="pagination pt-xl buttons flex justify-center">
            {/*{page !==1 && <button onClick={()=>setPage(page-1)}>Prev</button>}*/}
            {/*{pages.map(item => (*/}
            {/*    <button key={item} className='mx-lg border bg-yts-green pa-md' onClick={()=>setPage(item)}>{item}</button>*/}
            {/*))}*/}
            {/*<button onClick={()=>setPage(page+1)}>Next</button>*/}

            <Pagination count={2240} variant='outlined'
                        color='success'
                        page={page}
                        shape='rounded'
                        showFirstButton
                        showLastButton
                        boundaryCount={0}
                        siblingCount={2}
                        onChange={(event, value) => setPage(value)}/>
        </div>
    );
};


