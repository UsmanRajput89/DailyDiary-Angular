# Requirements #

this is the requirements gathered for my todo app


## In this diagram: ##

- A User can have many Tasks, and a Task can belong to only one User. This relationship is represented by the one-to-many relationship between User and Task.

- A Task can have many Reminders, and a Reminder can belong to only one Task. This relationship is represented by the one-to-many relationship between Task and Reminder. * 

- A Task can belong to one Category, and a Category can have many Tasks. This relationship is represented by the one-to-many relationship between Task and Category.

*Note: This ERD is a basic representation and you may add or modify entities and relationships based on your specific requirements.*

## Here's a text-based representation of the ERD:## 

**User**
ID (primary key)
Email
Password

**Task**
ID (primary key)
User ID (foreign key referencing User)
Description
Due Date
Priority
Category ID (foreign key referencing Category)

**Reminder**
ID (primary key)
Task ID (foreign key referencing Task)
Reminder Date

**Category**
ID (primary key)
Name


*This ERD represents the relationships between the entities (tables) in your task manager. A User can have many Tasks, a Task can have many Reminders, and a Task can belong to one Category. The relationships are represented by the foreign keys, which connect one entity to another.*


## Working ##
- Here's a high-level plan to help you build a basic task manager with the desired functionalities:
- Set up the project: Choose a framework or language for your project, select a suitable development environment, and create a new project.
- User signup and login: Implement a user signup system that allows new users to create an account with their email address and password. Additionally, implement a login system that enables existing users to log in to their accounts using their email address and password.
- Task creation: Add a task creation form that allows users to create a new task, add a description, set a due date and time, and choose a category.
- Prioritizing tasks: Implement a way for users to prioritize their tasks by marking them as high, medium, or low priority.
- Adding reminders: Implement a reminder system that allows users to set reminders for their tasks. The reminders could be set to notify the user via email or push notifications.
- Categorizing tasks: Add a task categorization feature that allows users to categorize their tasks into different categories, such as work, personal, or shopping.
- Deployment: Once the task manager is complete, deploy it to a server or hosting platform so that users can access it from anywhere.

*This is a general plan that should get you started on your task manager project. However, you may need to add more features or make modifications based on your specific requirements.*

