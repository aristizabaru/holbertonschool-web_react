import $ from 'jquery';
import _ from 'lodash';

$.when($.ready).then(function () {
  let counter = 0;
  function updateCounter() {
    counter++;
    $('#count').html(`${counter} clicks on the button`);
  }

  $('body').append(`
    <p>Holberton Dashboard</p>
    <p>Dashboard data for the students</p>
    <button>Click here to get started</button>
    <p id='count'></p>
    <p>Copyright - Holberton School</p>
  `);

  $('button').on('click', _.debounce(updateCounter, 500));
});
