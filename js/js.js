var load = document.getElementById('loadUsers');
var people = document.getElementById('people');
var errorM = document.getElementById('errorMassage');
var errorS = document.getElementById('errorStatus');
var errorT = document.getElementById('errorText');
var elemBtn = document.getElementById('btnUsers');
var firstPage = document.getElementsByTagName('HEADER');
var allMain = document.getElementsByTagName('MAIN');
var clientX = 0, systemNumBtn = 0, lastSystemNumBtn;
var firstName = document.getElementsByClassName('firstName');
var lastName = document.getElementsByClassName('lastName');
var avatar = document.getElementsByClassName('avatar');

firstPage[0].classList.add('activeLink');
load.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onerror = function () {
        errorM.classList.remove("none");
        errorS.innerText = xhr.status;
        errorT.innerText = xhr.statusText;
        elemBtn.classList.add('none');
    };
    xhr.onload = function(){
        elemBtn.classList.add('none');
        people.classList.remove('none');
        for (var i=0; i<allMain.length; i++) {
            firstName[i].innerText = JSON.parse(this.response).data[i].first_name;
            lastName[i].innerText = JSON.parse(this.response).data[i].last_name;
            avatar[i].innerHTML = '<img src="' + JSON.parse(this.response).data[i].avatar + '">';
        }

  var selected;
  people.onclick = function(event) {
      firstPage[0].classList.remove('activeLink');
      var target = event.target;

      if (target.tagName != 'HEADER') return;
      clientX = event.clientX;
      active1();
      active(target);
  };
  function active1() {
      var key = 0;
      var numBtn = 0;

      while (clientX > 60) {
          numBtn++;
          clientX -= 60;
      }
      systemNumBtn = numBtn;
  }
  function active(node) {
      if (selected) {
          selected.classList.remove('activeLink');
          allMain[lastSystemNumBtn].classList.remove('activeMain');
      }
      selected = node;
      selected.classList.add('activeLink');
      allMain[systemNumBtn].classList.add('activeMain');
      lastSystemNumBtn = systemNumBtn;
  }
  }
};
