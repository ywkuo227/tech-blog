// New post handler to extract and send data to server as API call.
const newPostHandler = async (event) => {
    event.preventDefault();
   
    const title = document.querySelector('#newPostTitleInput').value.trim();
    const content = document.querySelector('#newPostContentTextarea').value.trim();

    if (title && content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to create post');
      }
    }
  };

  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostHandler);