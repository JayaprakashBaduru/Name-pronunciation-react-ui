import logo from '../logo.svg';
import '../css/user.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { hover } from '@testing-library/user-event/dist/hover';
import Personal from './Personal';
import Other from './Other';
import Work from './Work';
import Skills from './Skills';

// {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>{name[0]}</Avatar> */}

function User(props) {
  const first_name = "John"
  const last_name = "Doe"
  const preferred_name = "J"
  const email = "john@gmail.com"
  const manager = "Jane Doe"
  const location = "Bangalore, India"
  const personal_contact = 23456677
  const work_contact = 23456677
  const address = "Bangalore, India"
  const skills = ['Web Design', 'Java microservicess', 'Python']
  const name_audio = {}


  return (
    <div class="container">
         <div class="main-body">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <Personal first_name={first_name} last_name={last_name} preferred_name={preferred_name} audio={name_audio} />
                            <hr class="my-4"></hr>
                            <Other manager={manager} location={location}/>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-8">
                    <Work first_name={first_name} last_name={last_name} email={email} personal_contact={personal_contact} work_contact={work_contact} address={address}/>
                    <div class="row">
                        <div class="col-sm-12">
                            <Skills skills={skills}/>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>    
  );
}

export default User;
