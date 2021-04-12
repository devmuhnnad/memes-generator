
import React, {useState, useEffect} from "react";


function MemeGenerator(){

    const [randomMeme, setRandomMeme] = useState("http://i.imgflip.com/1bij.jpg");
    const [inputs, setInputs] = useState({topText: "دا فوق", bottomText: "دا تحت"});
    const [allMemes, setAllMemes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function changeHandle(e){
        const {name, value} = e.target;
        
        setInputs(prevInputs => {
            return {...prevInputs, [name]: value};
        })

    }

       function getRandomImg(e){
        e.preventDefault();

        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const randomImg = allMemes[randomNumber].url;
        

        setRandomMeme(randomImg);
        setIsLoading(true);

        

    }


    useEffect(()=>{

        fetch("https://api.imgflip.com/get_memes")
        .then(data => data.json())
        .then(response => {
            const {memes} = response.data;

            setAllMemes(memes);


        })
    } , [])

    return (
        <div onSubmit={getRandomImg} className="main container">
                <form>
                    <input
                        type="text"
                        name="topText"
                        placeholder="النص العلوي"
                        
                        onChange={changeHandle}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="النص السفلي"
                        
                        onChange={changeHandle}
                    />

                    <button>{isLoading? "يتم التحميل...": "انشئ"}</button>
                    
                </form>

            <div className="meme container">
                <img
                    onLoad={()=>{setIsLoading(false)}}
                    src={randomMeme}
                    alt="meme"
                />

                <h2 className="top" >{inputs.topText}</h2>
                <h2 className="bottom" >{inputs.bottomText}</h2>
            </div>

            </div>
    )
}





/*
class MemeGenerator extends Component {

    

    componentDidMount(){

        

        
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
*/
export default MemeGenerator;