import { BoardRepository } from 'react-native-draganddrop-board'

const data = [
  {
    id: 1,
    name: 'TO DO',
    rows: [
      {
        id: '1',
        name: 'Analyze your audience',
        description: 'Learn more about '
      },
      {
        id: '2',
        name: 'Select a topic',
        description: 'Select a topic '
      },
      {
        id: '3',
        name: 'Define the objective',
        description: 'Write the objective '
      }
    ]
  },
  {
    id: 2,
    name: 'IN PROGRESS',
    rows: [
      {
        id: '4',
        name: 'Look at drawings',
        description: 'How did they use line ?'
      },
      {
        id: '5',
        name: 'Draw from drawings',
        description: 'Learn from '
      },
      {
        id: '6',
        name: 'Draw from photographs',
        description: 'For most people'
      }
    ]
  },
  {
    id: 3,
    name: 'DONE',
    rows: [
      {
        id: '7',
        name: 'Draw from life',
        description: 'Do you enjoy '
      },
      {
        id: '8',
        name: 'Take a class',
        description: 'Check your local '
      }
    ]
  },
  {
    id:4,
    name:'',
    rows:[]
  }
]

export const boardRepository = new BoardRepository(data);