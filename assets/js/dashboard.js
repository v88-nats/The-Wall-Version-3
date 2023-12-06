$(document).ready(function(){
    $("body")
        .on("submit", "#post_form", postTopic)
        .on("click", ".post_edit_button", showPostEditForm)
        .on("submit", ".active_post_edit_form", savePostEditForm)
        /* Function for toggling display of other elements of delete_form when delete button is clicked */
        .on("click", ".delete_button", function(){
            $(this).siblings("span, .no_button, .yes_button").show();
        })
        /* Function for hiding other elements of delete_form when no button is clicked */
        .on("click", ".no_button", function(){                                      
            $(this).siblings("span, .no_button, .yes_button").toggle().end().toggle();
        })
        .on("submit", ".post_delete_form", function(event){                         /* Function for deleting a topic */
            event.preventDefault();
            $(this).closest(".post").remove();
        })
        .on("submit", ".comment_form", postComment)
        .on("click", ".comment_edit_button", showCommentEditForm)
        .on("submit", ".active_comment_edit_form", saveCommentEditForm)
        .on("submit", ".comment_delete_form", deleteComment);
});

/**
 * DOCU: Function for posting a topic.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function postTopic(event){
    event.preventDefault();

    let post_textarea = $("#post_textarea").val().trim();
    let data_post_id = Math.floor(Math.random() * 1000);

    if (post_textarea){
        let cloned_topic = $("#post_topic_clone").clone();
        cloned_topic.removeAttr("id");
        cloned_topic.attr("data-post-id", data_post_id);
        cloned_topic.find(".post_content").text(post_textarea);

        $("#no_post_yet").remove();
        $("#post_forum_list").prepend(cloned_topic);
        $("#post_textarea").val("");
        $("#post_textarea").removeClass("border-red");

    }
    else{
        $("#post_textarea").addClass("border-red");
    }
}

/**
 * DOCU: Function for showing edit_form and editing a topic.
 * Last Updated: December 06, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function showPostEditForm(event){
    event.preventDefault();

    let post = $(this).closest(".post");
    let edit_form = $("#topic_edit_form").clone();
    edit_form.removeAttr("id");
    edit_form.addClass("active_post_edit_form");

    let post_content = post.find(".post_content").text();
    edit_form.find(".topic_edit_textarea").val(post_content);
    post.find(".post_content").replaceWith(edit_form);
    post.find(".action_button_container").hide();
}

/**
 * DOCU: Function for saving changes when editing a topic.
 * Last Updated: December 06, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function savePostEditForm(event){
    event.preventDefault();

    let post = $(this).closest(".post");
    let edit_textarea = post.find(".topic_edit_textarea").val().trim();

    post.prepend(`<p class="post_content">${edit_textarea}</p>`);
    post.find(".active_post_edit_form").remove();
    post.find(".action_button_container").show();
}

/**
 * DOCU: Function for posting a comment and updating of response count.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function postComment(event){
    event.preventDefault();

    let comment_form = $(this);
    let post = comment_form.closest(".post");
    let comment_textarea = post.find(".comment_textarea");
    let comment_content = comment_textarea.val().trim();
    let data_comment_id = Math.floor(Math.random() * 1000);

    if (comment_content){
        let cloned_comment = $("#comment_clone").clone();
        cloned_comment.removeAttr("id");
        cloned_comment.attr("data-comment-id", data_comment_id);
        cloned_comment.find(".comment_content").text(comment_content);

        post.find(".post_comment_list").prepend(cloned_comment);
        comment_textarea.val("");
        comment_textarea.removeClass("border-red");

        updateResponseCount(post);
    }
    else{
        comment_textarea.addClass("border-red");
    }
}

/**
 * DOCU: Function for showing edit_form and editing a comment.
 * Last Updated: December 06, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function showCommentEditForm(event){
    event.preventDefault();

    let comment = $(this).closest(".comment");
    let edit_form = $("#comment_edit_form").clone();
    edit_form.removeAttr("id");
    edit_form.addClass("active_comment_edit_form");

    let comment_content = comment.find(".comment_content").text();
    edit_form.find(".comment_edit_textarea").val(comment_content);
    comment.find(".comment_content").replaceWith(edit_form);
    comment.find(".action_button_container").hide();
}

/**
 * DOCU: Function for saving changes when editing a topic.
 * Last Updated: December 06, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function saveCommentEditForm(event){
    event.preventDefault();

    let comment = $(this).closest(".comment");
    let edit_textarea = comment.find(".comment_edit_textarea").val().trim();

    comment.prepend(`<p class="comment_content">${edit_textarea}</p>`);
    comment.find(".active_comment_edit_form").remove();
    comment.find(".action_button_container").show();
}

/**
 * DOCU: Function for deleting a comment and updating of response count.
 * Last Updated: December 05, 2023
 * @memberof module:jQuery_The_Wall_Final
 * @author Nathaniel
 */

function deleteComment(event){
    event.preventDefault();

    let comment =  $(this).closest(".comment");
    let post = comment.closest(".post");

    comment.remove();
    updateResponseCount(post);
}