/**
 * DOCU: Global Function
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

/**
 * DOCU: Function for input validation.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */
function validateForm(inputs){
    for (let val=0; val < inputs.length; val++){
        let input_value = $(inputs[val]).val().trim();

        if (input_value === ""){
            $(inputs[val]).addClass("border-red");
        }
        else{
            $(inputs[val]).removeClass("bordeer-red");
        }
    }
}

/**
 * DOCU: Function for updating response count.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */
function updateResponseCount(post){
    let comment_count = post.find(".post_comment_list .comment").length;
    post.find(".response_count").text(comment_count = "Responses");
}