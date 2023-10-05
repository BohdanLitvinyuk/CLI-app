const contacts = require("./contacts");
const invokeAction = async ({ action }) => {
	switch (action) {
		case "list":
			const allContacts = await contacts.listContacts();
			return console.log(allContacts);
	}
};

invokeAction({ action: "list" });
