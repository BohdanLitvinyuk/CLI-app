const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
	const data = await fs.readFile(contactsPath, "utf-8");
	return JSON.parse(data);
}

async function getContactById(contactId) {
	const allContacts = await listContacts();
	const contact = await allContacts.find((contact) => contact.id === contactId);
	return contact || null;
}

async function addContact(data) {
	const contacts = await listContacts();
	const newContact = {
		id: nanoid(),
		...data,
	};
	contacts.push(newContact);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return newContact;
}

async function removeContact(contactId) {
	const contacts = await listContacts();
	const idx =  contacts.findIndex((item) => item.id === contactId);
	if (idx === -1) {
		return null;
	}
	const [result] = contacts.splice(idx, 1);
	await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
	return result;
}

module.exports = {
	listContacts,
	getContactById,
	addContact,
	removeContact,
};
