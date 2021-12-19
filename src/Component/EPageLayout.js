import React ,{Component}from "react";
import Aux from "./Hoc/Aux";
import Card from './Card';
import './EPageLayout.css'
import './grid.css'
import './Card.css'

class EPageLayout extends Component{

    state={
        
        question:[],
        questionSample:[
            {
              question: "Who invented JavaScript?",
              answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
              },
             
            },
            {
              question: "Which one of these is a JavaScript package manager?",
              answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
              },
             
            },
            {
              question: "Which tool can you use to ensure code quality?",
              answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
              },
              
            }
          ]
    }

    
    
    render(){
        
        
        const list=this.state.questionSample.map((cVal,i)=>{
                console.log(cVal.answers)
                return <Card question={<ul ><li>{`Q.${i+1}  `+cVal.question}</li></ul>}
                        answers={<ol >
                            <li>{` ${cVal.answers.a}`}</li> 
                            <li>{` ${cVal.answers.b}`}</li>
                            <li>{` ${cVal.answers.c}`}</li>
                            </ol> }
                        
                                
                    
                ></Card>
                }
                )
                

      
        return(
            
            <div className='Layout'>
                <h1>welcome to bdprep</h1>

                <div className='row'>
                    <div className='col span-1-of-2'>
                        <h2>from col-1</h2>
                        {list}
                        
                    </div>

                    <div className='col span-1-of-2'>
                    <h2> from col-2</h2>
                        {list}
                    </div>
                </div>
            </div>
        

        )
    }
}
    export default EPageLayout;