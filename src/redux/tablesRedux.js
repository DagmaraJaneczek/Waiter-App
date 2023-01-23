

//selectors
export const getTableById = ({ tables }, tableId) => tables.find(tables => tables.id === tableId);
export const getAllTables =({ tables }) => tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload })
export const updateTable = payload => ({ type: UPDATE_TABLE, payload })

// thunks
export const loadTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(data => dispatch(updateTables(data)))
  };
};

export const updateTableRequest = (tableId, tableData) => {
  return (dispatch) => {
    fetch(`http://localhost:3131/api/tables/${tableId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableData),
    })
    .then(res => dispatch(updateTable({ ...tableData, id: tableId })));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]

    case UPDATE_TABLE:
      return statePart.map(table => table.id === action.payload.id ? action.payload : table);
    default:
      return statePart;
  };
};

export default tablesReducer;