import '../../styles/components/signup';
import {bindAnimationEnd} from '../../../utils/prefixed-end-event';
import request from 'superagent';

let Signup = function () {
    // This all just temporary -- we'll probably implement react soon.

    let emailRegex = /(.+)@(.+){2,}\.(.+){2,}/i;
    let formWrapper = document.querySelector('.form-wrapper');

    if(!formWrapper) {
        return;
    }

    // Disable signup button.
    let signupBtn = formWrapper.querySelector('.flat-button');
    signupBtn.setAttribute('disabled', true);

    let emailInput = formWrapper.querySelector('.email-input');
    let signupForm = formWrapper.querySelector('.signup-form');

    formWrapper.addEventListener('input', function() {

        // Get rid of any existing error messages
        let error = formWrapper.querySelector('.error-container');

        if (error) {
            formWrapper.removeChild(error);
        }

        // Find and hide
        if (emailRegex.test(emailInput.value)) {
            signupBtn.removeAttribute('disabled');
            formWrapper.classList.add('active');
        } else {
            signupBtn.setAttribute('disabled', true);
            if (!formWrapper.classList.contains('submitted')) {
                formWrapper.classList.remove('active');
            }
        }
    }, false);

    formWrapper.addEventListener('submit', function(e) {
        e.preventDefault();
        signupBtn.setAttribute('disabled', true);
        formWrapper.classList.add('submitted');

        // Make the request
        request
            .post('/')
            .type('form')
            .send({ email: emailInput.value })
            .end(function(err, res) {
                if (err) {
                    // Create and show error message.
                    let errorContainer = document.getElementById('error-container') ||
                        document.createElement('div');

                    errorContainer.setAttribute('id', 'error-container');
                    errorContainer.classList.add('error-container');
                    if (res.body) {
                        res.body.forEach(function(error) {
                            errorContainer.innerHTML = error.message;
                        });
                    } else {
                        errorContainer.innerHTML = 'Oops. Something went wrong.';
                    }
                    formWrapper.appendChild(errorContainer);
                } else {
                    // Success!
                    let successContainer = document.createElement('div');
                    let successMsg = document.createTextNode('Great! Please go check your inbox :)');
                    successContainer.appendChild(successMsg);
                    signupForm.classList.add('animate-out');
                    bindAnimationEnd(signupForm, () => {
                        formWrapper.removeChild(signupForm);
                        formWrapper.appendChild(successContainer);
                    });
                }
            });
    }, false);

}();

exports.Signup = Signup;
