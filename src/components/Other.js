function Other(props) {

    return (
        <ul class="list-group list-group-flush">
             <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"> Manager : {props.manager}</h6>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"> Location : {props.location}</h6>
            </li>
        </ul>     
    );
  }
  
  export default Other;
  