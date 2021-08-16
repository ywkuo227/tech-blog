const newPostHandler = async (event) => {
    event.preventDefault();
   
    const title = document.querySelector('#editPostTitleInput').value.trim();
    const content = document.querySelector('#editPostContentTextarea').value.trim();
    const post_id = document.querySelector(".edit-post-form").getAttribute("post-id");

    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to edit post');
      }
    }
  };

  const delButtonHandler = async (event) => {
      event.preventDefault();

      const post_id = document.querySelector(".edit-post-form").getAttribute("post-id");

    if (post_id) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };

  document
  .querySelector('.edit-post-form')
  .addEventListener('submit', newPostHandler);

  document
  .querySelector('#delPostBtn')
  .addEventListener('click', delButtonHandler);