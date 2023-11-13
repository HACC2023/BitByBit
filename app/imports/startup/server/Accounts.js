import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { CreditCards } from '/imports/api/stuff/creditCards'; // Import the CreditCards collection

/* eslint-disable no-console */

<<<<<<< HEAD
const createNewUser = ({ email, password, firstName, lastName, role, cardDetails }) => {
  console.log(`Creating user ${email}.`);

  const userId = Accounts.createUser({
    username: email,
    email: email,
    password: password,
    profile: {
      firstName: firstName,
      lastName: lastName,
    },
=======
const createUser = (firstName, lastName, email, password, role) => {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    role: role,
>>>>>>> main
  });

  if (role === 'admin') {
    Roles.createRole(role, { unlessExists: true });
<<<<<<< HEAD
    Roles.addUsersToRoles(userId, 'admin');
  }

  // Store credit card details in the CreditCards collection
  if (cardDetails) {
    CreditCards.insert({
      userId: userId,
      cardholderName: cardDetails.cardholderName,
      cardNumber: cardDetails.cardNumber,
      expirationDate: cardDetails.expirationDate,
      cvv: cardDetails.cvv,
    });
=======
    Roles.addUsersToRoles(userID, 'admin');
  } else if (role === 'moderator') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'moderator');
  } else if (role === 'vendor') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'vendor');
  } else if (role === 'user') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'user');
>>>>>>> main
  }
};

Meteor.methods({
  createNewUser,
});

// When running the app for the first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
<<<<<<< HEAD
    Meteor.settings.defaultAccounts.forEach(({ email, password, firstName, lastName, role, cardDetails }) => {
      createNewUser({ email, password, firstName, lastName, role, cardDetails });
    });
=======
    Meteor.settings.defaultAccounts.forEach(({ firstName, lastName, email, password, role }) => createUser(firstName, lastName, email, password, role));
>>>>>>> main
  } else {
    console.log('Cannot initialize the database! Please invoke meteor with a settings file.');
  }
}
