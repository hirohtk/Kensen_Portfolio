# materialize_portfolio

### This portfolio leverages the Materialize framework (https://materializecss.com/) for visual components including:

- Cards (https://materializecss.com/cards.html)
- Buttons (https://materializecss.com/buttons.html)
- Navbar (https://materializecss.com/navbar.html)
- Footer (https://materializecss.com/footer.html)

### For DOM manipulation and animation applications, the jQuery library was used (https://jquery.com/)

The idea for the portfolio is to create a more "modern" feel for websites, including visual animations for the three main sections that compose the portfolio ("About Me", "Portfolio", and "Contact" form).  

Custom Javascript and CSS were added to achieve these effects, including gauging where the user currently is scrolled to (to trigger fading/flying in animations).  

Similarly in the Portfolio section, JS and CSS were used to create a "highlighting" effect with a CSS Transform animation for the portfolio assignment that the user is currently hovering over.  "onMouseEnter" and "onMouseLeave" JS methods were crucial for achieving this effect.  

## Updates:

- As of February 2020, this portfolio is now a full stack application that uses MongoDB (via Mongoose ODM) to store user messages submitted on my portfolio page.  The npm package "nodemailer" is also setup to send a user (as well as myself) a confirmation email upon submitting a message.  See deployed site here: https://pacific-reaches-48034.herokuapp.com/

- As of March 2020, this porfolio is responsive from screen widths of 2000px and below.
