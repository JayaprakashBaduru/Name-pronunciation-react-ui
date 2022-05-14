import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from 'react-bootstrap/Button'
import { deepOrange, orange } from '@mui/material/colors';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export default function UserCard(props) {
  // [sid, firstName, lastName, shortName, voicePath] = props;
  const sid = props.sid;
  const firstName = props.firstName;

  return (
    <MDBCard>
      <MDBCardBody>
        <div class="row">
            <div class="col-lg-2">
                <Avatar sx={{ bgcolor: orange[500], width:110, height:110, fontSize:40, marginTop:3, marginLeft:2 }}>{props.firstName[0]}{props.lastName[0]}</Avatar>
            </div>
            <div class="col-lg-10">
                <MDBCardTitle className="mt-4 mb-0">{props.firstName} {props.lastName}</MDBCardTitle>
                <br />
                <MDBCardText className='mb-0'>SID : {props.sid}</MDBCardText>
                <MDBCardText>Short name : {props.shortName}</MDBCardText>
                <Button className='mb-2' variant="danger" key={`${firstName}`} href={`/user/${firstName}`}>View Profile</Button>

          
                {/* <Routes>
                    <Route exact path='/app' element={<User />} />
                </Routes> */}


            </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}