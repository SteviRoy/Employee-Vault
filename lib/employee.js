// Define an Employee class
class Employee {
  // Constructor function to initialize new Employee objects
  constructor(id, firstName, lastName, roleId, managerId) {
    // Set the id property of the Employee object
    this.id = id;
    // Set the firstName property of the Employee object
    this.firstName = firstName;
    // Set the lastName property of the Employee object
    this.lastName = lastName;
    // Set the roleId property of the Employee object
    this.roleId = roleId;
    // Set the managerId property of the Employee object
    this.managerId = managerId;
  }
}

// Export the Employee class for use in other parts of the application
module.exports = Employee;
