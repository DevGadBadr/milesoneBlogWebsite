// My first JQuery Script the way too be rich inshallah, Hello Good Luck


function getTimeStamp(){
    var post_timestamp = new Date(); 
    var timestamp = post_timestamp.toISOString();
    
    var dateObject = new Date(timestamp);

    // Extract date and time components
    var year = dateObject.getFullYear();
    var month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Add 1 to the month because it's zero-based
    var day = String(dateObject.getDate()).padStart(2, '0');
    var hours = String(dateObject.getHours()).padStart(2, '0');
    var minutes = String(dateObject.getMinutes()).padStart(2, '0');
    var seconds = String(dateObject.getSeconds()).padStart(2, '0');

    // Create a formatted date-time string
    var formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime
}



$(document).ready(function() {
    // $('#postButton').click(post)
    
    $('#inputText').val('Share your thoughts')
    $('#inputText').click(function(){
        var input_text =  $('#inputText').val()
        if (input_text.length ==0 || input_text=='Share your thoughts' ){
            $('#inputText').val('')
        } else {
            
        }
       
    })
    $('#inputText').blur(function(){
        var input_text =  $('#inputText').val()
        if (input_text.length ==0){
            $('#inputText').val('Share your thoughts')
        } else {

        }
        
    })

    $('#postPicButton').click(function(){
        var post_text = $('#inputText').val()
        var poster_name = 'Gogo Badr'
        var timeStamp = getTimeStamp() 
        
        var post_html = `
        <div class="text-post post floating" id="post-1">
            <div class="poster-data">
                <div class="poster-name">${poster_name}</div>
                <div class="date-time">${timeStamp}</div>
            </div>
            <p>${post_text}</p>
            <div class="post-footer">
                <div>
                    <img src="../public/like.svg" class="like">
                </div>
                <div>
                    <img src="../public/comment.svg" class="comment">
                </div>
            </div>
        </div>
        
        `
        var active_post = $('#inputText').is(':focus')
        if (post_text.length ==0 || post_text=='Share your thoughts'){

        } else {
            $('#mainBody').prepend(post_html)
            $('#inputText').val('')
        }
        
    })
})

