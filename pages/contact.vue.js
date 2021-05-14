let Contact = {
    template: `
    <div id="page_container">
    <h1 class="page-header">Get in Touch.</h1><br>

    <div><p>OBAX Car Rental | Hours: Mon-Sat 7am-5pm </p></div>


    <div id="iframe"><iframe src="https://swoopbackup.bubbleapps.io/driver_signup_page" 
    style="border:0px #ffffff none;" 
    name="myiFrame" 
    scrolling="no" 
    frameborder="1" 
    marginheight="0px" 
    marginwidth="0px" 
    height="600px" 
    width="900pxpx" 
    allowfullscreen></iframe></div>

   </div>
   </div>
   <button @click="saveContact" >submit</button>
   </div>

    </div>
    `,


data () {
    return {
        form: {
            id: null,
            name: ""
        },



        submitted: false
    };
},
 mounted() {
    //pass
 },
methods: {
//pass
}
    
};
