import React from "react";

class Child extends React.Component{


    render(){
        return(
            <div>
              
                <button onClick={()=>this.props.updateBrand("Audi")}>brand</button>
            </div>
        )
    }
}
export default Child;