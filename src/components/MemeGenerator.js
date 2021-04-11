
import React, {Component} from "react";


class MemeGenerator extends Component {

    constructor(){
        super()
        this.state = {
            randomMeme: "http://i.imgflip.com/1bij.jpg",
            topText: "دا فوق",
            bottomText:"دا تحت",
            allMemes: [],
            isloading: false
        }

        this.changeHandle = this.changeHandle.bind(this);
        this.getRandomImg = this.getRandomImg.bind(this);
    }

    componentDidMount(){

        fetch("https://api.imgflip.com/get_memes")
        .then(data => data.json())
        .then(response => {
            const {memes} = response.data;

            this.setState({
                allMemes: memes
            })


        })

        
    }

    changeHandle(e){
        const {name, value} = e.target;
        
        this.setState({
            [name]:value
        })
        console.log(this.state.topText)

    }

    getRandomImg(e){
        e.preventDefault();

        const randomNumber = Math.floor(Math.random() * this.state.allMemes.length);
        const randomImg = this.state.allMemes[randomNumber].url;
        

        this.setState({
            randomMeme: randomImg,
            isloading: true
        })

        

    }

    render(){
        return (
            <div onSubmit={this.getRandomImg} className="main container">
                <form>
                    <input
                        type="text"
                        name="topText"
                        placeholder="النص العلوي"
                        
                        onChange={this.changeHandle}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="النص السفلي"
                        
                        onChange={this.changeHandle}
                    />

                    <button>{this.state.isloading? "يتم التحميل...": "انشئ"}</button>
                    
                </form>

            <div className="meme container">
                <img
                    onLoad={()=>{this.setState({isloading: false})}}
                    src={this.state.randomMeme}
                    alt="meme"
                />

                <h2 className="top" >{this.state.topText}</h2>
                <h2 className="bottom" >{this.state.bottomText}</h2>
            </div>

            </div>
        )
    }
}

export default MemeGenerator;