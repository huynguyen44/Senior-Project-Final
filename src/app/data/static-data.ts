import {CustomCourse, CustomState, CustomUser, Registrant, RegistrantRole} from './custom-types';

export const initialRoles: RegistrantRole[] = [
  {id: '1', roleName: 'Parent'},
  {id: '2', roleName: 'Student'},
  {id: '3', roleName: 'Teacher'},
  {id: '4', roleName: 'Teacher Assistant'},
];

export const initialCourses: CustomCourse[] = [
  {id: '1', courseName: 'Viet Ngu I'},
  {id: '2', courseName: 'Viet Ngu II'},
  {id: '3', courseName: 'Viet Ngu III'},
  {id: '4', courseName: 'Viet Ngu IV'},
  {id: '5', courseName: 'First Communion'},
  {id: '6', courseName: 'Reconciliation'},
  {id: '7', courseName: 'Confirmation'},
  {id: '8', courseName: 'Marriage Prep'},
  {id: '9', courseName: 'RCIA'},
  {id: '10', courseName: 'Bible Study'},
];

export const allRegistrants: Registrant[] = [
  {
    registrantId: 0,
    firstName: 'Crystal',
    middleName: 'No',
    lastName: 'Buchanan',
    email: 'anEmailAddress@gmail.com',
    phone: '2101234567',
    username: 'cweestal',

    address: '123 Made Up Street Name Rd',
    city: 'San Antonio',
    state: {stateAbbr: 'TX', stateName: 'Texas'},
    zipCode: '78251',

    roles: [{id: '2', roleName: 'Student'}, {id: '3', roleName: 'Teacher'}],
    courses: [{id: '8', courseName: 'Marriage Prep'}, {id: '9', courseName: 'RCIA'}],
    saintName: 'Dymphna',
  },
  {
    registrantId: 1,
    firstName: 'Matthew',
    middleName: 'Brenden or maybe Brendan',
    lastName: 'Christman',
    email: 'anEmailAddress@gmail.com',
    phone: '2107654321',
    username: 'crispyboix',

    address: '123 Made Up Street Name Rd',
    city: 'San Antonio',
    state: {stateAbbr: 'TX', stateName: 'Texas'},
    zipCode: '78240',

    roles: JSON.parse(JSON.stringify(initialRoles)),
    courses: JSON.parse(JSON.stringify(initialCourses)),
    saintName: 'Anthony',
  }
];

export const newRegistrant: Registrant = {
  registrantId: 0,
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phone: '',
  username: '',

  address: '',
  city: '',
  state: {stateAbbr: '', stateName: ''},
  zipCode: '',

  roles: [],
  courses: [],
  saintName: '',
};

export const allUsers: CustomUser[] = [
  {username: 'admin', password: 'admin1234', permissions: 'admin'},
  {username: 'cweestal', password: '12345', permissions: 'user'},
  {username: 'crispyboix', password: '12345', permissions: 'user'}
];

export const allStates: CustomState[] = [
  {stateAbbr: 'AL', stateName: 'Alabama'},
  {stateAbbr: 'AK', stateName: 'Alaska'},
  {stateAbbr: 'AZ', stateName: 'Arizona'},
  {stateAbbr: 'AR', stateName: 'Arkansas'},
  {stateAbbr: 'CA', stateName: 'California'},
  {stateAbbr: 'CO', stateName: 'Colorado'},
  {stateAbbr: 'CT', stateName: 'Connecticut'},
  {stateAbbr: 'DE', stateName: 'Delaware'},
  {stateAbbr: 'DC', stateName: 'District Of Columbia'},
  {stateAbbr: 'FL', stateName: 'Florida'},
  {stateAbbr: 'GA', stateName: 'Georgia'},
  {stateAbbr: 'HI', stateName: 'Hawaii'},
  {stateAbbr: 'ID', stateName: 'Idaho'},
  {stateAbbr: 'IL', stateName: 'Illinois'},
  {stateAbbr: 'IN', stateName: 'Indiana'},
  {stateAbbr: 'IA', stateName: 'Iowa'},
  {stateAbbr: 'KS', stateName: 'Kansas'},
  {stateAbbr: 'KY', stateName: 'Kentucky'},
  {stateAbbr: 'LA', stateName: 'Louisiana'},
  {stateAbbr: 'ME', stateName: 'Maine'},
  {stateAbbr: 'MD', stateName: 'Maryland'},
  {stateAbbr: 'MA', stateName: 'Massachusetts'},
  {stateAbbr: 'MI', stateName: 'Michigan'},
  {stateAbbr: 'MN', stateName: 'Minnesota'},
  {stateAbbr: 'MS', stateName: 'Mississippi'},
  {stateAbbr: 'MO', stateName: 'Missouri'},
  {stateAbbr: 'MT', stateName: 'Montana'},
  {stateAbbr: 'NE', stateName: 'Nebraska'},
  {stateAbbr: 'NV', stateName: 'Nevada'},
  {stateAbbr: 'NH', stateName: 'New Hampshire'},
  {stateAbbr: 'NJ', stateName: 'New Jersey'},
  {stateAbbr: 'NM', stateName: 'New Mexico'},
  {stateAbbr: 'NY', stateName: 'New York'},
  {stateAbbr: 'NC', stateName: 'North Carolina'},
  {stateAbbr: 'ND', stateName: 'North Dakota'},
  {stateAbbr: 'OH', stateName: 'Ohio'},
  {stateAbbr: 'OK', stateName: 'Oklahoma'},
  {stateAbbr: 'OR', stateName: 'Oregon'},
  {stateAbbr: 'PA', stateName: 'Pennsylvania'},
  {stateAbbr: 'RI', stateName: 'Rhode Island'},
  {stateAbbr: 'SC', stateName: 'South Carolina'},
  {stateAbbr: 'SD', stateName: 'South Dakota'},
  {stateAbbr: 'TN', stateName: 'Tennessee'},
  {stateAbbr: 'TX', stateName: 'Texas'},
  {stateAbbr: 'UT', stateName: 'Utah'},
  {stateAbbr: 'VT', stateName: 'Vermont'},
  {stateAbbr: 'VA', stateName: 'Virginia'},
  {stateAbbr: 'WA', stateName: 'Washington'},
  {stateAbbr: 'WV', stateName: 'West Virginia'},
  {stateAbbr: 'WI', stateName: 'Wisconsin'},
  {stateAbbr: 'WY', stateName: 'Wyoming'},
];
