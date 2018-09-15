export const replaceInitialStateReconciler = (inboundState, originalState) => {
  return inboundState
    ? { ...originalState, ...inboundState }
    : { ...originalState };
};
