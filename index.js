$(document).ready(function(){
    // Movement animation to happen
    const card = $('.card');
    const container = $('.container');
    // All items
    const photo = $('.photo img');
    const title = $('.title');
    const social = $('.social');
    const info = $('.info h4');
    const profile = $('.profile');  

    // Moving animation event
    container.on('mousemove', (e) => {
        let xAxis = (window.innerWidth) / 2 - e.pageX / 20; //rotating the elements into x axis
        let yAxis = (window.innerWidth) / 2 - e.pageY / 20; //rotating the elements into y axis
        xAxis = Math.max(Math.min(xAxis, 30), -30); // limit the xAxis rotation to +/- 30 degrees
        yAxis = Math.max(Math.min(yAxis, 30), -30); // limit the yAxis rotation to +/- 30 degrees
        card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);

        // Move the profile element on the Z-axis
        profile.css('transform', `translateZ(50px)`);
    });
    
    // Adding Animation in
    container.on('mouseenter', e => {
        card.css('transform', "none");
        // Popout animation for all items
        photo.css('transform', "translateZ(50px)");
        title.css('transform', "translateZ(50px)"); 
        social.css('transform', "translateZ(50px)"); 
        info.css('transform', "translateZ(50px)"); 
        profile.css('transform', "translateZ(50px)");
    });
    
    // Removing animation in
    container.on('mouseleave', e => {
        card.css('transition', 'all 0.5s ease');
      card.css('transform', 'rotateY(0deg) rotateX(0deg)');

      // Reset the profile element's position
      profile.css('transform', "translateZ(0px)");
    });
});