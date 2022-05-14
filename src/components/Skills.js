function Skills(props) {
    const skills = props.skills
    return (
        <div class="card">
            <div class="card-body">
                <h5>
                    <p>Skills :</p>
                </h5>
                <div class="entry-content">
                    {skills.map(skill => (  
                        <p>&#9642; {skill}  
                        </p>  
                    ))}
                </div>
            </div> 
        </div>
    );
  }
  
  export default Skills;
  