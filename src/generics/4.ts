type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser<T>(initialValues: Partial <T>) {
    
  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });