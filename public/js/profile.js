const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#posting-name').value.trim();
  const description = document.querySelector('#posting-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/posting`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posting/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete posting');
    }
  }
};

document
  .querySelector('.new-posting-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.posting-list')
  .addEventListener('click', delButtonHandler);
