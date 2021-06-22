let Rentalform = {
    template: `
    <div>
    <h1>Rent a Car</h1><br>

    <div ><iframe src="https://swoopbackup.bubbleapps.io/rental_sign_up" 
    style="border:0px #ffffff none;" 
    name="myiFrame" 
    scrolling="no" 
    frameborder="1" 
    marginheight="0px" 
    marginwidth="0px" 
    height="750px" 
    width="800px" 
    allowfullscreen></iframe></div>

    <h1>Rent a Scooter</h1><br>

    <div ><iframe src="https://swoopbackup.bubbleapps.io/scooter_rental" 
    style="border:0px #ffffff none;" 
    name="myiFrame" 
    scrolling="no" 
    frameborder="1" 
    marginheight="0px" 
    marginwidth="0px" 
    height="750px" 
    width="800px" 
    allowfullscreen></iframe></div>

   </div>
   </div>
   <
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
