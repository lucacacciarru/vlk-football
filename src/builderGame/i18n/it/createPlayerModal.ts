export const createPlayerModal = {
  openButtonLabel: 'Aggiungi giocatore',
  title: 'Crea giocatore',
  body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, minus!',
  addPlayerButton: 'Aggiungi questo giocatore',
  formLabels: {
    name: 'Nome*',
    rating: 'Valutazione*',
    avatar: 'Immagine (solo src)',
    description: 'Descrizione',
    matchType: 'Tipologie di partita*',
    roles: 'Ruoli',
  },
  ratings: {
    '4': 'Debole (4 pt.)',
    '8': 'Medio (8 pt.)',
    '12': 'Forte (12 pt.)',
    '16': 'Pauroso  (16 pt.)',
  },
  placeholders: {
    name: 'Aggiungi nome',
    avatar: "Aggiungi src dell'immagine",
    description: 'Aggiungi descrizione',
  },
  errors: {
    name: 'Inserisci un nome',
    rating: 'Seleziona la valutazione',
    matchType: 'Seleziona almeno una tipologia',
    roles: {
      unchecked: 'Devi selezionare almeno un ruolo',
      tooManyChecked: 'Puoi selezionare solo due ruoli',
    },
  },
};
