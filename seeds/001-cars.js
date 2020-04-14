
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '2B3KA33G18H107048', make: 'toyota', model: 'corolla', mileage: '24000', transmission: 'auto', title: 'clean'},
        {VIN: '3B3KA33G18H107049', make: 'volks', model: 'jetta', mileage: '24000', transmission: 'auto', title: 'clean'},
        {VIN: '4B3KA33G18H107058', make: 'ford', model: 'focus', mileage: '24000', transmission: 'auto', title: 'clean'}
      ]);
    });
};
