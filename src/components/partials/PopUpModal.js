import CloseIcon from "@mui/icons-material/Close";


export const PopUpModal = ({setOpen}) => {
    return (
        <>
            {/*Below div remains outside the Modal and clicking on it closes the Modal*/}
            <div className="dark-popup-bg" onClick={()=> setOpen(false)}/>
            <div className="overlay flex" >
                <div className="title">Select movie quality</div>
                <div className="close-icon">
                    <CloseIcon/>
                </div>
            </div>
        </>
    );
};

