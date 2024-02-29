import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import ContactForm from '../ContactForm/ContactForm';
import BlockHeader from '../BlockHeader/BlockHeader';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContacts } from '../../redux/contacts/operations';

export default function AddContact({ closeModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = { name: '', number: '' };

  const handleSaubmit = (values, actions) => {
    const existingContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (existingContact) {
      toast('This contact already exists!', {
        icon: '🧘🏼‍♀️',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      return;
    }

    dispatch(addContacts(values))
      .unwrap()
      .then(() => {
        toast('Contact added successfully!', {
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

    closeModal();
  };

  return (
    <>
      <BlockHeader>Add new contact</BlockHeader>
      <ContactForm
        initialValues={initialValues}
        onSubmit={handleSaubmit}
        action="Add"
      />
    </>
  );
}
