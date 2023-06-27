import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onFilterContact }) => {
  return (
    <Label htmlFor="">
      Find contacts by name
      <Input type="text" value={value} onChange={onFilterContact} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterContact: PropTypes.func.isRequired,
};
