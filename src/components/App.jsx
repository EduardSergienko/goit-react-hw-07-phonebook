import ContactForm from './ContactForm/contactForm';
import { Filter } from './Filter/filter';
import { ContactList } from './ContactList/contactList';
import styles from './appWrap.module.scss';
import { getIsLoading } from 'redux/store';
import { useSelector } from 'react-redux';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
export default function App() {
  const isLoading = useSelector(getIsLoading);
  console.log(isLoading);
  return (
    <>
      <h1 className={styles.appTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.appTitle}>Contacts</h2>
      <Filter />
      {isLoading
        ? Loading.circle({
            svgColor: '#3152f5',
          })
        : Loading.remove()}
      <ContactList />
    </>
  );
}
