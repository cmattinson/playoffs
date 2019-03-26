import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
          id: 'lightning',
          name: 'Tampa Bay Lightning',
          record: '57-13-4',
          chance: 'In',
          cupChance: '36.6%',
          pointLeader: 'Nikita Kucherov',
          coach: 'Jon Cooper'
        }, {
            id: 'flames',
            name: 'Calgary Flames',
            record: '45-21-7',
            chance: 'In',
            cupChance: '15.7%',
            pointLeader: 'Johnny Gaudreau',
            coach: 'Bill Peters',
          }, {
            id: 'sharks',
            name: 'San Jose Sharks',
            record: '43-22-8',
            chance: 'In',
            cupChance: '5.6%',
            pointLeader: 'Brent Burns',
            coach: 'Peter DeBoer',
          }, {
            id: 'jets',
            name: 'Winnipeg Jets',
            record: '44-25-4',
            chance: '100%',
            cupChance: '7.0%',
            pointLeader: 'Blake Wheeler',
            coach: 'Paul Maurice',
          }, {
            id: 'bruins',
            name: 'Boston Bruins',
            record: '44-20-9',
            chance: '100%',
            cupChance: '4.8%',
            pointLeader: 'Brad Marchand',
            coach: 'Bruce Cassidy',
          }, {
            id: 'oilers',
            name: 'Edmonton Oilers',
            record: '32-34-7',
            chance: '0.3%',
            cupChance: '0%',
            pointLeader: 'Connor McDavid',
            coach: 'Ken Hitchcock',
          }];
      }
});
