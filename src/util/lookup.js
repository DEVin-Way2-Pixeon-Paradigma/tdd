const users = [
	{
		login: 'danilo',
		firstName: 'Danilo',
		lastName: 'Sales',
		likes: ['Java', 'React', 'C']
	},
	{
		login: 'claudio',
		firstName: 'Claudio',
		lastName: 'Junior',
		likes: ['Tests', 'React']
	},
	{
		login: 'andre',
		firstName: 'André',
		lastName: 'Motta',
		likes: ['Python', 'React', 'Diablo']
	}
]

export function lookup(login, property) {
  const user = users.find(user => user.login === login);

  if(!user) {
    throw new Error('Could not find user');
  }

  if(!user.hasOwnProperty(property)) {
    throw new Error('Could not find property')
  }

  return user[property];
}