import React, { Component } from 'react';
import { connect } from 'react-redux';

import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import phonebookSelectors from "../../redux/phonebook/phonebook-selectors";

import styles from './AddContactsForm.module.css'

class AddContactsForm extends Component {
 
    state = {
        name: '',
        number:''
    };

    handleChange = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault(); 
        const { contacts } = this.props
        const { name } = this.state
        this.checkUniq(contacts, name);
        this.setState({ name: '', number:'' });
    };

    checkUniq = (contacts, name) => {
    const { onSubmit } = this.props
    return contacts.some((i) => i.name === name) ? alert(`${name} is already in contacts`) : onSubmit(this.state.name, this.state.number)
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}
                className={styles.form}
            >
              <label>
                    Name
                <input
                        className={styles.input}
                  value={ this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                />
              </label>              
              <label>
                    Number
                <input
                  value={ this.state.number}
                  onChange={this.handleChange}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                />
                </label>
                <button
                    type="submit"
                    className={styles.btnAdd}
                >
                Add contact
                </button>
           </form>  
        )
    }
};

const mapStateToProps = (state) => ({
  contacts: phonebookSelectors.getAllContacts(state),
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number)=> dispatch(phonebookOperations.addContact(name, number))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddContactsForm);