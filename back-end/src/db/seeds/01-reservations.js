//Calls the information to seed the reservations table

exports.seed = function (knex) {
  return (
    knex
      //deletes the reservations table if it exists and starts new
      .raw("TRUNCATE TABLE reservations RESTART IDENTITY CASCADE")
      //inserts new information from reservations.json into the now empty reservations table
      .then(function () {
        return knex("reservations").insert(reservations);
      })
  );
};
