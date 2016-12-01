// By Dheeraj Kumar Rao(dheerajkrao1993@gmail.com)

// For required field simply Put the class name "field-required"
// For email validation simply Put the class name "field-email"
//  For Mobile validation simply Put the class name "field-mobile"
// For link or web addreess validation simply Put the class name  "field-url"







var forms_to_validate = document.getElementsByClassName("dheeraj-form-validator");
if (forms_to_validate.length) {
    var validate_required = function (elm) {
		 
        elm.addEventListener("blur", function (event) {
			 
			var current_element= (window.event) ? window.event.srcElement  : event.target;
		
            if (current_element.value==='') {
				
                current_element.nextElementSibling.innerHTML = "This is required field.";
            } else {
                current_element.nextElementSibling.innerHTML = "";
            }
			
			
        });
    };
	

	
    var validate_url = function (elm) {
	   elm.addEventListener("blur", function (event) {
           var current_element= (window.event) ? window.event.srcElement  : event.target;
	       var url_regex = /^(ftp|http|https):\/\/[^ "]+$/;
	       if ((url_regex.test(current_element.value)) === true) {
                current_element.nextElementSibling.innerHTML = "";
            } else {
                current_element.nextElementSibling.innerHTML = "Please Enter valid URL.";
            }
			
	   });
	   
	   
    };
	
    var validate_email = function (elm) {
        elm.addEventListener("blur", function (event) {
           var current_element= (window.event) ? window.event.srcElement  : event.target;
	       var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		   
		   
	       if ((email_regex.test(current_element.value)) === false) {
                current_element.nextElementSibling.innerHTML = "This is required field.";
            } else {
                current_element.nextElementSibling.innerHTML = "";
            }
			
	   });
    };
	
    var validate_mobile_no = function (elm) {
        elm.addEventListener("blur", function (event) {
            var current_element= (window.event) ? window.event.srcElement  : event.target;
            if (current_element.value === '' ||  !(isNaN(current_element.value))===false ) {
                current_element.nextElementSibling.innerHTML = "This is required field.";
            } else {
                current_element.nextElementSibling.innerHTML = "";
            }
			
        });
		
    };
	                         
	var validate_checkbox = function(elm) {  //this.form.checkbox.checked
		
		    elm.addEventListener("blur", function () {
					//var current_element= (window.event) ? window.event.srcElement  : event.target;
					if (elm.checked === false) {

					elm.nextElementSibling.innerHTML = "This is required field.";
					  
					} else {
						elm.nextElementSibling.innerHTML = "";
					}
					
					
		        });
	    
    };

	
	
    for (var p = 0; p < forms_to_validate.length; p++) {
        var current_form = forms_to_validate[p];
		//field required 
        var required_fields = current_form.getElementsByClassName("field-required");
        for (var r = 0; r < required_fields.length; r++) {
            validate_required(required_fields[r]);
        }
		// url required 
		var required_url = current_form.getElementsByClassName("field-url");
		for(var u=0; u<required_url.length; u++) {
            validate_url(required_url[u]);
		}
		
		//email required
		var required_email = current_form.getElementsByClassName("field-email");
		for(var e=0; e<required_email.length; e++) {
            validate_email(required_email[e]);
		}
		
		// mobile no required 
		 var required_mobile_number = current_form.getElementsByClassName("field-mobile");
		 for(var m=0; m<required_mobile_number.length; m++) {
            validate_mobile_no(required_mobile_number[m]);
		}
		
		
		
// required checkbox
		var required_checkbox = current_form.getElementsByClassName("field-checkbox");
		for(var c=0; c<required_checkbox.length; c++) {
            validate_checkbox(required_checkbox[c]);
		}
		
		
    }
}


