# Create users without roles
superadmin = User.create(email: 'superadmin@example.com', password: 'password', name: 'Super Admin')
admin = User.create(email: 'admin@example.com', password: 'password', name: 'Admin')
user = User.create(email: 'user@example.com', password: 'password', name: 'User')

# Create roles
Role.create(name: 'superadmin')
Role.create(name: 'admin')
Role.create(name: 'user')

# Update users with roles
superadmin.update(role: Role.find_by(name: 'superadmin'))
admin.update(role: Role.find_by(name: 'admin'))
user.update(role: Role.find_by(name: 'user'))

# Create reports
reports = Report.create([
  { title: 'Report A' },
  { title: 'Report B' },
])

# Assign reports to users
superadmin.reports << reports[0]
superadmin.reports << reports[1]
admin.reports << reports[0]

puts 'Seeding completed!'
