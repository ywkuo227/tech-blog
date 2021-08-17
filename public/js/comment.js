// New comment handler, extract data and send to server as API calls.
const newCommentHandler = async (event) => {
    event.preventDefault();
   
    const comment = document.querySelector('#newCommentTextarea').value.trim();
    const post_id = document.querySelector(".postdisplay").getAttribute("post-id");
  
    if (comment && post_id) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);