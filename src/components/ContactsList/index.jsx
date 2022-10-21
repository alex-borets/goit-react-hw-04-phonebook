import PropTypes from 'prop-types';
import ContactsListItem from '../ContactsListItem';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contacts_list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactsListItem
            name={name}
            number={number}
            key={id}
            id={id}
            deleteContact={deleteContact}
          ></ContactsListItem>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
