const api = (function(){
  const baseUrl = 'http://localhost:8080';
  function submitForm(){
    return fetch(`${baseUrl}/api/users`,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      return response;
    })
  }
  return {
    submitForm
  }
});