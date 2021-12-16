import "../../Assets/Styles/components.css"

const CardCode = (props) => {

    const prop = props.props;

    return (
    <div className="cardcode">
        <div className="img-container">
            <img 
                src={prop.img}
                className={prop.name === "Git" ? "git-img" : ""}
            />
            {console.log(prop)}
        </div>
      <span>{prop.name}</span>
    </div>
    )
}

export default CardCode