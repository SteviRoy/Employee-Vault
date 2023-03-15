// Define a Role class
class Role {
  // Constructor function to initialize new Role objects
  constructor(id, title, salary, departmentId) {
    // Set the id property of the Role object
    this.id = id;
    // Set the title property of the Role object
    this.title = title;
    // Set the salary property of the Role object
    this.salary = salary;
    // Set the departmentId property of the Role object
    this.departmentId = departmentId;
  }
}

// Export the Role class for use in other parts of the application
module.exports = Role;
