import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddRental() {
  const [price, setPrice] = useState("");
  const [numBds, setNumBds] = useState("");
  const [sqm, setSqm] = useState("");
  const [rentalType, setRentalType] = useState("");
  const [images, setImages] = useState([]);
  const [address, setAddress] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [numBaths, setNumBaths] = useState("");
  const [isFurnished, setIsFurnished] = useState("");
  const [pets, setPets] = useState("");
  const [parking, setParking] = useState("");
  const [amenities, setAmenities] = useState("");
  const [heating, setHeating] = useState("");
  const [cooling, setCooling] = useState("");
  const [laundry, setLaundry] = useState("");
  const [internet, setInternet] = useState("");
  const [availability, setAvailability] = useState(null);
  const [extraInfo, setExtraInfo] = useState("");

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleNumBdsChange = (event) => {
    setNumBds(event.target.value);
  };

  const handleSqmChange = (event) => {
    setSqm(event.target.value);
  };

  const handleRentalTypeChange = (event) => {
    setRentalType(event.target.value);
  };

  const handleImageChange = (event) => {
    setImages([...images, event.target.files[0]]);
  };

  const handleAdressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNumPeopleChange = (event) => {
    setNumPeople(event.target.value);
  };

  const handleNumBathsChange = (event) => {
    setNumBaths(event.target.value);
  };

  const handleIsFurnishedChange = (event) => {
    setIsFurnished(event.target.value);
  };

  const handlePetsChange = (event) => {
    setPets(event.target.value);
  };

  const handleParkingChange = (event) => {
    setParking(event.target.value);
  };

  const handleAmenitiesChange = (event) => {
    setAmenities(event.target.value);
  };

  const handleHeatingChange = (event) => {
    setHeating(event.target.value);
  };

  const handleCoolingChange = (event) => {
    setCooling(event.target.value);
  };

  const handleLaundryChange = (event) => {
    setLaundry(event.target.value);
  };

  const handleInternetChange = (event) => {
    setInternet(event.target.value);
  };

  const handleExtraInfoChange = (event) => {
    setExtraInfo(event.target.value);
  };

  const handleDateChange = (date) => {
    setAvailability(date);
  };




  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("price", price);
    formData.append("numBds", numBds);
    formData.append("sqm", sqm);
    formData.append("rentalType", rentalType);
    images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("address", address);
    formData.append("numPeople", numPeople);
    formData.append("numBaths", numBaths);
    formData.append("isFurnished", isFurnished);
    formData.append("pets", pets);
    formData.append("parking", parking);
    formData.append("amenities", amenities);
    formData.append("heating", heating);
    formData.append("cooling", cooling);
    formData.append("laundry", laundry);
    formData.append("internet", internet);
    formData.append("extraInfo", extraInfo);
    formData.append("availability", availability);

    axios.post("/rentals", formData).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Container>
      <h1>Add Rental</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="price">
          <Form.Label>Price $/mo</Form.Label>
          <Form.Control type="number" value={price} onChange={handlePriceChange} />
        </Form.Group>

        <Form.Group controlId="numBds">
          <Form.Label>Number of bds</Form.Label>
          <Form.Control type="number" value={numBds} onChange={handleNumBdsChange} />
        </Form.Group>

        <Form.Group controlId="sqm">
          <Form.Label>Sqm</Form.Label>
          <Form.Control type="number" value={sqm} onChange={handleSqmChange} />
        </Form.Group>

        <Form.Group controlId="rentalType">
          <Form.Label>Rental Type</Form.Label>
          <Form.Control as="select" value={rentalType} onChange={handleRentalTypeChange}>
            <option value="home-for-sale">Home for sale</option>
            <option value="home-for-rent">Home for rent</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="images">
          <Form.Label>Images</Form.Label>
          <Form.Control type="file" onChange={handleImageChange} multiple />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="input" value={address} onChange={handleAdressChange} />
        </Form.Group>

        <Form.Group controlId="numPeople">
          <Form.Label>Number of People</Form.Label>
          <Form.Control type="number" value={numPeople} onChange={handleNumPeopleChange} />
        </Form.Group>

        <Form.Group controlId="numBaths">
          <Form.Label>Number of Baths</Form.Label>
          <Form.Control type="number" value={numBaths} onChange={handleNumBathsChange} />
        </Form.Group>

        <Form.Group controlId="isFurnished">
          <Form.Label>is Furnished ?</Form.Label>
          <Form.Control as="select" value={isFurnished} onChange={handleIsFurnishedChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="part">Only a part</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="pets">
          <Form.Label>Pets permitted</Form.Label>
          <Form.Control as="select" value={pets} onChange={handlePetsChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="parking">
          <Form.Label>Parking</Form.Label>
          <Form.Control as="select" value={parking} onChange={handleParkingChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="amenities">
          <Form.Label>Amenities</Form.Label>
          <Form.Control as="input" value={amenities} onChange={handleAmenitiesChange} />
        </Form.Group>

        <Form.Group controlId="heating">
          <Form.Label>Heating</Form.Label>
          <Form.Control as="select" value={heating} onChange={handleHeatingChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="cooling">
          <Form.Label>Cooling</Form.Label>
          <Form.Control as="select" value={cooling} onChange={handleCoolingChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="laundry">
          <Form.Label>Laundry</Form.Label>
          <Form.Control as="select" value={laundy} onChange={handleLaundryChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="internet">
          <Form.Label>Internet</Form.Label>
          <Form.Control as="select" value={internet} onChange={handleInternetChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="extraInfo">
          <Form.Label>Extra Info</Form.Label>
          <Form.Control as="textarea" value={extraInfo} onChange={handleExtraInfoChange} />
        </Form.Group>

        <Form.Group controlId="availability">
          <Form.Label>Availability</Form.Label>
          <Form.Control as={DatePicker} selected={selectedDate} onChange={handleDateChange} value={availability} />
        </Form.Group>


        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
}

export default AddRental;
