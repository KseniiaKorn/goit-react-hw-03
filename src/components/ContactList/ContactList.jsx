import React from 'react';
import Contact from '../Contact/Contact';


const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <div>
            <ul>
                {contacts.map(({ id, name, number }) => (<Contact key={id} id={id } name={name} number={number} onDeleteContact={onDeleteContact}/>))}
            </ul>
        </div>
    );
};

export default ContactList;