const newFormHandler = async (event) => {
    event.preventDefault();
    // console.log(document.querySelector("#selectedPost").getAttribute("value"));
    const comment = document.querySelector('#newCommentTextarea').value.trim();
    const post_id = document.querySelector("#selectedPost").getAttribute("value");

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
  .addEventListener('submit', newFormHandler);