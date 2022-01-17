import React,{Component} from "react";
import './box-container.styles.css';
import { SingleBox } from "../Singlebox/Singlebox.component";
import Image1 from '../images/icon-supervisor.svg';
import Image2 from '../images/icon-team-builder.svg';
import Image3 from '../images/icon-calculator.svg';
import Image4 from '../images/icon-karma.svg';

class Box extends Component{
    constructor(){
        super();
        this.state={
            boxes:[
                {
                    title :'Supervisor',
                    body:'Monitors activity to identify project roadblocks',
                    image:Image1,
                    color:'pink'
                },
                {
                    title :'Team Builder',
                    body:'Scans our talent network to create the optimal team for your project',
                    image:Image2,
                    color:'red'
                },
                {
                    title :'Calculator',
                    body:'Uses data from past projects to provide better delivery estimates',
                    image:Image3,
                    color:'purple'
                },
                {
                    title :'Karma',
                    body:'Regularly evaluates our talent to ensure quality',
                    image:Image4,
                    color:'yellow'
                }
            ]
        }
    }
    render(){
        const {boxes} = this.state;
        return(
            <div className="container">
                {
                    boxes.map((box)=>(
                        <SingleBox key={Math.random()} title={box.title} body={box.body} img={box.image} col={box.color}/>
                
                    ))
                }
            </div>
        )
    }
}
export default Box;