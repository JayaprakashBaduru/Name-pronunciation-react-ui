import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>EMPLOYEE NAME</MDBCardTitle>
        <br />
        <MDBCardText>Manager : </MDBCardText>
        <MDBCardText>LOB : </MDBCardText>
        <MDBBtn color="danger" href='#'>View Profile</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}