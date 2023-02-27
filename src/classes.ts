abstract class Department {
  static fiscalYear = 2022;
  //   private readonly id: string;
  //  name: string;
  protected employees: string[] = [];
  constructor(public name: string, protected readonly id: string) {
    // this.name = n;
    // this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

// We don't need to define our feilds and then store the values.  We can just declare in the constructor parameters if it is public or private. And the type, of course.

// Access Modifiers - public/private --

// Instead of vanilla JS private fields "#myPrivateField", we write it as "private myPrivateField". These are called Access Modifiers

// readonly --
// Another feature of TypeScript we can add is readonly.  This will not allow this field to be edited.

// protected - If we need access to a property in a child class, we can use Protected instead of private or public.  This keeps the property unaccessable from outside the classes, but allows it to be used in the class methods within classes that extend the base class.

// abstract - If we want to have a method on our parent class, but want to force the developers to create a method in each instance, we set the parent class to abstract -> abstract class Department{}, and then set the method to abstract ->  abstract describe(): void.  On this, we need to specify the return statement.  In this case it is void.  Then, in the instance we create we must define this method. You can also add abstract properties.
// Please note: Classes marked as abstract cannot be instantiated themselves.  They NEED to be a parent class. -> abstract class Department, you would not be able to create a "new Department"

// Singleton & Private constructors - If we want to set it up so we can only have ONE instance of a certain class we set our constructor to private.  private constructor() {}. We then create a private static property, in this case we call it instance: AccountingDepartment, with accountingDepartment as the type. We can then create a static method => static getInstance(){}.  Make an if statement that checks if say, AccountingDepartment.instance exists, then return this.instance, if accounting department doesnt exist we set instance = new AccountingDepartment.  We call this from outside of the class, instead of saying const accounting = new AccountingDepartment, it would be const accounting = AccountingDepartment.instance();  If the instance doesn't already exist a new one will be created.  If it DOES exist, this will simply return the instance that already exists.

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'd1');
    this.admins = admins;
  }

  describe() {
    console.log(`IT department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value.');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'd2');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log(`Acounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === 'Cory') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Russ');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Cory']);

it.addEmployee('Cory');
it.addEmployee('Doug');
it.printEmployeeInformation();

it.describe();

// console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2);

// accounting.mostRecentReport = 'Year end report';
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport);
// accounting.printReports();
accounting.describe();

accounting.addEmployee('Cory');
accounting.addEmployee('Darla');
accounting.printEmployeeInformation();
