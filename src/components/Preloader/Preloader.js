import './Preloader.css'

const Preloader = ({ hidden = true }) => {
    return (
        <div className={`preloader${hidden ? " preloader__hidden" : ""}`}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader