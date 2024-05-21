import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilteredContacts } from "../../redux/filters/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import {
  // selectContacts,
  selectIsLoading,
  selectIsError,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  const filteredContacts = visibleContacts;

  const handleFilterChange = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  return (
    <div className={css.div}>
      <h1 className={css.h1}>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onSearch={handleFilterChange} />
      {isLoading && (
        <div className={css.loader}>
          Please wait...Loading is in progress...
        </div>
      )}
      {isError && <div className={css.error}>Error! Try again!</div>}
      {!isLoading && !isError && (
        <ContactList contactsData={filteredContacts} />
      )}
    </div>
  );
}
