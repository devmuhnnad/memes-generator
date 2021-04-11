import photo from "../Trollface.png";

const Header = () => {
    return (
        <header>
            <div dir="ltr" className="container">
                <img
                src={photo}
                alt="face"
                ></img>
                <h1>هاندو ميمز</h1>
            </div>
        </header>
    )
}

export default Header;