/*http://formvalidation.io/settings/ */
$(document).ready(function() {
	
	$('#showEmergency').click(function(){
		if($('#showEmergency').is(':checked')){
			$('#emergencyContact').show();
		} else {
			$('#emergencyContact').hide();	
		}
	});
	
	//begin validation
    $('#applicant-form').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            firstName: {
				trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: "Please provide the Authorized Representative's first name"
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'The name must be more than 2 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            },
			lastName: {
				trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: "Please provide the Authorized Representative's last name"
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'The name must be more than 2 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            },
			firstNameP: {
				trigger: 'blur',
                validators: {
                    notEmpty: {
                        message: "Please provide the Applicant's first name"
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'The name must be more than 2 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            }/*,
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required'
                    },
                    numeric: {
                        message: 'The price must be a number'
                    }
                }
            },
            'size[]': {
                validators: {
                    notEmpty: {
                        message: 'The size is required'
                    }
                }
            },
            availability: {
                validators: {
                    notEmpty: {
                        message: 'The availability option is required'
                    }
                }
            }*/
        }
    });
});


function displayMailAddress(str) {
	document.getElementById("mailAddress").style.display = 'none';
	if (str.match('Yes') ) {
	document.getElementById("mailAddress").style.display = 'block';
	}
	else{
	document.getElementById("mailAddress").style.display = 'none';
	}
}

function displayEMailAddress(obj) {
	if (obj.checked) {
		
		document.getElementById("saveButton").style.display = 'none';
		
		document.getElementById("tempEmailIDP").value=document.getElementById("emailIDP").value;
		document.getElementById("emailIDP").value="";
		document.getElementById("emailIDP").disabled = true;
	} else {
		
		document.getElementById("saveButton").style.display = 'inline';
		
		document.getElementById("emailIDP").disabled = false;
		document.getElementById("emailIDP").value=document.getElementById("tempEmailIDP").value;
		document.getElementById("tempEmailIDP").value="";
	}
	
}
function displayEmailContent(obj) {
	
	if (obj.checked) 
	{
		document.getElementById("no-email").style.display = 'block';
	}
	else
	{
		document.getElementById("no-email").style.display = 'none';
	}
}
function autoTab(field1, len, field2, e) {
	var key = window.event? e.keyCode : e.which;
	if (key != 9 && key != 16) {
		if (document.getElementById(field1).value.length == len) {
			document.getElementById(field2).focus();
			document.getElementById(field2).select();
			}
	}
}


function changeUpper(textVal,textName){
	var textValue=textVal.value;
	document.getElementById(textName).value=textValue.toUpperCase();
}