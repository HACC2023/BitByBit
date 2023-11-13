import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The CreditCardsCollection. It encapsulates state and variable values for credit card information.
 */
class CreditCardsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CreditCardsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      userId: String, // Assuming userId is a String, you can adjust the type accordingly
      cardholderName: String,
      cardNumber: String,
      expirationDate: String,
      cvv: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against the schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CreditCardsCollection.
 * @type {CreditCardsCollection}
 */
export const CreditCards = new CreditCardsCollection();
