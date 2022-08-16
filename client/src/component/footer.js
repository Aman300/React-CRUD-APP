import React from "react";

import '../App.css';

function footer() {
    return (
        <section id="footer">
       
            <footer class="bg-dark text-center text-white">
               
                <div class="container p-4 pb-0">
                   
                    <section class="">
                        <p class="d-flex justify-content-center align-items-end">
                            <span class="me-3 p-3">Register for free</span>
                            <button type="button" class="btn text-white">
                                Sign up!
                            </button>
                        </p>
                    </section>
                
                </div>
               

          
                <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2022 Copyright:
                    <a class="text-white" href="/">amanapp.com</a>
                </div>
              
            </footer>
      
        </section>
    )
}

export default footer;