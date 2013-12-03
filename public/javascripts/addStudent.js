$(function(){
    
    $("#student-form").submit(function(event){
        $.post("addStudent", $(this).serialize());
        console.log("sending data....");
        event.preventDefault();
    });
});