export class accountValidation
{
  formErrors = {
    'firstName': '',
   
  };
  formValidationMessages = {
    'firstName': {
      'required':      'FirstName is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
    },
  
  };
 
}