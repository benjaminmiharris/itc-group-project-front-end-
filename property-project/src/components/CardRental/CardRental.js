import React, { useState } from "react";
import { Modal, Card, Button } from "react-bootstrap";
import DatePicker from "react-datepicker"; // for calendrer
import "react-datepicker/dist/react-datepicker.css";

function CardRental(props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const {
    price,
    numBds,
    sqm,
    rentalType,
    image,
    address,
    numPeople,
    numBaths,
    isFurnished,
    pets,
    parking,
    amenities,
    heating,
    cooling,
    laundry,
    internet,
    extraInfo,
    availability,
  } = props;

  return (
    <Card className="card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{address}</Card.Title>
        <Card.Text>
          <b>Price:</b> {price} $/mo <br />
          <b>Number of bds:</b> {numBds} <br />
          <b>Sqm:</b> {sqm} <br />
          <b>Rental Type:</b> {rentalType} <br />
        </Card.Text>
        <Button variant="primary" onClick={handleShowDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        {showDetails && (
          <Card.Text className="mt-3">
            <b>Address:</b> {address} <br />
            <b>Number of People:</b> {numPeople} <br />
            <b>Number of Baths:</b> {numBaths} <br />
            <b>Is Furnished:</b> {isFurnished} <br />
            <b>Pets:</b> {pets} <br />
            <b>Parking:</b> {parking} <br />
            <b>Amenities:</b> {amenities} <br />
            <b>Heating:</b> {heating} <br />
            <b>Cooling:</b> {cooling} <br />
            <b>Laundry:</b> {laundry} <br />
            <b>Internet:</b> {internet} <br />
            <b>Extra Info:</b> {extraInfo} <br />
            <b>Availability:</b> {availability} <br />
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardRental;
