import { Meteor } from 'meteor/meteor';
import { Containers } from '../../api/container/Containers.js';
import { VendorOrder } from '../../api/vendor/VendorOrder';

/* eslint-disable no-console */

/**
// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};
// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}
*/

// Initialize the database with a default container document.
const addContainer = (data) => {
  console.log(`  Adding: ${data.owner} (${data.size})`);
  Containers.collection.insert(data);
};

// Initialize the Containers collection if empty.
if (Containers.collection.find().count() === 0) {
  if (Meteor.settings.defaultContainer) {
    console.log('Creating default containers.');
    Meteor.settings.defaultContainer.forEach(data => addContainer(data));
  }
}

// Initialize the database with a default vendorOrder document.
const addVendorOrder = (data) => {
  console.log(`  Adding: ${data.email} (${data.containers})`);
  VendorOrder.collection.insert(data);
};

// Initialize the VendorOrder if empty.
if (VendorOrder.collection.find().count() === 0) {
  if (Meteor.settings.defaultOrders) {
    console.log('Creating default containers.');
    Meteor.settings.defaultOrders.forEach(data => addVendorOrder(data));
  }
}
