//Calls the information to seed the tables table

exports.seed = function (knex) {
  return (
    knex
      //deletes the tables table if it exists and starts new
      .raw("TRUNCATE TABLE tables RESTART IDENTITY CASCADE")
      .then(function () {
        //creates the tables table and inserts new values from the tables.json
        return knex("tables").insert(tables);
      })
  );
};
