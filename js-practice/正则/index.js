const emailRegex = /^[a-z0-9][a-z0-9\.\_\-]*@([a-z0-9]+\.)+([a-z0-9]{2,6})$/gi
// i 是不区分大小写
const testEmails = [
  "example@domain.com",    // true
  "user.name@sub.domain.cn", // true
  "user_name@domain.org",  // true
  "username@domain",       // false
  "@domain.com",           // false
  "user@domain.c",         // false
  "user@domain..com"       // false
];

testEmails.forEach(email => {
  console.log(`${email}:`, emailRegex.test(email));
});