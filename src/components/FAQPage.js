import React,{useRef} from 'react';
import Faq from "react-faq-component";
import "../styles/faq.css"
import "../styles/contactform.css"
import emailjs from '@emailjs/browser';
import policy from  "../Documents/Privacy Policy.pdf"
import terms from "../Documents/Terms and Conditions.pdf"

export default function FAQPage(props) {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nrxtgbc', 'template_z84dbwl', form.current, '2DF4kmSYwGFdx0230')
        .then((result) => {
            console.log(result.text);
            var div  = document.createElement('div');
            div.id = "submitting"
            div.innerText = "Sucessfully submitted"
            document.getElementById("boo").appendChild(div);

        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();

    };


    const data = {
        title: "FAQ( Frequently Asked Questions)",
        rows: [
            {
                title: "1. Why sell on H3TeachGroup?",
                content: `E-commerce is the global platform for people to sell and buy products easily, we present in maximum number of countries and regions .We provide efficient service to both sellers and buyers`,
            },
            {
                title: "2. What requirements are necessary to register as a seller?",
                content:
                    "No requirement is needed to register as a seller",
            },
            {
                title: "3.	I have not received goods, what can I do?",
                content: `You can either reach out to the seller or you can fill 
                The form below and our team will assist you ASAP.
                `,
            },
            {
                title: "4.	How to update or delete the product ?",
                content: "You may click on the update button on the products page and modify the details or you can remove products by pressing delete button.",
            },
            {
                title: "5.	Do I have to pay for shipping?",
                content: "It depends on the region and the size of the goods that you are buying.",
            },
            {
                title: "6.	How to do I contact H3 Tech Group?",
                content: "You can either click on the link below or you can reach out to the team through the given information on the about us page.",
            },
        ],
    };
    
    const styles = {
        // bgColor: 'white',
        titleTextColor: "black",
        rowTitleColor: "black",
        rowContentColor: 'grey',
        arrowColor: "red",
    };
    
    const config = {
        animate: true,
        arrowIcon: "V",
        tabFocus: true
    };
    return (
        <div className='faq--container'>

            <section className='section'>
                <h1 style={{textAlign:"center", margin: "20px", fontSize: "35px"}}>Contact Us</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="label" for="name">Full Name</label>
                                <input style={{borderRadius :"8px"}} type="text" class="form-control" name="user_name" id="name" placeholder="Name"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="label" for="email">Email Address</label>
                                <input style={{borderRadius :"8px"}} type="email" class="form-control" name="user_email" id="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label  class="label" for="subject">Subject</label>
                                <input style={{borderRadius :"8px"}} type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label  class="label" for="message">Message</label>
                                <textarea style={{borderRadius :"8px"}} name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                            </div>
                        </div>
                    
                        <div class="col-md-12">
                            <div class="form-group">
                                <input type="submit" value="Send Message" class="btn btn-primary"/>
                            </div>

                            <div id='boo'>
                            </div>

                        </div>
                    </div>
                </form>
		    </section>

            

            <div className='faq' id={'FAQ'}>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />

                <div className='faq--buttons'>
                    <button><a href={policy} download >Download Privacy Policy</a></button>
                    <button><a href={terms} download >Download Terms and Conditions</a></button>
                </div>

            </div>

        </div>
    );
}