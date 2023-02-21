const user = {
  id: 1,
  name: "John",
  age: 25,
};

function storage(){
  window.localStorage.setItem('user', JSON.stringify(user));
  window.localStorage.setItem("user");
  JSON.parse(window.localStorage.getItem('user'));
  window.localStorage.getItem('user');

}
storage()
