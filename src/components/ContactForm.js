import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onAddContact,
}) => {
  return (
    <div>
      <label className={styles.label}>Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onNameChange}
        className={styles.input}
      />

      <label className={styles.label}>Number:</label>
      <input
        type="text"
        name="number"
        value={number}
        onChange={onNumberChange}
        className={styles.input}
      />

      <button onClick={onAddContact} className={styles.button}>
        Add Contact
      </button>
    </div>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
