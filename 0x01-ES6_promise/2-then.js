export default getFullResponseFromAPI(success) {
  return new Promise((reslove, reject) => {
    if (success === true) {
      resolve({status: 200, body: 'Succcess'});
    } else {
      reject(new Error('The fake API is not working currently');  
  }
}
