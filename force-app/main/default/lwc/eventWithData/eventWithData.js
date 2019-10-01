// eventWithData.js
/*eslint-disable no-console*/
import { LightningElement, wire, track, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventWithData extends LightningElement {
    constructor()
    {
        super();
        console.log('Value ----- ' +this.contacts);
        this.greetings = 'Hello Gautam';
        console.log('greetings ----- ' +this.greetings);
        this.totrack();

    }
    connectedCallback() {
        console.log('Value1111 ----- ' +this.contacts);
        console.log('greetings 1111----- ' +this.greetings);

    }
    totrack() {
        console.log('Value222 ----- ' +this.contacts);
        console.log('greetings 2222----- ' +this.greetings);

    }
    @track selectedContact;
    @track greetings;

    @wire(getContactList) contacts;

    contactSelected(event) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.data.find(contact => contact.Id === contactId);
    }

    get listIsNotEmpty() {
        return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length > 0;
    }
}