export const login = async (username, password) => {
    if (username === 'emilys' && password === 'emilyspass') {
      return { success: true };
    } else {
      return { success: false, error: 'Invalid credentials' };
    }
  };