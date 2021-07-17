import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phonebook.loading;
const getFilter = state => state.phonebook.filter;
const getAllContacts = state => state.phonebook.contacts;

const getFilteredContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) =>
        contacts.filter(({ name }) =>name.toLowerCase().includes(filter.toLowerCase()))
);

export default {
    getLoading,
    getFilter,
    getAllContacts,
    getFilteredContacts,
};