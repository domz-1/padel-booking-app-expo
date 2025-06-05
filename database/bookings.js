const venues = [
  {
    id: 1,
    name: 'Padel Zone',
    img: 'padel-zone.jpg',
    courts: [
      { id: 1, name: 'Court A' },
      { id: 2, name: 'Court B' },
      { id: 3, name: 'Court C' },
    ],
    bookings: [
      {
        holderName: 'John Smith',
        phoneNumber: '+1234567890',
        isWA: true,
        isCalled: false,
        isSameDay: true,
        court: { id: 1, name: 'Court A' },
        startTime: '2024-03-20T09:00:00',
        endTime: '2024-03-20T10:00:00',
      },
    ],
  },
  {
    id: 2,
    name: 'Padel Club Elite',
    img: 'padel-club-elite.jpg',
    courts: [
      { id: 1, name: 'Court 1' },
      { id: 2, name: 'Court 2' },
    ],
    bookings: [
      {
        holderName: 'Sarah Johnson',
        phoneNumber: '+1987654321',
        isWA: true,
        isCalled: true,
        isSameDay: false,
        court: { id: 2, name: 'Court 2' },
        startTime: '2024-03-21T15:00:00',
        endTime: '2024-03-21T16:00:00',
      },
    ],
  },
  {
    id: 3,
    name: 'Urban Padel',
    img: 'urban-padel.jpg',
    courts: [
      { id: 1, name: 'Main Court' },
      { id: 2, name: 'Side Court' },
      { id: 3, name: 'Center Court' },
      { id: 4, name: 'Practice Court' },
    ],
    bookings: [
      {
        holderName: 'Mike Wilson',
        phoneNumber: '+1122334455',
        isWA: false,
        isCalled: true,
        isSameDay: true,
        court: { id: 3, name: 'Center Court' },
        startTime: '2024-03-20T18:00:00',
        endTime: '2024-03-20T19:00:00',
      },
    ],
  },
  {
    id: 4,
    name: 'Padel Pro Center',
    img: 'padel-pro.jpg',
    courts: [
      { id: 1, name: 'Pro Court 1' },
      { id: 2, name: 'Pro Court 2' },
    ],
    bookings: [
      {
        holderName: 'Emma Davis',
        phoneNumber: '+1555666777',
        isWA: true,
        isCalled: false,
        isSameDay: false,
        court: { id: 1, name: 'Pro Court 1' },
        startTime: '2024-03-22T10:00:00',
        endTime: '2024-03-22T11:00:00',
      },
    ],
  },
];
export default venues;