import React from "react";
import HeaderLogo from "../../Header/HeaderLogo";
import FooterLinks from "../footer";



const Empleo = () =>{

    return(
        <div className="components_footer">
            <HeaderLogo/>
            <h2>Create a world where anyone can belong anywhere</h2>
            <p>It’s an audacious, incredibly rewarding mission that our increasingly diverse team is dedicated to achieving.

                Airbnb is built around the idea that everyone should be able to take the perfect trip, including where they stay, what they do, and who they meet. To that end, we empower millions of people around the world to use their spaces,
                passions, and talents to become entrepreneurs.

                Exciting challenges lie ahead—new regions, technologies, and businesses. Guided by our four core values, we’ll meet these challenges creatively and with the support of our global community. Join us!
            </p>
            <footer>
                <FooterLinks />
            </footer>
        </div>

    );

}

export default Empleo;