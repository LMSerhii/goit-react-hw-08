import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import ContactForm from '../ContactForm/ContactForm';
import BlockHeader from '../BlockHeader/BlockHeader';

export default function EditContact({ onClose, id, name, number }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    const currentValues = {
      ...values,
      contactId: id,
    };

    dispatch(updateContact(currentValues));
    toast.success('successfully edited');

    action.resetForm();
    onClose();
  };

  const initialValues = { name: name, number: number };

  return (
    <>
      <BlockHeader>You can edit this contact</BlockHeader>
      <ContactForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        action="Edit contact"
      />
    </>
  );
}
