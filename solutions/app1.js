const user = {
  firstName: 'John',
  lastName: 'Doe',
 job:'unknown',
};

const firstName = user.firstName;
const lastName = user.lastName;
 const job = user.job;

 if (isNaN(job)) {
  user.job= 'unknown';
 }


 if (isNaN(firstName)) {
  user.firstName= 'unknown';
 }

 if (isNaN(lastName)) {
  user.lastName= 'unknown';
 }

console.log(firstName,lastName,job);
//

export {
 firstName,
 lastName,
 job,
};





