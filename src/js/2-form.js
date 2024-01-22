const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input' , e => {
    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.message.value.trim();
    
    const obj = {
      email: userEmail,
      message: userMessage,
    }
saveToLs(localStorageKey, obj);
});


function restoreData () {
 const data = loadFromLs(localStorageKey);

 form.elements.email.value = data?.email || '';
 form.elements.message.value = data?.message || '';
} 

restoreData();


form.addEventListener('submit', e => { 
 e.preventDefault();
 const data = loadFromLs(localStorageKey) || {};
 if (data.email === ''|| data.message === '') {return;}

 console.log(data);
 localStorage.removeItem(localStorageKey);
 form.reset();
});



function saveToLs (key, value) {
const jsonData = JSON.stringify(value);
localStorage.setItem(key, jsonData);
}

function loadFromLs (key) {
 const data = localStorage.getItem(key);
 try { 
    const result = JSON.parse(data);
    return result;
 } catch { 
    return data; 
}
}


 

