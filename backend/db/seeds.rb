users = User.create([
  { name: 'User 1', email: 'user1@example.com', password: 'password1' },
  { name: 'User 2', email: 'user2@example.com', password: 'password2' },
])

reports = Report.create([
  { title: 'Report A' },
  { title: 'Report B' },
])
users[0].reports << reports[0]
users[0].reports << reports[1]
users[1].reports << reports[0]

puts 'Seeding completed!'
