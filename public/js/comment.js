const newCommentHandler = async (event) => {
  event.preventDefault();
  const post_id = document.querySelector('#comment-desc').dataset.id;
  const body = document.querySelector('#comment-desc').value.trim();

  if (body) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ body, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create posting');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
console.log(true);
