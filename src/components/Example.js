import React from "react";
function Example({exampleProp, children, textPosition}){
    return(
    <div className={`container ${textPosition}`}>
            {exampleProp? <h2>{exampleProp}</h2>: null}
            <div>
                {children}
            </div>
        </div>
    )

}

export default Example;