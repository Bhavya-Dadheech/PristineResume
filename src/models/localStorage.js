export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("myAppState");
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.warn("Error loading state from LocalStorage", e);
  }
  return undefined; // Return undefined if there's no state in LocalStorage
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("myAppState", serializedState);
  } catch (e) {
    console.warn("Error saving state to LocalStorage", e);
  }
};
