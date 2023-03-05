function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return submittedUser.id === goodUser.id;
      });
    });
  };
}

module.exports = checkUsersValid;


var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

// `checkUsersValid` is the function you'll define
var testAllValid = checkUsersValid(goodUsers);


console.log(testAllValid([{ id: 2 }, { id: 1 }]));// => true

console.log(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]));
// => false
