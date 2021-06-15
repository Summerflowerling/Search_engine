import {updateUi} from "./js/updateUi.js"
import {handleSubmit} from "./js/handleSubmit.js"
import "./style/footer.scss"
import "./style/main.scss"
import "./style/form.scss"
import "./style/result.scss"
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const searchTerm = document.getElementById("searchTerm")

export {
   handleSubmit,
   updateUi
   }
   
   searchTerm.addEventListener("keypress", function(e){
      if (e.which === 13) {
          handleSubmit(searchTerm.value)
          console.log(searchTerm.value)
           
         }
  })
  