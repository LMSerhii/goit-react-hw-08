import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import ContactForm from '../ContactForm/ContactForm';
import BlockHeader from '../BlockHeader/BlockHeader';

export default function EditContact({ onClose, id, name, number }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const currentValues = {
      ...values,
      contactId: id,
    };

    dispatch(updateContact(currentValues))
      .unwrap()
      .then(() => {
        toast('Contact edit successfully!', {
          icon: '✔️',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        actions.resetForm();
      })
      .catch(() =>
        toast('Something went wrong!', {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      );

    onClose();
  };

  const initialValues = { name: name, number: number };

  return (
    <>
      <BlockHeader>You can edit this contact</BlockHeader>
      <ContactForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        action="edit"
      />
    </>
  );
}
