async function newFormHandler(event) {
    event.preventDefault();

    document.location.replace('/dashboard/create-post')
}

document.querySelector('#create-new-post-btn').addEventListener('click', newFormHandler);