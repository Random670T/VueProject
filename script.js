var app = new Vue({

    el: '#app',
    data: {
           form: {
            password: ''
           }
    },

    methods: {
        formSubmit: function (event) {
            alert(this.form.password);
            
            document.getElementById("display-data").innerHTML = `${this.form.password} `;
           

        }

    }

});