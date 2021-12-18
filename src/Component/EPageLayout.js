import React ,{Component}from "react";

import './EPageLayout.css'
import './grid.css'

class EPageLayout extends Component{





    render(){
        return(
            <div className='Layout'>
                <h1>welcome to bdprep</h1>
                <div className='row'>
                    <div className='col span-1-of-2'>
                        <h2>from col-1</h2>
                    </div>

                    <div className='col span-1-of-2'>
                    <h2> from col-2</h2>
                    </div>
                </div>
            </div>
            

        )
    }
}
    export default EPageLayout;