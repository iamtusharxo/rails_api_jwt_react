import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import API_BASE_URL from '../../shared/config/apiconfig';
import './EditProfileModal.css';

const EditProfileModal = ({ userId, isOpen, onClose, onUpdate }) => {
  const [editedProfile, setEditedProfile] = useState({
    name: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      const token = localStorage.getItem('authToken');
      await axios.put(`${API_BASE_URL}/users/${userId}`, editedProfile, {
        headers: {
          Authorization: `${token}`,
        },
      });
      onUpdate();
      onClose();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      {/* 'centered' prop helps to center the modal */}
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          </Form.Group>
          {/* Add other input fields as needed */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdateProfile}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
