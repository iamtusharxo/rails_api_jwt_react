import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import API_BASE_URL from '../../shared/config/apiconfig';
import './EditProfileModal.css';
Modal.setAppElement('#root');
const EditProfileModal = ({ userId, isOpen, onClose, onUpdate }) => {
  const [editedProfile, setEditedProfile] = useState({
    name: '',
    email: '',
  });

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    let isValid = true;

    if (!editedProfile.name || editedProfile.name.length < 6) {
      setNameError('Name should be at least 6 characters');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!editedProfile.email || !isValidEmail(editedProfile.email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleUpdateProfile = async () => {
    if (validateInputs()) {
      try {
        const token = sessionStorage.getItem('authToken');
        await axios.put(`${API_BASE_URL}/users/${userId}`, editedProfile, {
          headers: {
            Authorization: `${token}`,
          },
        });
        onUpdate();
        onClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isSaveDisabled = !editedProfile.name || !editedProfile.email;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Edit Profile Modal" className="custom-modal">
      <div className="modal-header">
        <h2>Edit Profile</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={editedProfile.name}
              onChange={handleInputChange}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={editedProfile.email}
              onChange={handleInputChange}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </Form.Group>
        </Form>
      </div>
      <div className="modal-footer">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateProfile} disabled={isSaveDisabled}>
          Save Changes
        </Button>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
