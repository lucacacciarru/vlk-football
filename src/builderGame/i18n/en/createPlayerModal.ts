export const createPlayerModal = {
  openButtonLabel: 'Add player',
  title: 'Create player',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, minus!',
  addPlayerButton: 'Add this player',
  formLabels: {
    name: 'Name*',
    rating: 'Rating*',
    avatar: 'Image (src only)',
    description: 'Description',
    matchType: 'Match type',
    roles: 'Roles',
  },
  ratings: {
    4: 'Weak (4 pts.)',
    8: 'Medium (4 pts.)',
    12: 'Strong (4 pts.)',
    16: 'Unbelievable (4 pts.)',
  },
  placeholders: {
    name: 'Add name',
    avatar: 'Add image src',
    description: 'Add description',
  },
  errors: {
    name: 'You have to add a name',
    rating: 'Select a rating',
    matchType: 'Select at last one option',
    roles: {
      unchecked: 'You must select at least one role',
      tooManyChecked: 'You can select only two roles',
    },
  },
};
