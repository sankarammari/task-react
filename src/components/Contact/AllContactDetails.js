import deleteIcon from "../../images/trash-bin.png";
import view from "../../images/view.png";
import pencil from "../../images/pencil.png";
import profile from "../../images/user.png";
import ContactDetails from "../ContactDetails/ContactDetails";
import { useState } from "react";

function AllContacts({
  id,
  name,
  phoneNumber,
  setPageName,
  setIsShowAddContact,
  email,
  address,
  deleteContact,
  handleEdit, // Receive handleEdit function
}) {
  const [showContactDetails, setShowContactDetails] = useState(false);

  return (
    <div className="contactList">
      <p>{id}</p>
      <div className="basicInfo">
        <img src={profile} alt="" />
        <div>
          <p>{name}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
      <div className="editMode">
        <button
          onClick={() => {
            setShowContactDetails(true);
          }}
        >
          <img src={view} alt="" />
        </button>
        <button
          onClick={() => {
            deleteContact(id);
          }}
        >
          <img src={deleteIcon} alt="" />
        </button>
        <button
          onClick={() => {
            handleEdit({
              id,
              name,
              email,
              address,
              phoneNumber,
            }); // Pass contact details for editing
          }}
        >
          <img src={pencil} alt="" />
        </button>
      </div>
      {showContactDetails ? (
        <ContactDetails
          setShowContactDetails={setShowContactDetails}
          name={name}
          email={email}
          address={address}
          phoneNumber={phoneNumber}
        />
      ) : null}
    </div>
  );
}

export default AllContacts;
