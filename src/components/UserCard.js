import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from 'react-bootstrap/Button'
import { deepOrange, orange } from '@mui/material/colors';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export default function UserCard(props) {
  return (
    <MDBCard>
      <MDBCardBody>
        <div class="row">
            <div class="col-lg-2">
                <Avatar sx={{ bgcolor: orange[500], width:110, height:110, fontSize:40, marginTop:3, marginLeft:2 }}>{props.name[0]}</Avatar>
            </div>
            <div class="col-lg-10">
                <MDBCardTitle className="mt-4 mb-0">{props.name}</MDBCardTitle>
                <br />
                <MDBCardText className='mb-0'>Short name : {props.pref_name}</MDBCardText>
                <MDBCardText>Email : {props.email}</MDBCardText>
                <Button className='mb-2' variant="danger" href='#'>View Profile</Button>
            </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}