import React from 'react';

const UpdatedComponent = (OriginalComponent,data) => {
    function NewComponent(props) {
        console.log(props)
        return <OriginalComponent
            {...props}
        />;
    }
    return NewComponent;
};

export default UpdatedComponent;



