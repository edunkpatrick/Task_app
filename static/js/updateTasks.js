'use strict';

// ADDS USER (IN PROGRESS)

// document.getElementById('add_new_user').addEventListener('click', (evt) => {
//     evt.preventDefault();
//         const userInput = document.querySelector('#validationTooltipUser');
//         const userToAdd = userInput.value;

//         const phoneInput = document.querySelector('#validationTooltipPhone');
//         const phoneToAdd = phoneInput.value;

//         const queryStringUser = new URLSearchParams({ user_name: userToAdd }).toString();
//         const queryStringPhone = new URLSearchParams({ phone_num: phoneToAdd }).toString();
//         const url = `/add_user?${queryStringUser}&${queryStringPhone}`;
//         fetch(url)
//             .then((response) => response.text())
//             .then((status) => {
//                 console.log(status);
//             })
//     });


// DELETES CHECKED TASKS
document.getElementById('delete_tasks').addEventListener('click', (evt) => {
    evt.preventDefault();
    for (const cb of document.querySelectorAll('.form-check-input')){
        if (cb.checked === true){
            const toMark = cb.value;
            const queryString = new URLSearchParams({ task: toMark }).toString();
            const url = `/delete_task?${queryString}`;
            fetch(url)
                .then((response) => response.text())
                .then((status) => {
                    console.log(status);
                    const toDelete = document.getElementById(`${status}div`);
                    toDelete.remove();
                })
        }
    }});


// MARKS ALL CHECKED TASKS COMPLETE
document.getElementById('mark_complete').addEventListener('click', (evt) => {
    evt.preventDefault();
    for (const cb of document.querySelectorAll('.form-check-input')){
        if (cb.checked === true){
            const toMark = cb.value;
            const queryString = new URLSearchParams({ task: toMark }).toString();
            const url = `/complete_task?${queryString}`;
            fetch(url)
                .then((response) => response.text())
                .then((status) => {
                    console.log(status);
                    const selectItem = document.getElementById(`${status}div`);
                    // insertAdjacentHTML placeholder to change style to crossout once CSS made
                    selectItem.insertAdjacentHTML('afterbegin', '<s>complete</s>');
                })
        }
    }});

// DELETES USER
document.getElementById('delete_user').addEventListener('click', (evt) => {
    evt.preventDefault();
    // need to grab user name to delete and put in toDelete variable

        const toDelete = document.getElementById('user_div').value;
        const queryString = new URLSearchParams({ user: toDelete }).toString();
        const url = `/delete_user?${queryString}`;
        fetch(url)
            .then((response) => response.text())
            .then((status) => {
                console.log('user deleted');
                console.log(toDelete);
            })
    }
);

document.getElementById('send_reminder').addEventListener('click', (evt) => {
    evt.preventDefault();
    
    // need to grab user name to send msg and put in toMessage variable
        const toMessage = 'erin';
        const toMesUser = toMessage.value;
        console.log(toMessage.value);
        console.log(toMessage);
        const queryString = new URLSearchParams({ reminder: toMessage }).toString();
        const url = `/send_reminder?${queryString}`;
        console.log(url);
        fetch(url)
            .then((response) => response.text())
            .then((status) => {
                console.log("message sent");
            })
    }
);

// LOGS OUT USER

// document.querySelector('#log_out').addEventListener('click', (evt) => {
//     evt.preventDefault();
//     const toLogOut = document.querySelector('.home').value
//     const queryString = new URLSearchParams({ account_name: toLogOut }).toString()
//     const log_out_url = `/sign_out?${queryString}`;
//     fetch(log_out_url)
//         .then((response) => response.text())
//         .then((status) => {
//             console.log(status);
//         })
// });


// FORMER AJAX FUNCTIONS, REMOVE WHEN MVP COMPLETE

// CLEAR COMPLETED TASKS FROM CHECKLIST
// only clears one at a time, need to update so it clears all tasks marked complete


// document.querySelector('#remove_complete').addEventListener('click', (evt) => {
//     evt.preventDefault();
//     for(const cb of document.querySelectorAll('.cb')){
//         if (cb.checked === true){
//             console.log(cb.checked);
//             const toClear = cb.value;
//             const queryString = new URLSearchParams({ task: toClear }).toString();
//             const url = `/clear_task?${queryString}`;
//             fetch(url)
//                 .then((response) => response.text())
//                 .then((status) => {
//                     console.log(status);
//                     if (status){
//                         const toDeleteLabel = document.getElementById(`${status}div`);
//                         toDeleteLabel.remove();
//                     }})}
//         }
//         });


// function clearButton() {
//     const toClear = document.getElementById('taskinput').value;
//     const queryString = new URLSearchParams({ task: toClear }).toString();
//     const url = `/clear_task?${queryString}`;
//     fetch(url)
//         .then((response) => response.text())
//         .then((status) => {
//             const toClearLabel = document.getElementById(`${status}div`);
//             toClearLabel.remove();
//             alert(`${status} has successfully been cleared`);
//         })
// };

// MARK COMPLETE
// for (const button of document.querySelectorAll('.complete')) {
//     button.addEventListener('click', () => {
//     // get task by button.id
//         const toComp = button.id;
//         const queryString = new URLSearchParams({ task: toComp }).toString();
//         const url = `/complete_task?${queryString}`;
//         fetch(url)
//             .then((response) => response.text())
//             .then((status) => {
//                 // insertAdjacentHTML placeholder to change style to crossout once CSS made
//                 const selectItem = document.getElementById(`${status}div`);
//                 selectItem.insertAdjacentHTML('afterbegin', '<s>complete</s>');
//     });
// });
// };

// MARKS TASK COMPLETE
// for (const button of document.querySelectorAll('.complete')) {
//     button.addEventListener('click', () => {
//     // get task by button.id
//         const toComp = button.id;
//         const queryString = new URLSearchParams({ task: toComp }).toString();
//         const url = `/complete_task?${queryString}`;
//         fetch(url)
//             .then((response) => response.text())
//             .then((status) => {
//                 // insertAdjacentHTML placeholder to change style to crossout once CSS made
//                 const selectItem = document.getElementById(`${status}div`);
//                 selectItem.insertAdjacentHTML('afterbegin', '<s>complete</s>');
//     });
// });
// };

// DELETE SELECTED TASK
// for (const button of document.querySelectorAll('.delete')) {
//     button.addEventListener('click', () => {
//     // get task by button.id
//         const toDel = button.id;
//         const answer = confirm(`are you sure you want to delete ${toDel}`);
//         if (answer) {
//             const queryString = new URLSearchParams({ task: toDel }).toString();
//             const url = `/delete_task?${queryString}`;
//             fetch(url)
//                 .then((response) => response.text())
//                 .then((status) => {
//                     console.log(status);
//                     const toDeleteLabel = document.getElementById(`${status}div`);
//                     toDeleteLabel.remove();
//                 });
//         }
//         else {
//             console.log('cancelled');
//         }
//     });
// };