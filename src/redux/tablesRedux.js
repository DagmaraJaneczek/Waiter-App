

//selectors
export const getTableById = ({ tables }, tableId) => tables.find(tables = tables.id === tableId);
export const getAllTables =({ tables }) => tables;


// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_BOOKS');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload })



const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]

    default:
      return statePart;
  };
};
export default tablesReducer;