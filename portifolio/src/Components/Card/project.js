const CardProject = (props) => {
  
  const prop = props.prop

  return (
      <a class="project project-tile" href={prop.href} target="_blank"><img src={prop.image}/>
        <p class="project-title"><span class="code">&lt; </span>{prop.name}<span class="code"> &#47;&gt;</span></p>
      </a>
  );

}

export default CardProject