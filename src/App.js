import React, { Component } from 'react';
// import shortid from 'shortid';
import { connect } from 'react-redux';
import phonebookOperations from './redux/phonebook/phonebook-operations';
import phonebookSelectors from './redux/phonebook/phonebook-selectors';

import Container from './components/Container';
import Section from './components/Section';
import AddContactsForm from './components/AddContactsForm';
import Filter from './components/Filter';
import ContactList from './components/ContactsList';

class App extends Component {
 

  componentDidMount() {
    this.props.fetchContacts();
  };

  render() {
    const {isLoadingContacts} = this.props
    return (
      <Container >
        <Section
          title={'Phonebook'}
          children={
            <AddContactsForm />
          }
        />
        <Section
          title={'Contacts'}
        >
          {
            isLoadingContacts
            ? <h1>Загружаем</h1>
            :<>
              <Filter />
              
              <ContactList />
            </>
          }
        </Section>
      </Container>
    );
  };
};

const mapStateToProps = state => ({
  isLoadingContacts: phonebookSelectors.getLoading(state)
});

const mapDispatchToProps = dispatch => ({
 fetchContacts: () => dispatch(phonebookOperations.fetchContacts())
});


export default connect (mapStateToProps, mapDispatchToProps)(App);