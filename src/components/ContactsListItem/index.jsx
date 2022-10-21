import PropTypes from 'prop-types';
import css from './ContactsListItem.module.css';

const ContactsListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li className={css.contacts_item}>
      <span className={css.contacts_name}>
        {name}: {number}
      </span>

      <button
        className={css.contacts_btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
