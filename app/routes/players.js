import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'lightning-scorer',
      name: 'Nikita Kucherov',
      team: 'Tampa Bay Lightning',
      points: "119",
    },{
      id: 'flames-scorer',
      name: 'Johnny Gaudreau',
      team: 'Calgary Flames',
      points: "92",
    }, {
      id: 'sharks-scorer',
      name: 'Brent Burns',
      team: 'San Jose Sharks',
      points: "75",
    }, {
      id: 'jets-scorer',
      name: 'Blake Wheeler',
      team: 'Winnipeg Jets',
      points: "88",
    }, {
      id: 'bruins-scorer',
      name: 'Brad Marchand',
      team: 'Boston Bruins',
      points: "87",
    }, {
      id: 'oilers-scorer',
      name: 'Connor McDavid',
      team: 'Edmonton Oilers',
      points: "105",
    }];
  }
});
