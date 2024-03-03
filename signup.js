async function onsignup(e){
    e.preventDefault();
    var username_=document.getElementById('id1').value;
    var email_=document.getElementById('id2').value;
    var password_=document.getElementById('id3').value;
    var phone_=document.getElemenntById('id4').value;
   
    let myObj={
        username: username_,
        email: email_,
        password: password_,
        phone: phone_
    };
        if(username_!='' && email_!='' && password_!='' && phone_!=''){
            try{
                const result= await axios.get(`${api_endpoint}get-user/${email_}`);
                if(result.data==""){
                   await axios.post(`${api_endpoint}insert-user`,myObj)
                }
                else{
                    alert('User already exists')
                }

            }
            catch(err){
                console.log(err);
            }
           
        }
        else{
            alert('Please fill the empty fields!')
        }
       
}
