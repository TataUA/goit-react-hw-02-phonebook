import PropTypes from 'prop-types';
import { ItemLi, ItemSpan, Button } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ItemLi>
      {' '}
      {name}
      <ItemSpan>&#9990; {number}</ItemSpan>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ItemLi>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
