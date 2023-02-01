import { BookingModel, dbClose} from './db.js';

await BookingModel.deleteMany()
console.log('All Bookings deleted')

const bookings = [
    {
      user: users[2]._id,
      pkg: [{
        name: 'Package 1',
        price: '50',
        }],
      date: [{
          year: 2022,
          month: 'Jan',
          day: 25,
          date: '09:00'
      }],
      dog: [{
          name: 'Henry',
          gender: 'Male',
          breed: 'Beagle',
          age: 9,
      }]
  },
  {
      user: users[1]._id,
      pkg: [{
        name: 'Package 3',
        price: '100',
        }],
      date: [{
            year: 2023,
            month: 'Feb',
            day: 25,
            date: '09:00',
        }],
      dog: [{
          name: 'Alex',
          gender: 'Female',
          breed: 'English Cockerspaniel',
          age: 6,
      }]
  },
  {
      user: users[2]._id,
      pkg: [{
        name: 'Package 3',
        price: '130',
    }],
    date: [{
        year: 2023,
        month: 'Aug',
        day: 15,
        date: '10:00',
    }],
      dog: [{
          name: 'Rex',
          gender: 'Male',
          breed: 'Portacolie',
          age: 9,
      }]
  },
  {
      user: users[3]._id,
      pkg: [{
        name: 'Package 1',
        price: '50',
    }],
    date: [{
        year: 2023,
        month: 'Mar',
        day: 1,
        date: '09:30',
    }],
      dog: [{
          name: 'Walter',
          gender: 'Female',
          breed: 'Dalmatian',
          age: 7,
      }]
  },
  {
      user: users[1]._id,
      pkg: [{
        name: 'Package 2',
        price: '100',
    }],
    date: [{
        year: 2023,
        month: 'Apr',
        day: 10,
        date: '10:00',
    }],
      dog: [{
          name: 'Henry',
          gender: 'Female',
          breed: 'Poodle',
          age: 5,
      }]
  },
  {
      user: users[3]._id,
      pkg: [{
        name: 'Package 1',
        price: '50',
    }],
    date: [{
        year: 2023,
        month: 'Dec',
        day: 5,
        date: '08:00',
    }],
      dog: [{
          name: 'Samson',
          gender: 'Male',
          breed: 'Irish Setter',
          age: '7',
      }]
  },
  {
      user: users[2]._id,    
      pkg: [{
        name: 'Package 3',
        price: '130',
    }],
    date: [{
        year: 2022,
        month: 'May',
        day: 25,
        date: '07:00',
    }],
      dog: [{
          name: 'Baxter',
          gender: 'Female',
          breed: 'Portacolie',
          age: '8',
      }]
  },
  {
      user: users[1]._id,    
      pkg: [{
        name: 'Package 4',
        price: '150',
    }],
    date: [{
        year: 2022,
        month: 'Jan',
        day: 17,
        time: '13:00',
    }],
      dog: [{
          name: 'Missy',
          gender: 'Male',
          breed: 'Springer Spaniel',
          age: 5,
      }]
  }
  ];

await BookingModel.insertMany(bookings);
console.log('Inserted bookings')

dbClose()
