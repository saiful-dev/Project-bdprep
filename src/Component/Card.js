import './Card.css'
import Aux from './Hoc/Aux';
const Card=(props)=>{

    return(
        
        <div className='Card'>
            <ul>{props.question }</ul>
            {props.answers}
            <button >🔽</button>
         </div>
        
        
        
       
    )
}

export default Card;