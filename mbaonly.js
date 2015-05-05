 jQuery(document).ready(function () {
    	jQuery('header nav').meanmenu({
            meanMenuClose: "X", // single character you want to represent the close menu button
            meanMenuCloseSize: "20px", // set font size of close button
            meanRevealColour: "", // override CSS colours for the reveal background
            meanRevealHoverColour: "", // override CSS colours for the reveal hover
            meanScreenWidth: "710", // set the screen width you want meanmenu to kick in at
            meanMenuOpen: "<div class='icon_menu'><span /><span /><span /></div>", // text/markup you want when menu is closed
        });
    });

$('[placeholder]').focus(function() {
   var input = $(this);
   if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
   }
}).blur(function() {
   var input = $(this);
   if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
   }
}).blur().parents('form').submit(function() {
   $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
         input.val('');
      }
   })
});
