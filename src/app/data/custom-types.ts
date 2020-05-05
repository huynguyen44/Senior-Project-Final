export class Registrant {
  registrantId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;

  address: string;
  city: string;
  state: CustomState;
  zipCode: string;

  roles: RegistrantRole[];
  courses: CustomCourse[];
  saintName: string;
}

export interface RegistrantRole {
  id: string;
  roleName: string;
}


export interface CustomCourse {
  id: string;
  courseName: string;
}

export interface CustomUser {
  username: string;
  password: string;

  permissions: 'admin' | 'user';
}

export interface CustomState {
  stateAbbr: string;
  stateName: string;
}
