const checkButton = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')
 
function isPalindrome(textInput) {
  var finalResult;
  // Preprocess the text
  const processedText = textInput.  toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if reversed version is the same
  const reversedText = processedText.split("").reverse().join("");
  
  if(processedText ===reversedText){
    finalResult = `${textInput} is a palindrome.`
  }else{
    finalResult = `${textInput} is not a palindrome.`
  }

  return finalResult;

}

checkButton.addEventListener("click", ()=>{
  if(textInput.value === "" ){
  alert("Please input a value")
  }
  else{
    const getResult = isPalindrome(textInput.value)
    result.innerHTML =getResult
  }

})
