/**
 * Created by mike on 10/1/2015.
 * A caompliant contact list application
 */
/* globals _, _.where, _.sortBy*/
/* exported this.address, this.zipcode,  */

/**
 * A Contact constructor
 * @param firstName First name of the contact
 * @param lastName Last name of the contact
 * @param address address of the contact
 * @param zipcode zipcode of the contact
 * @param telNum telephone number of the contact
 * @constructor
 */
var Contact = function (firstName, lastName, address, zipcode, telNum) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telNum = telNum;
  var callNum = 0;
  this.call = function () {
    callNum++;
    return true;
  };

  this.numCalls = function () {
    return callNum;
  };

};

/**
 * This is a constructor for a contact list and defines related functions below
 * @constructor
 */
var ContactList = function () {

  var contactList = [];

  /**
   *Adds a new contact to the list
   * @param contact Accepts a contact object
   * @returns {boolean} returns true if successful
   */
  this.addContact = function (contact) {
    contactList.push(contact);
    return true;
  };
  /**
   * Displays the total amount of contacts
   * @returns {Number} the number of contacts
   */
  this.numContacts = function () {
    return contactList.length;
  };
  /**
   * Searchs for a contact by providing last name
   * @param last Person's last name
   * @returns {Array} array of contacts with that last name
   */
  this.findContact = function (last) {

    return _.where(contactList, {lastName: last});
  };

  /**
   * Removes a contact from the list
   * @param first contact's first name
   * @param last contact's last name
   */
  this.deleteContact = function (first, last) {
    for (var i = 0; i < contactList.length; i++) {
      if (contactList[i].firstName === first && contactList[i].lastName === last) {
        contactList.splice(i, 1);
      }
    }
  };

  /**
   * Lists contacts in sorted order
   * @returns {Array}
   */
  this.listContacts = function () {
    return _.sortBy(contactList, "lastName");
  };
};

