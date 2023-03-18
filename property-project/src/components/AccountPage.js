import React, { useState } from "react";

function AccountPage() {
  // WAITING FOR BACKEND API
  const [user, setUser] = useState({
    firstName: "Kim",
    lastName: "Uzan",
    email: "ku@gmail.com",
    password: "*********",
    phoneNumber: "058-521-1557",
    address: "111 Ben Gourion St.",
    city: "RG",
    state: "ISRAEL",
    zipCode: "5558662"
  });

  // UPDATE
  function handleUpdateUser(event) {
    event.preventDefault();
    const form = event.target;
    const updatedUser = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      password: form.password.value,
      phoneNumber: form.phoneNumber.value,
      address: form.address.value,
      city: form.city.value,
      state: form.state.value,
      zipCode: form.zipCode.value
    };
    setUser(updatedUser);
  }

  return (
    <div>
      <h1>My account</h1>
      <form onSubmit={handleUpdateUser}>
        <label>
          First Name:
          <input type="text" name="firstName" defaultValue={user.firstName} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" defaultValue={user.lastName} />
        </label>
        <br />
        <label>
          E-mail:
          <input type="email" name="email" defaultValue={user.email} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" defaultValue={user.password} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" defaultValue={user.phoneNumber} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" defaultValue={user.address} />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" defaultValue={user.city} />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" defaultValue={user.state} />
        </label>
        <br />
        <label>
          Zip Code:
          <input type="text" name="zipCode" defaultValue={user.zipCode} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default AccountPage;
