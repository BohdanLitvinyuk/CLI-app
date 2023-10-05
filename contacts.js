// Розкоментуй і запиши значення
//  * const contactsPath = ;
//  */
const fs = require("fs/promises");

// TODO: задокументувати кожну функцію
const listContacts = async () => {
	// ...твій код. Повертає масив контактів.
	const data = await fs.readFile(`${__dirname}/db/contacts.json`, "utf-8");
	return JSON.parse(data);
};

// function getContactById(contactId) {
//   // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
// }

// function removeContact(contactId) {
//   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

// function addContact(name, email, phone) {
//   // ...твій код. Повертає об'єкт доданого контакту.
// }

module.exports = {
	listContacts,
};
