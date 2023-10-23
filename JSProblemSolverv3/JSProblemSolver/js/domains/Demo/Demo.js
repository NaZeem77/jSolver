var header;  // Page header that appears upon loading
var button1; // Button that appears upon loading
var panel;   // A panel that replaces the button when button is clicked
var text;    // Text that appears in the panel
var button2; // Button that appears in the panel

// Called when the page is loaded
function init() {
    header = $("<div></div>").text("DOM Manipulation Example");
    
    button1 = $("<button></button>").text("Click Me");
    button1.addClass("button");
    button1.click(manipulateDOM1);
    
    // add the header and button to the document body
    $("body").append(header);
    $("body").append(button1);
    
    panel = $("<div></div>");
    panel.addClass("panel");
    
    text = $("<div></div>").text("Here is added text");
    text.addClass("text");
    
    button2 = $("<button></button>").text("Go Back");
    button2.addClass("button");
    button2.click(manipulateDOM2);
    
    panel.append(text);
    panel.append(button2);
    
    // add the text panel to the document body but hide it initially
    $("body").append(panel);
    panel.hide();
}

// Callback for the button that hides the button and shows the text panel
function manipulateDOM1() {
    button1.hide();
    panel.show();
}

// Callback for the button that goes back to the original layout
function manipulateDOM2() {
    button1.show();
    panel.hide();
}