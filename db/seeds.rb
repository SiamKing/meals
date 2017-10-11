# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = ["Luke", "Han", "Leia", "Obi", "Chewbacca", "C3P0"]

meals = ["Tattooine Tacos", "Chewie's Chowder", "Princess Pizza", "Darth's Death Stack", "Brain du Jar Jar", "R2's Nuts and Bolts"]

i = 0

6.times do
  UserMeal.create(user_id: User.create(name: users[i]).id, meal_id: Meal.create(title: meals[i]).id)
  i += 1
end
