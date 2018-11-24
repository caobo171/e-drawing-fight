import React,{Component} from 'react';

 class WordNotify extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){console.log("long",this.props.isOwner);
        if(this.props.isOwner){
            this.renderWord();
        }
    }
    render(){console.log(this.state.word);
        return (
            <div className="popup-top notification">
                <div className="notification-word popup-top__content">
                    <div className="notification-word__content">
                        <p className="notification-word__content--note" >
                            Draw 1/5 Words 
                        </p>
                        <h1 className="heading-primary notification-word__content--word">
                            {this.state.word}
                        </h1>
                        <p className="notification-word__content--warning">
                            Under 15s and continue in 
                            <span className="notification-word__content--warning--count-down"> {this.props.time} </span> s
                        </p>
                    </div>
                </div>
            </div>
            )
    }
}
export default WordNotify;  
