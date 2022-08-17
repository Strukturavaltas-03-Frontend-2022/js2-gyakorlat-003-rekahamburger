const user = {
  firstName: 'John',
  lastName: 'Doe',
  job: 'unknown',
};

const firstName = user.firstName;
const lastName = user.lastName;
 const job = user.job;
 
const {lastName:l, firstName:f, job:j} = user;
console.log(f,l,j);

export {
  firstName,
  lastName,
  job,
  l,
  f,
  j,
 };