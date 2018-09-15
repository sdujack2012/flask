const normalizePayload = ({ dispatch }) => next => action => {
  const { schema, payloadRename = "payload" } = action;

  if (!schema || typeof schema !== "function") {
    return next(action);
  }

  const newAction = {
    ...action,
    [payloadRename]: schema(action[payloadRename])
  };

  delete newAction.schema;
  dispatch(newAction);
};

export { normalizePayload };
